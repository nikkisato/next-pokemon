'use client';
import { useState, useEffect } from 'react';

export default function ServerSuccess({}) {
	const [isSuccess, setIsSuccess] = useState(false);

	return <>{isSuccess && <div>Thank you for your message</div>}</>;
}
