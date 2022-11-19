import { FC } from "react";
import styles from "./Layout.module.css";

import { IoStatsChartOutline, IoHomeOutline } from "react-icons/io5"

interface Props {};

const Layout: FC = (props) => {
  return (
    <div className={styles.container}>
      {/* <nav className={styles.nav}> */}
        <div className={styles.nav}>
          <div className={styles.nav_item}><a href="" className={styles.nav_link}><IoHomeOutline /></a></div>
          <div className={styles.nav_item}><a href="" className={styles.nav_link}><IoStatsChartOutline /></a></div>
        </div>
      {/* </nav> */}
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
