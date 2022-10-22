import Logo from "Components/Logo/Logo";
import { navContent } from "Configs/navbarConfigs";
import Link from "next/link";
import classnames from "classnames";
import { useEffect, useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdMenu, MdClose } from "react-icons/md";
import { useMediaQuery, useOnClickOutside } from "usehooks-ts";
import styles from "./header.module.scss";
import useQueries from "hooks/useQueries";

const Header = () => {
  const { navTitle, mobileTitle, navTabs } = navContent;
  const navRef = useRef();

  const [activeTab, setActiveTab] = useState();
  const [openMenu, setOpenMenu] = useState(false);

  const { isTablet, isMobile } = useQueries();

  useEffect(() => {
    !isTablet ? setOpenMenu(true) : setOpenMenu(false);
  }, [isTablet]);

  const handleActiveTab = (i) => {
    activeTab === i ? setActiveTab() : setActiveTab(i);
  };

  const handleClickOutside = () => {
    setActiveTab();
    isTablet && openMenu && setOpenMenu(false);
  };

  useOnClickOutside(navRef, handleClickOutside);

  return (
    <header className={styles.header}>
      <div className="content flex-btw">
        <div className={classnames(styles.logo, "flex-start")}>
          <Logo style={styles.headerLogo} />
          <p className="normal-text bold">
            {isMobile ? mobileTitle : navTitle}
          </p>
        </div>

        {isTablet && !openMenu ? (
          <MdMenu
            onClick={() => setOpenMenu(true)}
            className={styles.ham}
            size={isMobile ? 30 : 40}
          />
        ) : (
          isTablet && (
            <MdClose
              onClick={() => setOpenMenu(false)}
              className={styles.ham}
              size={isMobile ? 30 : 40}
            />
          )
        )}

        <nav
          className={classnames("flex-end", {
            [styles.navList]: openMenu,
            hide: isTablet && !openMenu,
          })}
        >
          <ul ref={navRef}>
            {navTabs.map((ctg, i) => (
              <div key={i} className={classnames({ [styles.ctg]: openMenu })}>
                <div
                  onClick={() => handleActiveTab(i)}
                  className={classnames(styles.title, "flex-btw bold")}
                >
                  <p>{ctg.title}</p>

                  {ctg?.tabs && i === activeTab ? (
                    <IoIosArrowUp />
                  ) : ctg?.tabs ? (
                    <IoIosArrowDown />
                  ) : (
                    ""
                  )}
                </div>

                {ctg?.tabs && (
                  <ul
                    className={classnames(styles.tabList, {
                      hide: activeTab !== i,
                    })}
                  >
                    {ctg.tabs?.map((item, i) => (
                      <li
                        key={i}
                        onClick={() =>
                          isTablet ? setOpenMenu(false) : setActiveTab()
                        }
                      >
                        <Link href={item.path}>
                          <a>{item.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
