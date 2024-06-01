import {CiMail, CiInstagram} from 'react-icons/ci';
import {FaTiktok, FaInstagram} from 'react-icons/fa6';
const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-white text-gray-800 py-12 flex flex-col gap-4 w-full">
			<CiMail className="relative mx-12 " size={50} />
			<div className="border-t-2  border-gray-800 "></div>
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mx-12 mt-8 w-full">
				<div className="col-span-1 lg:col-span-2">
					<h1 className="text-6xl tracking-wider">
						<strong>SHOOT US A MESSAGE!</strong>
					</h1>
				</div>
				<div className="flex flex-col">
					<div className="text-xl pt-4">
						<strong>CONTACT</strong>
					</div>
					<div className="text-sm pt-4">piewpiew@weshootbutdontkill.com</div>
				</div>
				<div className="flex flex-col">
					<div className="text-xl pt-4">
						<strong>FOLGEN</strong>
					</div>
					<div className="pt-4">
						<div className="flex gap-4">
							<FaInstagram className="w-6 h-6" />
							<FaTiktok className="w-6 h-6" />
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center space-between gap-4 w-full px-12">
				<div className="text-sm mt-4 w-1/2">© WE SHOOT BUT DONT KILL! {currentYear}</div>
				<div className="text-sm mt-4 w-1/2 text-right">
					<a href="https://weshootbutdontkill.com/datenschutzerklaerung/">IMPRINT</a>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
