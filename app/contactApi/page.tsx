'use client';
import Navigation from '@/components/Navigation/Navigation';
import { useState } from 'react';

export default function ContactApi() {
	// using a generic since i removed the Interface
	const [name, setName] = useState<String>('');
	const [email, setEmail] = useState<String>('');
	const [message, setMessage] = useState<String>('');

	const [isSuccess, setIsSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;

		// checking the name of the input and setting the state accordingly
		switch (name) {
			case 'name':
				setName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'message':
				setMessage(value);
				break;
			default:
				break;
		}
	};

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		//combining them into one object for the fetch
		const contactInfo = {
			name: name,
			email: email,
			message: message,
		};

		console.log('ContactInfo', contactInfo);

		try {
			setIsLoading(true);
			const res = await fetch(`/api/contact`, {
				body: JSON.stringify(contactInfo),
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}

			const responseData = await res.json();
			setIsSuccess(true);

			console.log('Front responseData', responseData);
		} catch (error) {
			const err = error as Error;
			console.error(err.message);
		} finally {
			//google this
			setIsLoading(false);
		}
	};

	return (
		<>
			<main id="main">
				<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
					<Navigation title="Contact Form API" />
					{isLoading && <p>Loading...</p>}
					{isSuccess && <p>Thank you for your message</p>}
					<form
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
								value={name.toString()}
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
								value={email.toString()}
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
								value={message.toString()}
							></textarea>
						</div>

						<button
							type="submit"
							className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none aria-disabled:opacity-20 font-bold py-2 px-4 rounded"
							aria-disabled={isLoading}
							disabled={isLoading}
							// look at tailwind css for aria disabled or disabled
						>
							Send message
						</button>
					</form>
				</div>
			</main>
		</>
	);
}
