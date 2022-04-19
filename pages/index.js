import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nihil
          odit ea vitae aliquam inventore odio iure, dolorum, beatae quod unde
          accusantium dignissimos delectus error distinctio. Molestias eligendi
          distinctio voluptatem?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nihil
          odit ea vitae aliquam inventore odio iure, dolorum, beatae quod unde
          accusantium dignissimos delectus error distinctio. Molestias eligendi
          distinctio voluptatem?
        </p>
        <Link href="/todo">
          <a className={styles.btn}>
            See the <strong>Todo</strong>
          </a>
        </Link>
      </div>
    </>
  );
}
