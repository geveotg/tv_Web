import Image from "next/image";
import styles from "./page.module.css";
import Slide from "./Home/components/slide";

export default function Home() {
    return <main className={styles.main}>
        <Slide />
    </main>;
}
