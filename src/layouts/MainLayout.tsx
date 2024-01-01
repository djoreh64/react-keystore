import React from 'react';
import Header from '../components/Header.tsx';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
	return (
		<>
			<Header/>
			<main className="main">
				<Outlet/>
			</main>
		</>
	);
};

export default MainLayout;
