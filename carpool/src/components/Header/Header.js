import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <footer>
        <div className={styles.header}>
            <Link href="/profile">
            <Image src='/images/profile.svg' alt="Profile" width={50} height={50}/>   
            </Link>
        </div>
        </footer>
    );
}

