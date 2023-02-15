import Layout from "@/components/Layout";
import styles from "../styles/Home.module.css";

const label = { inputProps: { "aria-label": "Home Screen" } };

export default function Home() {
 return (
   <div className={styles.container}>
    <Layout />
    <h1>Hello</h1>
   </div>
 );
}