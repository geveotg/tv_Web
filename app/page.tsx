'use client'
import { useCallback, useState } from "react";
import Carts from "./home/components/carts";
import styles from "./page.module.css";

export default function Home() {
    const [selectCategory, setselectCategory] = useState("Beef")

    const Select = useCallback((data: string) => {
        setselectCategory(data)
    }, []);
    return (
        <main className={styles.main}>
            <Carts select={Select} />
        </main>
    );
}
