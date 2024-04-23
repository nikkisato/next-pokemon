const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
	const usersWithPosts = await prisma.user.findMany({
		include: {
			posts: true,
		},
	});
	console.dir(usersWithPosts, { depth: null });
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

export default main;
// this will send queries to your database with prisma client

//CHRIS WHY DON"T MESSAGES WORK?

// data: {
// 	name: 'Alice',
// 	email: 'alice@prisma.io',
// message: [
// 	{
// 		title: 'Hello World',
// 		content: 'I am a Message',
// 	},
// ],\
// 	posts: {
// 		create: {
// 			title: 'Hello World',
// 		},
// 	},
// },

// https://www.prisma.io/docs/getting-started/quickstart

// ask chris I'm not really understanding if i want to fill out a form how would this SQL Lite capture that and pass it to the backend if i have to "Create a new user and post" everytime to trigger it

// I chose ORM since it's a node.js and typescript solution
// Theres an option to do Graphl Which i'm interested

// Relational Database ?
