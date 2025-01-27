import { PATHS } from "../../constants/path"
export default function RegisterPage() {
	return (
		<div className="flex items-center justify-center pt-10 pb-10">
			<div className="bg-white dark:bg-background p-8 rounded-lg w-full max-w-md border">
				<h1 className="text-2xl font-bold text-center mb-6 text-titleColor">Signup</h1>
				<div className="md:px-4">

					<form>
						<div className="mb-4">
							<label className="block text-sm font-medium mb-2" htmlFor="fullName">
								Full Name
							</label>
							<input
								type="text"
								id="fullName"
								placeholder="Enter your full name here"
								className="w-full px-3 py-5 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium mb-2" htmlFor="phone">
								Phone Number
							</label>
							<input
								type="text"
								id="phone"
								placeholder="Enter your phone number here"
								className="w-full px-3 py-5 border  bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium mb-2" htmlFor="email">
								Email
							</label>
							<input
								type="text"
								id="email"
								placeholder="Enter your email here"
								className="w-full px-3 py-5 border bg-background  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<div className="mb-6">
							<label className="block text-sm font-medium mb-2" htmlFor="profilePhoto">
								Profile Photo
							</label>
							<input
								type="image"
								id="profilePhoto"
								placeholder="Upload a profile photo(png.jpeg)"
								className="w-full px-3 py-5 border border-gray-300 bg-background  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<div className="mb-6">
							<label className="block text-sm font-medium mb-2" htmlFor="address">
								Address
							</label>
							<input
								type="text"
								id="address"
								placeholder="Enter your address here"
								className="w-full px-3 py-5 border border-gray-300 bg-background  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-titleColor text-white py-4 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Register
						</button>
					</form>
				</div>
				<div className="mt-4 text-center">
					<p>Already have an account? <a href={PATHS.FORGOTPASSWORD} className="text-sm text-titleColor hover:underline">
						Login
					</a></p>
				</div>
			</div>
		</div>
	)
}
