export default function OtpPage() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="bg-white dark:bg-background p-8 rounded-lg w-full max-w-lg border">
				<h1 className="text-2xl font-bold text-center mb-6 text-titleColor">Enter a 6-digit OTP code sent to your phone and email address</h1>
				<div className="">

					<form>
						<div className="mb-6">

							<input
								type="password"
								id="password"
								placeholder="Enter otp code"
								className="w-full px-3 py-5 bg-background border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-titleColor text-white py-4 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							Confirm
						</button>
					</form>
				</div>
			</div>
		</div>

	)
}
