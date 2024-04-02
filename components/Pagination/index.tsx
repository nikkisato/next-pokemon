'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

interface PaginationProps {
	totalPages: number;
	currentPage: number;
}

// create a seperate function to fetch all total pages

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	// const currentPage = Number(searchParams.get('page')) || 1;
	const itemsPerPage = 20;

	const createPageURL = (pageNumber: number) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	//pokeapi.co/api/v2/{endpoint}/?offset=0&limit=20

	const pagesToShow: number[] = [];
	for (let i = 1; i <= totalPages; i++) {
		pagesToShow.push(i);
	}

	return (
		<nav className="pagination">
			<ul className="pagination-list">
				<li>
					<a href="">Previous</a>
				</li>
				{pagesToShow.map((page) => (
					<li
						key={page}
						className="pagination-item"
					>
						<Link
							href={createPageURL(page)}
							className={clsx('pagination-link', {
								'pagination-link--active': page === currentPage,
							})}
						>
							{page}
						</Link>
					</li>
				))}
				<li>
					<a href="">Next</a>
				</li>
			</ul>
		</nav>
	);
}
