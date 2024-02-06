'use client';
import { useEffect, useState } from 'react';

// interface ContactInfo {
// 	name: string;
// 	email: string;
// 	message: string;
// }
// I kinda got overwhelmed with the naming, how to difference between the interface and the state props if that makes sense

export default function ContactApi() {
	const [contactInfo, setContactInfo] = useState({
		name: '',
		email: '',
		message: '',
	});

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;

		setContactInfo((prevContactInfo) => {
			const updatedContactInfo = {
				...prevContactInfo,
				[name]: value,
			};

			return updatedContactInfo;
		});
	};

	//had warnings about changing controlled inputs to uncontrolled  inputs
	useEffect(() => {
		setContactInfo({
			name: '',
			email: '',
			message: '',
		});
	}, []);
	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const res = await fetch(`/api/contact`, {
				body: JSON.stringify(contactInfo),
				method: 'POST',
			});

			// ask if i Should have used formData instead?

			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			const responseData = await res.json();

			//TODO A side effect on successful submission it would be nice to have a success message
			//TODO "thank you, Chris we will get back to you as soon as possible or something like that"

			console.log('Front responseData', responseData);
		} catch (error) {
			const err = error as Error;
			console.error(err.message);
		}
	};

	return (
		<>
			<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
				<h1>Contact Form API</h1>
				<form
					action="#"
					className="space-y-8"
					onSubmit={onSubmit}
				>
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
							onChange={onChangeHandler}
							value={contactInfo.name}
						/>
					</div>
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
							className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
							required
							name="email"
							onChange={onChangeHandler}
							value={contactInfo.email}
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
							value={contactInfo.message}
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
