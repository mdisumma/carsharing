import styles from "./BookingForm.module.css";

export default function BookingForm() {
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Leaving from" />
            <input className={styles.input} type="text" placeholder="Going to" />
            <input className={styles.input} type="date" placeholder="When?" />
            <input className={styles.input} type="time" />
            <input className={styles.input} type="number" placeholder="No. of Passengers" />
            <button className={styles.button}>Post Commute</button>
        </form>
    );
}