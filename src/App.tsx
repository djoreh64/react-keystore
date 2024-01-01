import React, {Suspense} from 'react';
import Loadable from 'react-loadable';
import Home from './pages/Home';
import { Route, Routes }  from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Loader from './components/Loader';
import Game from './pages/Game/index';

const Cart = Loadable({
	loader: () => import('./pages/Cart/index'),
	loading: () => <Loader/>,
});
const Favourites = Loadable({
	loader: () => import('./pages/Favourites/index'),
	loading: () => <Loader/>,
});
const SignIn = Loadable({
	loader: () => import('./pages/SignIn/index'),
	loading: () => <Loader/>,
});
const SignUp = Loadable({
	loader: () => import('./pages/SignUp/index'),
	loading: () => <Loader/>,
});
const Profile = Loadable({
	loader: () => import('./pages/Profile/index'),
	loading: () => <Loader/>,
});
const NotFound = Loadable({
	loader: () => import('./pages/NotFound/index'),
	loading: () => <Loader/>,
});

const App: React.FC = () => {
	return (
		<Routes>
			<Route path = '/' element = {<MainLayout/>}>
				<Route path='' element= {<Home/>}/>
				<Route path='/cart' element= {<Suspense fallback = {<Loader/>}>
					<Cart/>
				</Suspense>}/>
				<Route path='/signin' element= {<Suspense fallback = {<Loader/>}>
					<SignIn/>
				</Suspense>}/>
				<Route path='/signup' element= {<Suspense fallback = {<Loader/>}>
					<SignUp/>
				</Suspense>}/>
				<Route path='/profile' element= {<Suspense fallback = {<Loader/>}>
					<Profile/>
				</Suspense>}/>
				<Route path='/games/:urlID' element= {<Suspense fallback = {<Loader/>}>
					<Game/>
				</Suspense>}/>
				<Route path='/favourites' element= {<Suspense fallback = {<Loader/>}>
					<Favourites/>
				</Suspense>}/>
				<Route path='*' element= {<Suspense fallback = {<Loader/>}>
					<NotFound/>
				</Suspense>}/>
			</Route>
		</Routes>
	);
};

export default App;
