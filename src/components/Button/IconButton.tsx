import { FC } from "react"
import "../../../main.css"

interface IconButtonProps {
	icon: string
	widthIcon?: number
	heightIcon?: number
	onClick?: () => void
	variant?: "contained" | "outline" | "text"
	rounded?: string
	className?: string
	color?: string
	href?: string
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

const defaultProps = "px-2 py-2 w-fit"

export const IconButton: FC<IconButtonProps> = ({
	icon,
	widthIcon,
	heightIcon,
	onClick,
	className,
	color,
	rounded,
	variant,
	// href,
	...props
}) => {
	const buttonVariants: variantProps = {
		text: {
			backgroundColor: "transparent",
			color: color || "black"
		},
		outline: {
			border: `1px solid ${color ? color : "black"}`,
			color: color || "black",
			backgroundColor: "transparent"
		},
		contained: {
			backgroundColor: color || "#1873E4",
			color: "white"
		}
	}
	return (
		<button
			style={{
				borderRadius: `${rounded ? rounded : "4px"}`,
				backgroundColor: `${color ? color : "transparent"}`,
				...buttonVariants[variant as keyof variantProps]
			}}
			{...props}
			className={[className, defaultProps].join(" ")}
			onClick={() => {
				onClick
				// href && ;
			}}
		>
			<img src={icon} width={widthIcon ? widthIcon : 24} height={heightIcon ? heightIcon : 24} />
		</button>
	)
}
