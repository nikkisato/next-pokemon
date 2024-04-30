import prisma from './client';

export function createUser(name: string, email: string) {
	return prisma.user.create({
		data: {
			name,
			email,
		},
	});
}

export function getUserAndPosts(id: number) {
	return prisma.user.findUnique({
		where: {
			id: id,
		},
		include: {
			posts: true,
		},
	});
}
