import { ForwardedRef, HTMLAttributes, forwardRef } from "react";
import styles from "./Space.module.css";

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {}

/** Space */
export default forwardRef(function Space(
  props: SpaceProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { className, ...divProps } = props;

  return (
    <div
      data-component="Space"
      className={[styles.root, className].filter((el) => el).join(" ")}
      ref={ref}
      {...divProps}
    />
  );
});
