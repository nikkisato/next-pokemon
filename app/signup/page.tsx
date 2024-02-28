export default function SignUp() {
	async function signup(formData: FormData) {
		'use server';
		const payload = {
			name: formData.get('name'),
			email: formData.get('email'),
		};

        // create a user with prisma
        // redirect to blog page with the user id
		// server actions
	}
	return (
		<form action={signup}>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
				/>
			</div>

			<button type="submit">Sign Up</button>
		</form>
	);
}
