import { useState } from "react";
export default function Faq() {
	const [faqdata, setFaqData] = useState([
		{ id: 0, question: "How is life going?", answer: "Life sucks!", open: false },
		{ id: 1, question: "How is life going?", answer: "Life sucks!", open: false },
		{ id: 2, question: "How is life going?", answer: "Life sucks!", open: false },
		{ id: 3, question: "How is life going?", answer: "Life sucks!", open: false },
		{ id: 4, question: "How is life going?", answer: "Life sucks!", open: false },
		{ id: 5, question: "How is life going?", answer: "Life sucks!", open: false },

	]);

	const toggleOpen = (id) => {
		setFaqData((prevData) => (
			prevData.map((item) => (
				item.id === id ? { ...item, open: !item.open } : item
			))
		))
	}

	const PlusIcon = ({ faqOpen }) => (
		faqOpen ? (<svg className="w-6 h-6 " viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>) : (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
		)
	);


	return (
		<>
			<div className="flex flex-col flex-initial max-w-7xl justify-center mx-auto gap-3 bg-background w-full p-5">
				<div className="flex-1 mt-3 text-center">
					<p className="text-titleColor text-2xl font-bold">FAQ SECTION</p>
				</div>
				<div className="flex flex-col flex-1 bg-white dark:bg-background text-center p-5 md:p-20 gap-2 rounded-md">
					<div className="flex flex-col justify-around pl-2 pt-2">
						{faqdata.map((item) => (
							<div key={item.id} className="border rounded-md p-3 m-2 flex flex-col">
								<div className="flex items-center justify-between">
									<p className="w-full text-sm md:text-xl text-start font-bold">
										{item.question}
									</p>
									<button
										onClick={() => toggleOpen(item.id)}
										className="flex items-center justify-center"
									>
										<PlusIcon faqOpen={item.open} />
									</button>
								</div>

								{item.open && (
									<div className="mt-3">
										<p className="pl-3 w-full text-sm text-start whitespace-pre-line">
											{item.answer}
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
