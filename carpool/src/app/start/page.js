import Image from "next/image";
import BookingForm from "@/components/BookingForm/BookingForm";
import styles from "./page.module.css"


export default function Start() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Add a Trip</h1>
        <BookingForm />
        <div className={styles.green}></div>
    </div>
  );
}
