export function generatePagination(
	currentPage: number,
	totalPages: number,
	maxPagesToShow: number = 5
): number[] {
	const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
	let startPage = currentPage - halfMaxPagesToShow;
	let endPage = currentPage + halfMaxPagesToShow;

	// Adjust start and end page if they go beyond the range of totalPages
	if (startPage < 1) {
		endPage += Math.abs(startPage) + 1;
		startPage = 1;
	}

	if (endPage > totalPages) {
		startPage -= endPage - totalPages;
		endPage = totalPages;
	}

	// Ensure startPage is not less than 1
	startPage = Math.max(startPage, 1);

	// Generate an array of page numbers
	const pages = [];
	for (let i = startPage; i <= endPage; i++) {
		pages.push(i);
	}

	return pages;
}
