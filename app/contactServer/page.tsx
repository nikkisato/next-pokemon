'use Server';
//https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms

import { useState } from 'react';

export default function ContactServer() {
	// this one submits to the server
	async function handleServerAction() {
		//why?
		'use server';
		const rawhtmlFormData = {
			name: '',
			email: '',
			message: '',
		};
	}

	const [contactInfo, setContactInfo] = useState({
		name: '',
		email: '',
		message: '',
	});

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setContactInfo((prevContactInfo) => ({
			...prevContactInfo,
			[name]: value,
		}));
		console.log('contactInfo', contactInfo);
	};

	return (
		<>
			<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
				<h1>Contact Form Server</h1>
				<form
					action="#"
					className="space-y-8"
				>
					<div>
						<label
							htmlFor="email"
							className="block font-bold md:text-left mb-1 md:mb-0 pr-4"
						>
							Your email
						</label>
						<input
							type="email"
							id="email"
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							required
							onChange={onChangeHandler}
							name="email"
						/>
					</div>
					<div>
						<label
							htmlFor="subject"
							className="block font-bold md:text-left mb-1 md:mb-0 pr-4"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							required
							onChange={onChangeHandler}
							name="name"
						/>
					</div>
					<div className="sm:col-span-2">
						<label
							htmlFor="message"
							className="block font-bold md:text-left mb-1 md:mb-0 pr-4"
						>
							Your message
						</label>
						<textarea
							id="message"
							rows={6}
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							placeholder="Leave a message..."
							onChange={onChangeHandler}
							name="message"
						></textarea>
					</div>
					<button
						type="submit"
						className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
					>
						Send message
					</button>
				</form>
			</div>
		</>
	);
}
