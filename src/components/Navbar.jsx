import { Link } from "react-router-dom";
import { PATHS } from "../constants/path";
import { useContext, useState } from "react";
import { ThemeContext } from "../themeContext";
import Logo from "../assets/tufanLogo.png";

const ChevronDownIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
		<polyline points="6 9 12 15 18 9"></polyline>
	</svg>
);

const MenuIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
		<line x1="3" y1="12" x2="21" y2="12"></line>
		<line x1="3" y1="6" x2="21" y2="6"></line>
		<line x1="3" y1="18" x2="21" y2="18"></line>
	</svg>
);

const CloseIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
		<line x1="18" y1="6" x2="6" y2="18"></line>
		<line x1="6" y1="6" x2="18" y2="18"></line>
	</svg>
);

const ThemeToggle = ({ theme, toggleTheme }) => (
	<button
		onClick={toggleTheme}
		className="relative group"
		aria-label="Toggle theme"
	>
		<div className="relative w-20 h-8 rounded-full border border-titleColor bg-gray-200 dark:bg-gray-700 transition-colors duration-300 ease-in-out">
			{/* Background Gradient Effect */}
			<div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>

			{/* Container for Text and Knob */}
			<div className="relative w-full h-full flex items-center justify-between px-2">
				{/* Light Text */}
				<span className={`text-xs font-medium z-10 transition-all duration-300 ${theme === "light"
					? "opacity-0"
					: "opacity-100 text-foreground"
					}`}>
					Dark
				</span>

				{/* Toggle Knob */}
				<div
					className={`absolute top-1 left-1.5 z-20 w-6 h-6 rounded-full shadow-md transition-all duration-300 ease-in-out ${theme === "dark"
						? "translate-x-11 bg-gray-800"
						: "translate-x-1 bg-white"
						}`}
				>
					{/* Knob Inner Shadow */}
					<div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/5"></div>
				</div>

				{/* Dark Text */}
				<span className={`text-xs font-medium z-10 transition-all duration-300 ${theme === "light"
					? "opacity-100 text-gray-700"
					: "opacity-0"
					}`}>
					Light
				</span>
			</div>

			{/* Subtle Border */}
			<div className="absolute inset-0 rounded-full border border-black/5 dark:border-white/5"></div>
		</div>
	</button>
);

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [language, setLanguage] = useState('English');

	const toggleMenu = () => {
		setOpen(!open);
	};

	return (
		<nav className="fixed top-0 left-0 z-50 w-full py-6 px-6 bg-white dark:bg-[#262728] shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link to={PATHS.HOME}>
						<img className="w-20" src={Logo} />
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						<Link to={PATHS.HOME}>
							<span className="text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200 font-bold">
								Home
							</span>
						</Link>

						<div className="relative group">
							<button className="flex items-center space-x-1 text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200 font-bold">
								<span>Services</span>
								<ChevronDownIcon />
							</button>
						</div>

						<Link to={PATHS.BLOG}>
							<span className="text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200 font-bold">
								Blog
							</span>
						</Link>

						<Link to={PATHS.FAQ}>
							<span className="text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200 font-bold">
								FAQ
							</span>
						</Link>

						<Link to={PATHS.CONTACT}>
							<span className="text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200 font-bold">
								Contact Us
							</span>
						</Link>

						<div className="relative group">
							<button className="flex items-center space-x-1 text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200 font-bold">
								<span>Language</span>
								<ChevronDownIcon />
							</button>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="hidden md:flex items-center space-x-4">
						<Link to={PATHS.LOGIN}>
							<button className="px-4 py-1 rounded-lg bg-[#E85C40] text-white hover:bg-[#d54e35] transition-colors duration-200 font-bold">
								Login
							</button>
						</Link>
						<ThemeToggle theme={theme} toggleTheme={toggleTheme} />
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={toggleMenu}
							className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 font-bold"
							aria-label="Toggle menu"
						>
							{open ? <CloseIcon /> : <MenuIcon />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{open && (
					<div className="md:hidden mt-4">
						<div className="flex flex-col space-y-4 px-2 pt-2 pb-3">
							<Link to={PATHS.HOME} onClick={() => setOpen(false)}>
								<span className="block text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200">
									Home
								</span>
							</Link>

							<button className="flex items-center justify-between text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200">
								<span>Services</span>
								<ChevronDownIcon />
							</button>

							<Link to={PATHS.BLOG} onClick={() => setOpen(false)}>
								<span className="block text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200">
									Blog
								</span>
							</Link>

							<Link to={PATHS.FAQ} onClick={() => setOpen(false)}>
								<span className="block text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200">
									FAQ
								</span>
							</Link>

							<Link to={PATHS.CONTACT} onClick={() => setOpen(false)}>
								<span className="block text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200">
									Contact Us
								</span>
							</Link>

							<button className="flex items-center justify-between text-gray-800 dark:text-white hover:text-[#E85C40] transition-colors duration-200">
								<span>Language</span>
								<ChevronDownIcon />
							</button>

							<Link to={PATHS.LOGIN} onClick={() => setOpen(false)}>
								<button className="px-6 py-2 rounded-lg bg-[#E85C40] text-white hover:bg-[#d54e35] transition-colors duration-200">
									Login
								</button>
							</Link>

							<ThemeToggle theme={theme} toggleTheme={toggleTheme} />
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
