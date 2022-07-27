import React, { Children, Component, ReactElement } from "react";
import styles from "../styles/button.module.scss";
type BaseProps = {
  size?: "normal" | "medium" | "large";
};

function Button<C extends React.ElementType<any> = "button">({
  component: As,
  size = "normal",
  className,
  children,
  ...props
}: BaseProps & { component?: C } & React.ComponentPropsWithoutRef<C>) {
  return React.createElement(
    As || "button",
    {
      ...props,
      className: `${className} ${styles.btn} ${size}-size`,
    },
    ...React.Children.toArray(children)
  );
}

export default Button;
