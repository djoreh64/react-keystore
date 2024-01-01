export const getCartItems = () => {
	const ls = localStorage.getItem('cart');
	return ls ? JSON.parse(ls) : [];
};