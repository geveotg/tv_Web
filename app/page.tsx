"use client";

import Carts from "./home/components/carts";
import styles from "./page.module.css";
import Slide from "./home/components/slide";

export default function Home() {
    return (
        <main className={styles.main}>
            <Slide />
            <Carts />
        </main>
    );
}
