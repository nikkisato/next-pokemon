'use client';

import React from 'react';
import Link from 'next/link';
import { generatePagination } from '../../util/generatePagination';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

export default function Pagination({ totalPages }: { totalPages: number }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get('page')) || 1;

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	const pagesToShow = generatePagination(currentPage, totalPages);

	return (
		<nav className="pagination">
			<ul className="pagination-list">
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
			</ul>
		</nav>
	);
}
