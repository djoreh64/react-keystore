import React from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from '../../components/Form';
import { setUser } from '../../redux/slices/userSlice';
import { AppDispatch } from '../../redux/store';

const SignIn: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const handleSignIn = (email: string, password: string) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.refreshToken,
				}));
			})
			.catch(err => {
				alert('Неверное имя пользователя или пароль!');
			});
	};

	return (
		<Form
			title="Вход"
			desc='Еще нет аккаунта?'
			button='Войти'
			action='Зарегистрироваться'
			link='signup'
			handleClick={handleSignIn}
		/>
	);
};

export default SignIn;