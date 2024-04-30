import prisma from './client';

export function createPost(title: string, content: string, authorId: number) {
	return prisma.post.create({
		data: {
			title,
			content,
			authorId,
		},
	});
}

export function getPosts(userId: number) {
	return prisma.post.findMany({
		where: {
			authorId: userId,
		},
	});
}
