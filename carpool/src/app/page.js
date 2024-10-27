import Image from "next/image";
import styles from "./page.module.css";
import BookingForm from "../components/BookingForm/BookingForm"

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Add a Trip</h1>
        <BookingForm />
        <div className={styles.green}></div>
    </div>
  );
}
