import { useState } from "react"
import "../../../taildwind.css"
export const ChangeThemeButton = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)
	return (
		<div className="w-[72px] h-[32px] rounded-[100px] border-2 border-light-gray gap-2 flex ">
			<div
				className={[
					isDarkMode && "translate-x-[38px]",
					"rounded-full p-2 bg-[#DDE3EF] w-[30px] h-[28px]  absolute"
				].join(" ")}
			></div>
			<div
				onClick={() => {
					setIsDarkMode(!isDarkMode)
				}}
				className="w-1/2 flex justify-center items-center cursor-pointer"
			>
				<img src="/public/sun.svg" alt="sun icon" width={15} height={15} className="z-10" />
			</div>
			<div
				onClick={() => {
					setIsDarkMode(!isDarkMode)
				}}
				className="w-1/2 flex justify-center items-center cursor-pointer"
			>
				<img
					src="/public/moon.svg"
					alt="sun icon"
					width={25}
					height={25}
					className="z-10 bg-transparent"
				/>
			</div>
		</div>
	)
}
