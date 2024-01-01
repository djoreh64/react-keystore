import { Link, Navigate } from 'react-router-dom';
import { removeUser } from '../../redux/slices/userSlice';
import { AppDispatch, RootState } from '../../redux/store';
import styles from '../Profile/Profile.module.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile: React.FC = () => {
	const isAuth = useSelector((state: RootState) => state.user.email);
	const email = useSelector((state: RootState) => state.user.email);
	const dispatch = useDispatch<AppDispatch>();
	const onClickOut = () => {
		dispatch(removeUser());
	};

	return (
		<>
			{!isAuth ? <Navigate to = '/'/> :
				<div className={styles.profile}>
					<h1 className={styles.profile__headline}>Профиль</h1>
					<div className={styles.profile__info}>
          Ваш e-mail: {email}
					</div>
					<Link className={styles.profile__button} to = '/' onClick={onClickOut}>Выйти</Link>
				</div>}
		</>
	);
};

export default Profile;