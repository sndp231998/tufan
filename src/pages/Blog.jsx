import { useContext, useState } from "react";

export default function Blog() {

	const [RecentPost, setRecentPost] = useState([
		{ id: 0, title: "Test Title", body: "test body" },
		{ id: 1, title: "Test Title", body: "test body" },
		{ id: 2, title: "Test Title", body: "test body" },
		{ id: 3, title: "Test Title", body: "test body" }
	])
	return (
		<>
			<div className="flex flex-wrap-reverse border border-red-700 mt-4">
				<div className="flex flex-col gap-3 md:gap-8 w-full md:w-1/3 bg-red-300 p-4">
					<form>
						<input className="w-full py-5 px-6 border border-gray-300 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Type something" />

					</form>
					<div className="flex flex-col justify-center p-4 border border-gray-300 gap-3 rounded-md">
						<p className="text-lg md:text-2xl font-bold text-center"> RECENT POSTS </p>
						{RecentPost.map((item) => (
							<div className="flex flex-col p-2 bg-white rounded-md" key={item.id}>
								<p className="text-md md:text-lg font-bold">{item.title}</p>
								<p className="text-sm p-2">{item.body}</p>
							</div>
						))}
					</div>
					<div className="flex flex-col justify-center p-4 border border-gray-300 gap-3 rounded-md">
						<p className="text-lg md:text-2xl font-bold text-center"> POPULAR POSTS </p>
						<div className="flex p-3 gap-2 bg-yellow-400 max-h-20">
							<img className="h-full" src="https://s3-alpha-sig.figma.com/img/1435/4125/95424069a64e2a599ea4525248275b32?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LPFf7m2W0HahxhG1RoZeZhGBJdcgDv36sE1YdFNCpIFyE~lD2oDdz6-ctejaV7Gm8sG4~BZNzpFB6cy6bs5K7g3rzrF1Ys4AV6~3ewVvoUza8HjJFqDV-aK8dZpkwL3ueDm2wY-RqBgORMqFUP~D37JdP~3b0kq2XrZ-i4xvblb5DqGuyJn3W6MX9pn9hT7SNMewPCLY62YgEVm5Z8xtOo1g~B6OGA80~ZUtv0dkMl9tt3f3C7yaA5ENyJTlXzC5chtUcKcUWN~JLuzDPdbLXf1D0WELhfPUn3iNEfJ7XZ-kB5VJ7LXPDIchXcs0jwiKudWEgFkqXaCxVmkqWBzXrg__" />
							<p className="py-4 bg-pink-300 w-full align-center flex font-bold">This is the most popular blog post</p>
						</div>
						<div className="flex p-3 gap-2 bg-yellow-400 max-h-20">
							<img className="h-full" src="https://s3-alpha-sig.figma.com/img/1435/4125/95424069a64e2a599ea4525248275b32?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LPFf7m2W0HahxhG1RoZeZhGBJdcgDv36sE1YdFNCpIFyE~lD2oDdz6-ctejaV7Gm8sG4~BZNzpFB6cy6bs5K7g3rzrF1Ys4AV6~3ewVvoUza8HjJFqDV-aK8dZpkwL3ueDm2wY-RqBgORMqFUP~D37JdP~3b0kq2XrZ-i4xvblb5DqGuyJn3W6MX9pn9hT7SNMewPCLY62YgEVm5Z8xtOo1g~B6OGA80~ZUtv0dkMl9tt3f3C7yaA5ENyJTlXzC5chtUcKcUWN~JLuzDPdbLXf1D0WELhfPUn3iNEfJ7XZ-kB5VJ7LXPDIchXcs0jwiKudWEgFkqXaCxVmkqWBzXrg__" />
							<p className="py-4 bg-pink-300 w-full align-center flex font-bold">This is the most popular blog post</p>
						</div>
						<div className="flex p-3 gap-2 bg-yellow-400 max-h-20">
							<img className="h-full" src="https://s3-alpha-sig.figma.com/img/1435/4125/95424069a64e2a599ea4525248275b32?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LPFf7m2W0HahxhG1RoZeZhGBJdcgDv36sE1YdFNCpIFyE~lD2oDdz6-ctejaV7Gm8sG4~BZNzpFB6cy6bs5K7g3rzrF1Ys4AV6~3ewVvoUza8HjJFqDV-aK8dZpkwL3ueDm2wY-RqBgORMqFUP~D37JdP~3b0kq2XrZ-i4xvblb5DqGuyJn3W6MX9pn9hT7SNMewPCLY62YgEVm5Z8xtOo1g~B6OGA80~ZUtv0dkMl9tt3f3C7yaA5ENyJTlXzC5chtUcKcUWN~JLuzDPdbLXf1D0WELhfPUn3iNEfJ7XZ-kB5VJ7LXPDIchXcs0jwiKudWEgFkqXaCxVmkqWBzXrg__" />
							<p className="py-4 bg-pink-300 w-full align-center flex font-bold">This is the most popular blog post</p>
						</div>
					</div>
				</div>
				<div className="bg-purple-300 w-full md:w-2/3 p-6 border">
					<div className="w-full max-w-7xl mx-auto">
						<div className="relative w-full px-4 sm:px-6 lg:px-8">
							<h1 className="text-lg lg:text-xl font-bold mb-6">
								REVOLUTIONIZING TRAVEL: HOW RIDE-SHARING AND ONLINE BUS TICKETING ARE CHANGING THE WAY WE COMMUTE
							</h1>
							<div className="w-full h-64 md:h-96 relative overflow-hidden">
								<img
									src="https://s3-alpha-sig.figma.com/img/1435/4125/95424069a64e2a599ea4525248275b32?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LPFf7m2W0HahxhG1RoZeZhGBJdcgDv36sE1YdFNCpIFyE~lD2oDdz6-ctejaV7Gm8sG4~BZNzpFB6cy6bs5K7g3rzrF1Ys4AV6~3ewVvoUza8HjJFqDV-aK8dZpkwL3ueDm2wY-RqBgORMqFUP~D37JdP~3b0kq2XrZ-i4xvblb5DqGuyJn3W6MX9pn9hT7SNMewPCLY62YgEVm5Z8xtOo1g~B6OGA80~ZUtv0dkMl9tt3f3C7yaA5ENyJTlXzC5chtUcKcUWN~JLuzDPdbLXf1D0WELhfPUn3iNEfJ7XZ-kB5VJ7LXPDIchXcs0jwiKudWEgFkqXaCxVmkqWBzXrg__"
									alt="Motorcycle Illustration"
									className="w-full h-full object-contain"
								/>
							</div>
						</div>

						{/* Content Section */}
						<div className="px-4 sm:px-6 lg:px-8 py-8">
							<p className="text-lg leading-relaxed mb-6">
								Strengthening connections within communities by offering solutions that address
								local mobility needs. Our innovative approach combines modern ride-sharing
								technology with streamlined online bus ticketing systems to create a more
								accessible and efficient transportation network.
							</p>
							<p className="text-md leading-relaxed mb-6">
								By integrating these services, we're making it easier for people to move
								within their communities while reducing the environmental impact of daily
								commutes. Our platform brings together various transportation options,
								allowing users to choose the most convenient and cost-effective solution
								for their needs.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex gap-4 bg-purple-200 p-4 m-5">
				<div className="w-1/3 border bg-pink-200">
					<p>1</p>
				</div>
				<div className="w-1/3 bg-white border"></div>
				<div className="w-1/3 bg-white border"></div>
			</div>
		</>
	);
}
