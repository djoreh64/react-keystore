import React from 'react'
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from '../../components/Form.tsx';
import { setUser } from '../../redux/slices/userSlice.ts';
import { AppDispatch } from '../../redux/store.ts';

const SignUp = () => {
    const dispatch = useDispatch<AppDispatch>()
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Form
            title="Регистрация"
            desc='Уже есть аккаунт?'
            button='Зарегистрироваться'
            action='Войти'
            link='signin'
            handleClick={handleRegister}
        />
    )
}

export default SignUp