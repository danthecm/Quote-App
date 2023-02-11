import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Logo</p>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/quotes"
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/new-quote"
            >
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
