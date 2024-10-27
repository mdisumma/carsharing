import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.image}></div>
      <Link href={"/start"}>
          <button className={styles.button}>Add Trip</button>
      </Link>
    </div>
  );
}
