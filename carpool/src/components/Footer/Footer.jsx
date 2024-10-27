import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <Link href="/"> 
                    <Image src='/images/homeIcon.svg' alt="Home Icon" width={50} height={50} />    
                </Link>
                <Link href="/start"> 
                    <Image src='/images/car.svg' alt="Car Icon" width={50} height={50} />
                </Link>
                <Link href="/rewards">       
                    <Image src='/images/rewards.svg' alt="Rewards Icon" width={50} height={50} />
                </Link>
                <Link href="/profile">
                    <Image src='/images/profile.svg' alt="Profile Icon" width={50} height={50} />   
                </Link>
            </div>
        </footer>
    );
}