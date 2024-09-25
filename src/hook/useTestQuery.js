// src/hooks/useUsersQuery.js
import { useQuery } from '@tanstack/react-query';

const fetchTests = async () => {
	const response = await fetch('https://api.example.com/users');
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};

const useUsersQuery = () => {
	return useQuery(['tests'], fetchTests);
};

export default useUsersQuery;
