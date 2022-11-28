import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles["container"]}>
      <p>Sample Header</p>
      <menu>
        <Link href="/">Top</Link>｜<Link href="/second">Second</Link>
      </menu>
    </header>
  );
}
