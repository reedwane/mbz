import styles from "./button.module.scss";
import classNames from "classnames";

const Button = ({ text, handleSubmit, styleName }) => {
  return (
    <button
      onClick={handleSubmit}
      className={classNames(styles.button, styleName)}
    >
      {text}
    </button>
  );
};

export default Button;
