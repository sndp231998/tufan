import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import Navbar from "../components/Navbar";
import Misson from "../components/Misson";

export default function Home() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const features = [
		{id:0, text:"Seamless Bus Ticketing"},
		{id:1, text:"Subscription-Based Ride Sharing"},
		{id:2, text:"Efficient Bus Route Management"},
		{id:3, text:"Safe and Reliable Travel Experience"},
		{id:4, text:"Cutting-Edge Technology Integration"},
	]
	return (
		<>
		<div className="flex flex-col flex-initial max-w-7xl justify-center mx-auto">
		{/* Company description and banner image  */}
		<div className="md:p-3 flex flex-col-reverse flex-wrap md:flex-row bg-background dark:bg-background">
		<div className="flex flex-col gap-2 flex-1 shadow-sm border md:m-3 p-5 border-white rounded-lg bg-white dark:bg-[#262728] dark:border-[#262728]">
		<h2 className="text-titleColor text-lg font-bold">
		Company Overview
		</h2>
		<div>
		<p className="p2 md:p-3 font-light leading-6 md:leading-[44.05px]">
		Tufan is redefining transportation with innovative solutions.
		Our seamless bus ticketing system and subscription-based
		ride-sharing model prioritize safety, efficiency, and customer
		satisfaction. By leveraging cutting-edge technology, Tufan
		ensures a reliable, dynamic, and cost-effective travel
		experience for both passengers and operators. Join us to ride
		smart and travel safe with Tufan.
		</p>
		</div>
		</div>
		<div className="flex flex-1 borde m-3 justify-center align-center p-3">
		<img
		alt="Banner Image"
		className="w-full h-full"
		src="https://s3-alpha-sig.figma.com/img/f692/b26e/313797b2635cb4e1f4a88134873169c9?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYH-5~GQ4xuYpLbKZV9nz5gN4NJ0nFDuRf45wet~qYalvRQLiXdOU9fgQyLuUwPEcBlfgYSu~bsUblKV2vE6x4e9~HNaa~Xj5wC~LFTg2-y~91ypsrqAdy52JblnHJsgX~voDs0CxJF5f9-gZ2IVajGDWNLyJHQKSizdFM4Qqv51DEbwuNLyeXN15a~YkFJFD465ztK7CRPUiQgeAu6to19equof0E2bjiiVegF2BQl8eZSNi92kE4393hP~8MyPNKIIUQdDkhEwcL1JUZRICLAB9Cy-5AUJscjK7w4WdBm~dIEGKiVfQlMLjoPPalXHlvmJwMS7D3KXyr9RdZcwEg__"
		/>
		</div>
		</div>
		{/* End Company description and banner image */}

		{/* Uselsee Container */}
		<div className="md:p-6 p-3">
		<img className="w-full h-full border-[#DCDCDC] h-[472px] border rounded-lg bg-white dark:bg-background " src="https://s3-alpha-sig.figma.com/img/aa97/5339/bfd01ded4de40ccb5522aadca48800b6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mEisHfq5uC4tg-OCkTJlqjOIUpRTrEUTtCwHuhRDalQLg3oLp34mNzYs6EDi4gcA8v9R-XJ7kn~Rq6Vl0heQcEZsfSMwna0Mzf1GUlP7oV6ViuxnVyGHvKLFA~MmozppLw0t69UivAAq5cSuha8jKUYUwBHiom88yrKI-p-AjKKuU3QoK6A0fmc7WfAwUN9ttfz~bDA0yb3WhitzAygYwMgyzxL1W3ZHo4C92owax9vpgHchK6zOcdwgE~3Anzbcz4c9qKQ6JT8APUlCYQh0C6zA~BQe5MiqIBzMAbu~42FAml0tJoBj0gc80yvQvoRoiamlcuAjst6xsH8k~h2Pow__" />
		</div>

		{/* Features */}
		<div className="md:p-3 flex flex-col flex-wrap md:flex-row bg-background dark:bg-background">
		<div className="flex-1 border md:m-3 p-5 border-white rounded-lg bg-white dark:bg-[#262728] dark:border-[#262728]">
		<h2 className="text-titleColor text-lg font-bold">Our Features</h2>
		<div className="p-3 ml-5 font-light leading-[44.05px]">
		<ol className="list-decimal">
		{features.map((feature) => (
			<li className="∂" key={feature.id}>
			{feature.text}
			</li>
		))}
		</ol>
		</div>
		</div>
		<div className="flex flex-1 m-3 justify-center align-center p-3">
		<img
		alt="Banner Image"
		className=""
		src="https://s3-alpha-sig.figma.com/img/f692/b26e/313797b2635cb4e1f4a88134873169c9?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYH-5~GQ4xuYpLbKZV9nz5gN4NJ0nFDuRf45wet~qYalvRQLiXdOU9fgQyLuUwPEcBlfgYSu~bsUblKV2vE6x4e9~HNaa~Xj5wC~LFTg2-y~91ypsrqAdy52JblnHJsgX~voDs0CxJF5f9-gZ2IVajGDWNLyJHQKSizdFM4Qqv51DEbwuNLyeXN15a~YkFJFD465ztK7CRPUiQgeAu6to19equof0E2bjiiVegF2BQl8eZSNi92kE4393hP~8MyPNKIIUQdDkhEwcL1JUZRICLAB9Cy-5AUJscjK7w4WdBm~dIEGKiVfQlMLjoPPalXHlvmJwMS7D3KXyr9RdZcwEg__"
		/>
		</div>
		</div>
		{/* Feature End */}

		{/* MISSION | VISION | VALUES */}
		<div className="md:p-3 flex flex-col flex-wrap md:flex-row bg-background dark:bg-background">
		<Misson />
		</div>
		</div>
		</>
	);
}
