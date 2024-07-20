import React from "react";
import styles from "../pages/SignUp/SignUp.module.scss";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type FormProps = {
  title: string;
  handleClick: (email: string, password: string) => void;
  action: string;
  link: string;
  desc: string;
  button: string;
};

export const Form: React.FC<FormProps> = ({
  title,
  handleClick,
  action,
  link,
  desc,
  button,
}) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const isAuth = useSelector((state: RootState) => state.user.email);
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {isAuth ? (
        <Navigate to="/profile" />
      ) : (
        <div className={styles.main}>
          <form className={styles.form}>
            <div className={styles.form__wrapper}>
              <h1 className={styles.form__headline}>{title}</h1>
              <div className={styles.form__content}>
                <fieldset className={styles.form__inputs}>
                  <label htmlFor="email">
                    <input
                      minLength={100}
                      onChange={onChangeEmail}
                      type="email"
                      name="email"
                      placeholder="Введите e-mail"
                      required
                    />
                  </label>
                  <label htmlFor="password">
                    <input
                      minLength={100}
                      onChange={onChangePassword}
                      autoComplete="current-password"
                      type="password"
                      name="password"
                      placeholder="Введите пароль"
                      required
                    />
                  </label>
                </fieldset>
                <a
                  tabIndex={0}
                  onClick={() => handleClick(email, password)}
                  className={styles.form__button}
                >
                  {button}
                </a>
                <span className={styles.form__signup}>
                  {desc} <Link to={`/${link}`}>{action}</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
