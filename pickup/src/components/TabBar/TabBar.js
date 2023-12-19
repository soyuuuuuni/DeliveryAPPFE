import React, { useState } from "react";
import styles from "./tabBar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';

const TabBar = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);

  return (
    <nav className="wrapper">
      <Link to="/home" className={styles.navLink} onClick={() => setActiveNav(1)}>
        <div>
          <FontAwesomeIcon icon={faHome}
            className={activeNav === 1 ? styles.activeNavItem : styles.navItem}
          />
        </div>
      </Link>
      <Link to="/profile" className={styles.navLink} onClick={() => setActiveNav(2)}>
        <div>
          <FontAwesomeIcon
            icon={faUser}
            className={activeNav === 2 ? styles.activeNavItem: styles.navItem}
            style={{width : '26px'}}
          />
        </div>
      </Link>
          
    </nav>
  );
};

export default TabBar;