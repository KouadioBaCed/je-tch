import * as React from "react";
import { cn } from "@/lib/utils";

type AnyProps = Record<string, unknown>;

/**
 * Minimal `asChild` Slot (Radix-free), safe for React 19 + Server Components.
 * Clones its single child, merging className / style / handlers. A ref is only
 * forwarded when one actually exists — never synthesized — so it can be used
 * inside Server Components (e.g. `<Button asChild><Link/></Button>`).
 */
export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, className, style, ...props }, ref) => {
    if (!React.isValidElement(children)) return null;

    const child = children as React.ReactElement<AnyProps>;
    const childProps = child.props;
    const childRef = childProps.ref as React.Ref<HTMLElement> | undefined;

    const merged: AnyProps = {
      ...props,
      ...childProps,
      className: cn(className, childProps.className as string | undefined),
      style: { ...(style ?? {}), ...((childProps.style as React.CSSProperties) ?? {}) },
    };

    // Only forward a ref if the consumer provided one — avoids passing a
    // function ref to a client component during server prerender.
    if (ref || childRef) {
      merged.ref = mergeRefs(ref, childRef);
    }

    return React.cloneElement(child, merged);
  }
);
Slot.displayName = "Slot";

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T) => {
    for (const r of refs) {
      if (typeof r === "function") r(node);
      else if (r && typeof r === "object") {
        (r as React.MutableRefObject<T>).current = node;
      }
    }
  };
}
