//https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms
// 'use client';
// import { useState } from 'react';

// import ServerSuccess from '../ServerSuccess/ServerSuccess';

export default function ContactServer() {
	// const [isSuccess, setIsSuccess] = useState(false);
	// const [isLoading, setIsLoading] = useState(false);
	//
	// can i add useState here for the form data?
	// const [formData, setFormData] = useState<FormData>();

	// I'm lost on how i can show a success message to the client
	async function handleServerAction(formData: FormData) {
		'use server';

		try {
			// according to the examples, we ned rawFormData, but where do we set it?
			// When we submit we are using the FormData API to get the values from the form
			// setIsLoading(true);

			const rawFormData = {
				name: formData.get('name'),
				email: formData.get('email'),
				message: formData.get('message'),
			};
			// setIsSuccess(true);
			console.log('rawFormData', rawFormData);

			// wait for the fetch to complete
			// const res = await fetch('/api/contact', {});
			// if (!res.ok) {
			// 	throw new Error(`HTTP error! Status: ${res.status}`);
			// }
			// const responseData = await res.json();
			// console.log('responseData', responseData);

			// return responseData;
		} catch (err) {
			console.error('error', err);
		} finally {
			// setIsLoading(false);
		}
	}

	return (
		<>
			{/* {isLoading && <div>Loading...</div>}
			{isSuccess && <div>Thank you for your message</div>} */}
			<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
				{/* <ServerSuccess /> */}

				<h1>Contact Form Server</h1>
				<form
					action={handleServerAction}
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
