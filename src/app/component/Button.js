// src/components/Button.js
import styles from '../styles/Button.module.css';

const Button = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
