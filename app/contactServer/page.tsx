//https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms
import { revalidatePath } from 'next/cache';
// google type

import SubmitButton from '../../components/SubmitButton';
import Navigation from '@/components/Navigation/Navigation';

//Prisma https://www.prisma.io/
// create a prisma Database
// SQLlite file

type Contact = { name: string; email: string; message: string };

const contacts: Contact[] = [];

export default function ContactServer() {
	async function handleServerAction(formData: FormData) {
		'use server';

		try {
			const rawFormData = {
				name: formData.get('name') as string,
				email: formData.get('email') as string,
				message: formData.get('message') as string,
			};
			console.log('rawFormData', rawFormData);

			await new Promise((resolve, reject) => {
				return setTimeout(resolve, 3000);
			});

			//type coercion , not best practice
			contacts.push(rawFormData);
			// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#server-side-validation-and-error-handling
			// revalidation?
			// saving the form to the database
			// update the page after the database
			//mimic database

			revalidatePath('/contactServer');
			//to reset form after submit
		} catch (err) {
			console.error('error', err);
		}
	}

	return (
		<>
			{contacts.map((contact) => {
				return (
					<div key={contact.email}>
						<h2>{contact.name}</h2>
						<p>{contact.email}</p>
						<p>{contact.message}</p>
					</div>
				);
			})}
			<main id="main">
				<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
					<Navigation title="Contact Form Server" />
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
						<SubmitButton />
					</form>
				</div>
			</main>
		</>
	);
}
