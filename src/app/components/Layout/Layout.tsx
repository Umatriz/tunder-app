import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Work</li>
          <li>Project</li>
        </ul>
      </nav>
      <main className={styles.container}>{props.children}</main>
    </div>
  );
};

export default Layout;
