import React from 'react'
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from '../../components/Form.tsx';
import { setUser } from '../../redux/slices/userSlice.ts';

const SignUp = () => {
    const dispatch = useDispatch()
    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        console.log(auth)
        signInWithEmailAndPassword(auth, email, password)
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
            title="Вход"
            desc='Еще нет аккаунта?'
            button='Войти'
            action='Зарегистрироваться'
            link='signup'
            handleClick={handleRegister}
        />
    )
}

export default SignUp