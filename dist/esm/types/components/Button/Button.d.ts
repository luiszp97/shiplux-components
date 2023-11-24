import "../../../taildwind.css";
interface ButtonProps {
    size?: "xs" | "sm" | "md" | "lg";
    label: string;
    variant?: "contained" | "outline" | "text";
    color?: string;
    className?: string;
    onClick?: () => void;
    rightIcon?: boolean;
    leftIcon?: boolean;
    icon?: string;
    textColor?: string;
}
export declare const Button: ({ size, label, variant, color, className, rightIcon, leftIcon, icon, textColor, onClick, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
