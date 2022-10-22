import classNames from "classnames";
import Button from "Components/Button/Button";
import Logo from "Components/Logo/Logo";
import { footerContent } from "Configs/footerConfigs";
import useQueries from "hooks/useQueries";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import styles from "./footer.module.scss";

const Footer = () => {
  const { name, slogan, quickLinks, location, socials } = footerContent;

  const { isMobile } = useQueries();

  let iconSize = 25;

  const handleSubscribe = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.footerWrapper}>
      <div className={classNames(styles.subscribe, { "flex-btw": !isMobile })}>
        <div className={styles.cta}>
          <p className={classNames("bold", styles.ctaHead)}>
            Join our newsletter
          </p>
          <p>We'll send you a soul-uplifting letter once per week. No spam.</p>
        </div>

        <form
          onSubmit={handleSubscribe}
          className={classNames(styles.form, { "flex-btw": !isMobile })}
        >
          <input type="text" placeholder="Enter your email" />
          <Button
            text={"Subscribe"}
            handleSubmit={handleSubscribe}
            styleName={styles.btn}
          />
        </form>
      </div>

      <footer className={styles.footer}>
        <div>
          <div className={classNames(styles.logoName, "flex-start")}>
            <Logo style={styles.logo} />
            <p className={classNames("bold", styles.name)}>{name}</p>
          </div>
          <p>{slogan}</p>
        </div>

        <div className={styles.quickLinks}>
          <p>Quick Links</p>

          <nav>
            <ul>
              {quickLinks.map((link) => (
                <li>
                  <Link href={link.url}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.location}>
          <p>Location</p>
          <p className={styles.loc}>{location}</p>
        </div>

        <div className={styles.socials}>
          <a href={socials.twitter}>
            <FaTwitter size={iconSize} />
          </a>
          <a href={socials.instagram}>
            <FaInstagram size={iconSize} />
          </a>
          <a href={socials.linkedIn}>
            <FaLinkedin size={iconSize} />
          </a>
          <a href={socials.facebook}>
            <FaFacebook size={iconSize} />
          </a>
        </div>

        <p className={classNames("small-text", styles.copy)}>
          &copy; MSSN B-ZONE 2022. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
