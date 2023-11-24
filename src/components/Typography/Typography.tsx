import { HTMLProps } from "react"
import "../../../main.css"

interface TypographyProps extends HTMLProps<HTMLHeadingElement> {
	variant: "h1" | "h2" | "h3" | "h4" | "h5" | "body" | "body2" | "caption" | "subtitle"
	align?: "left" | "center" | "right" | "justify"
	// className?: string;
	// label?: string;
	// children?: ReactNode;
}

export const Typography = ({
	variant,
	// label,
	align,
	className,
	children,
	...props
}: TypographyProps) => {
	const alignText: Record<string, string> = {
		left: "text-left",
		center: "text-center",
		right: "text-right",
		justify: "text-justify"
	}

	switch (variant) {
		case "h1":
			return (
				<h1
					{...props}
					className={[
						className && className,
						"text-6xl font-medium leading-10 tracking-[-1.12px] ",
						align && alignText[align]
					].join(" ")}
				>
					{children}
				</h1>
			)
		case "h2":
			return (
				<h2
					{...props}
					className={[
						className && className,
						"text-5xl font-medium leading-9 tracking-[-1.12px] ",
						align && alignText[align]
					].join(" ")}
				>
					{children}
				</h2>
			)
		case "h3":
			return (
				<h3
					{...props}
					className={[
						className && className,
						"text-3xl font-medium leading-8 tracking-[-1.12px] ",
						align && alignText[align]
					].join(" ")}
				>
					{children}
				</h3>
			)
		case "h4":
			return (
				<h4
					{...props}
					className={[
						className && className,
						"text-2xl tracking-[-1.12px] ",
						align && alignText[align]
					].join(" ")}
				>
					{children}
				</h4>
			)
		case "h5":
			return (
				<h5
					{...props}
					className={[
						className && className,
						"text-xl tracking-[-1.12px] ",
						align && alignText[align]
					].join(" ")}
				>
					{children}
				</h5>
			)
		case "body":
			return (
				<p
					{...props}
					className={[
						className && className,
						"text-lg tracking-[-1.12px] ",
						align && alignText[align]
					].join(" ")}
				>
					{children}
				</p>
			)
		case "body2":
			return (
				<p
					{...props}
					className={[
						className && className,
						"text-base tracking-[-1.12px] ",
						align && alignText[align]
					].join(" ")}
				>
					{children}
				</p>
			)
		case "subtitle":
			return (
				<p
					{...props}
					className={[
						className && className,
						"text-sm tracking-[-1.12px] ",
						align && alignText[align]
					].join(" ")}
				>
					{children}
				</p>
			)
		case "caption":
			return (
				<p
					{...props}
					className={[
						className && className,
						"text-xs tracking-[-1.12px] ",
						align && alignText[align]
					].join(" ")}
				>
					{children}
				</p>
			)

		default:
			return <p>{children}</p>
	}
}
