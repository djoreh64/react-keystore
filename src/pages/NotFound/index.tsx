import React from "react";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>Страница не найдена!</h1>
    </div>
  );
};

export default NotFound;
