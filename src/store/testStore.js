import create from 'zustand';

const useTestStore = create((set) => ({
	dataSet: {
		xAxis: null,
		yAxis: null,
	},
	isLoading: true,


	setLoading: (loading) => set({isLoading: loading}),
}));

export default useTestStore;