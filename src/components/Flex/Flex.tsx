import { ForwardedRef, HTMLAttributes, forwardRef, CSSProperties } from "react";
import styles from "./Flex.module.css";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  "data-component"?: string;
  direction?: "row" | "column";
  reverse?: boolean;
  gap?: string | number;
  alignItems?: CSSProperties["alignItems"];
  justifyContent?: CSSProperties["justifyContent"];
}

/** Flex */
export default forwardRef(function Flex(
  props: FlexProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const {
    "data-component": dataComponent,
    children,
    className,
    style,
    direction = "row",
    reverse = false,
    alignItems = direction === "row" ? "center" : "start",
    justifyContent,
    gap,
    ...divProps
  } = props;

  return (
    <div
      data-component={dataComponent ? `Flex/${dataComponent}` : "Flex"}
      className={[
        styles.root,
        direction === "column" && (reverse ? styles._column_reverse : styles._column), // prettier-ignore
        direction === "row" && (reverse ? styles._row_reverse : styles._row),
        className,
      ]
        .filter((el) => el)
        .join(" ")}
      ref={ref}
      style={{
        "--direction": reverse ? `${direction}-reverse` : direction,
        "--align-items": alignItems,
        "--justify-content": justifyContent,
        "--gap": typeof gap === "number" ? `${gap}px` : gap,
        ...style,
      }}
      {...divProps}
    >
      {children}
    </div>
  );
});
