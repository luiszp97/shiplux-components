//Components
import { Typography } from "../Typography"
import "../../../main.css"

//Typescript
interface ButtonProps {
	size?: "xs" | "sm" | "md" | "lg"
	label: string
	variant?: "contained" | "outline" | "text"
	color?: string
	className?: string
	onClick?: () => void
	rightIcon?: boolean
	leftIcon?: boolean
	icon?: string
	textColor?: string
}

interface variantProps {
	text: {
		backgroundColor: string
		color: string
	}

	outline: {
		border?: string
		color?: string
		backgroundColor?: string
	}
	contained: {
		backgroundColor?: string
		color?: string
	}
}

export const Button = ({
	size = "md",
	label,
	variant,
	color,
	className,
	rightIcon,
	leftIcon,
	icon,
	textColor,
	onClick,
	...props
}: ButtonProps) => {
	const buttonSizes: Record<string, string> = {
		xs: "w-fit px-2 py-1",
		sm: "px-10 py-2",
		md: "px-20 py-2",
		lg: "px-32 py-2"
	}

	const buttonVariants: variantProps = {
		text: {
			backgroundColor: "transparent",
			color: textColor ? textColor : color || "black"
		},
		outline: {
			border: `1px solid ${color ? color : "black"}`,
			color: textColor ? textColor : color || "black",
			backgroundColor: "transparent"
		},
		contained: {
			backgroundColor: color || "#1873E4",
			color: "white"
		}
	}

	const defaultProps = "rounded-[28px] font-medium gap-2 items-center"

	return (
		<button
			type="button"
			onClick={onClick}
			className={[
				className,
				defaultProps,
				buttonSizes[size],
				variant && buttonVariants[variant],
				(rightIcon || leftIcon) && "flex justify-center "
			].join(" ")}
			style={{
				...buttonVariants[variant as keyof variantProps]
			}}
			{...props}
		>
			{leftIcon && <img src={icon} width={24} height={24} />}
			<Typography style={{ color: `${textColor}` }} variant="subtitle">
				{label}
			</Typography>
			{rightIcon && <img src={icon} width={24} height={24} />}
		</button>
	)
}
