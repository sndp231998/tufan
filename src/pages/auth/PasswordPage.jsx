export default function PasswordPage() {
	return (
		<div className="flex items-center justify-center pt-24">
			<div className="bg-white dark:bg-background p-8 rounded-lg w-full max-w-md border">
				<h1 className="text-2xl font-bold text-center mb-6 text-titleColor">Enter your new password</h1>
				<div className="md:px-8">

					<form>
						<div className="mb-6">
							<label className="block text-sm font-medium mb-2" htmlFor="password1">
								Enter your new password
							</label>
							<input
								type="password"
								id="password1"
								placeholder="Enter new password"
								className="w-full px-3 py-5 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="mb-6">
							<label className="block text-sm font-medium mb-2" htmlFor="password2">
								Confirm Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="Confirm Password"
								className="w-full px-3 py-5 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-titleColor text-white py-4 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Save
						</button>
					</form>
				</div>
			</div>
		</div>

	);
}
