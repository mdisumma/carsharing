import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href={"/"}>
                <Image src="/images/Nimbus.png" width={150} height={50} />
            </Link>
            <div className={styles.profile}>
                <p>Points: 9001</p>
                <Link href={"/profile"}>
                    <Image src="/images/profile.svg" width={30} height={30} />
                </Link>
            </div>
        </header>
    );
}

