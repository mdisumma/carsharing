import Image from "next/image";
import styles from "./page.module.css"


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.points}>
      <p className={styles.league}>Points</p>
        <div className={styles.pointsimg}></div>
      </div>
      <div className={styles.leader}>
        <div className={styles.icon}></div>
        <p className={styles.league}>Gold<br></br>
           League
        </p>
      </div>
      <div className={styles.badges}></div>
    </div>
  );
}
