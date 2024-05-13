import Films from "./Home/components/films";
import styles from "./page.module.css";
import Slide from "./Home/components/slide";

export default function Home() {
    return (
        <main className={styles.main}>
            <Slide />
            <Films />
        </main>
    );
}
