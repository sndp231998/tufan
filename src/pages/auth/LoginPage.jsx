import { PATHS } from "../../constants/path"
export default function LoginPage() {
	return (
		<div className="flex items-center justify-center pt-24 pb-16">
			<div className="bg-white dark:bg-background p-8 rounded-lg w-full max-w-md border">
				<h1 className="text-2xl font-bold text-center mb-6 text-titleColor">Login to Tufan</h1>
				<div className="md:px-8">

					<form>
						<div className="mb-4">
							<label className="block text-sm font-medium mb-2" htmlFor="phone">
								Phone Number
							</label>
							<input
								type="text"
								id="phone"
								placeholder="Enter your phone number here"
								className="w-full px-3 py-5 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="mb-6">
							<label className="block text-sm font-medium mb-2" htmlFor="password">
								Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="Enter your password here"
								className="w-full px-3 py-5 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-titleColor text-white py-4 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Login
						</button>
					</form>
				</div>
				<div className="mt-4 text-center">
					<a href={PATHS.FORGOTPASSWORD} className="text-sm text-titleColor hover:underline">
						Forgotten Password?
					</a>
				</div>
				<div className="mt-6 text-center">
					<a href={PATHS.REGISTER} className="text-sm bg-[#F08418] rounded-md text-white w-full p-4">
						Register here
					</a>
				</div>
			</div>
		</div>
	)
}
