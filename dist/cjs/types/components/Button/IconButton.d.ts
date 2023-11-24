import { FC } from "react";
import "../../../main.css";
interface IconButtonProps {
    icon: string;
    widthIcon?: number;
    heightIcon?: number;
    onClick?: () => void;
    variant?: "contained" | "outline" | "text";
    rounded?: string;
    className?: string;
    color?: string;
    href?: string;
}
export declare const IconButton: FC<IconButtonProps>;
export {};
