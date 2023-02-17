import Layout from "@/components/Layout";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const label = { inputProps: { "aria-label": "Home Screen" } };

export default function Home() {
 return (
   <div className={styles.container}>
    <Layout />
    <h1>Welcome to my Game!</h1>
    <h2><Link href="/characters">Look at the characters!</Link></h2>
   </div>
 );
}