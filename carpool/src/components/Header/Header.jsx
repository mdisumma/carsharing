import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image src="/images/Nimbus.png" width={150} height={50}/>
        </header>
    );
}

