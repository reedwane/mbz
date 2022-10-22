import classNames from "classnames";
import Image from "next/image";
import styles from "./Logo.module.scss";

const Logo = ({ style }) => {
  return (
    <div className={classNames(styles.logoContainer, style)}>
      <Image layout="fill" src="/logo.svg" alt="MSSN logo" />
    </div>
  );
};

export default Logo;
