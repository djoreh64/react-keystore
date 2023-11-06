import React from 'react'
import styles from '../pages/SignUp/SignUp.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Form = ({title, handleClick, action, link, desc, button }) => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
  return (
    <div className={styles.main}>
            <form className={styles.form}>
                <div className={styles.form__wrapper}>
                    <h1 className={styles.form__headline}>{title}</h1>
                    <div className={styles.form__content}>
                    <fieldset className={styles.form__inputs}>
                        <label htmlFor='email'> 
                            <input minLength={10} onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='Введите e-mail' required/>
                        </label>
                        <label htmlFor='password'>
                            <input minLength={10} onChange={(e) => setPassword(e.target.value)} autoComplete='current-password' type="password" name='password' placeholder='Введите пароль' required/>
                        </label>
                    </fieldset>
                    <button onClick={() => handleClick(email, password)} className={styles.form__button}>{button}</button>
                    <span className={styles.form__signup}>{desc} <Link to = {`/${link}`}>{action}</Link></span>
                    </div>
                </div>
            </form>
        </div>
  )
}
