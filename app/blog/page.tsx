import { createPost, getPosts } from '@/lib/prisma/post';
import { getUserAndPosts } from '@/lib/prisma/user';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

//Create a User
// create a file that creates a user with prisma
export default async function Blog({ searchParams }: any) {
	const userId = 1;
	async function createUserPost(formData: FormData) {
		'use server';
		// form Action
		// create a post for a user
		// createPost()
		// revalidate the page

		const title = formData.get('title') as string;
		const content = formData.get('content') as string;

		await createPost(title, content, userId);

		revalidatePath('/blog');
	}
	// get the user id from the url
	// await get the user and posts
	const user = await getUserAndPosts(userId);
	// if no user, redirect to the sign up page
	if (!user) {
		return redirect('/signup');
	}
	// if user, display the user's posts
	return (
		<div>
			<h1>Blog</h1>
			<form action={createUserPost}>
				<div>
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
					/>
				</div>
				<div>
					<label htmlFor="content">Content</label>
					<input
						type="text"
						name="content"
					/>
				</div>
			</form>

			<div>
				{user.posts.map((post) => (
					<div key={post.id}>
						<h2>{post.title}</h2>
						<p>{post.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}

// Sign up Form
// create a form tha
// redirects a user to the blog page
// grab the userID and blog
