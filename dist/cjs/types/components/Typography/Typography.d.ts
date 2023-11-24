import { HTMLProps } from "react";
import "../../../taildwind.css";
interface TypographyProps extends HTMLProps<HTMLHeadingElement> {
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "body2" | "caption" | "subtitle";
    align?: "left" | "center" | "right" | "justify";
}
export declare const Typography: ({ variant, align, className, children, ...props }: TypographyProps) => import("react/jsx-runtime").JSX.Element;
export {};
