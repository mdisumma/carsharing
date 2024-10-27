import styles from "./BookingForm.module.css"

export default function BookingForm() {
    return (
            <form className={styles.form}>
                <input className={styles.input} type="text" placeholder="Leaving from"></input>
                <input className={styles.input} type="text" placeholder="Going to"></input>
                <input className={styles.input} type="date" placeholder="When?"></input>
                <input className={styles.input} type="time"></input>
                <input className={styles.input} type="number" placeholder="No. of Passengers"></input>
            </form>
    )
}