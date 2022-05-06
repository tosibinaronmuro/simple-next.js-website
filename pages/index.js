import styles from "../styles/Home.module.css";
import Head from "next/head";

import Link from "next/link";
function Home() {
  return (
    <>
      <Head>
        <title>{"Tosiron's list | home"}</title>
        <meta name="keywords" content="Tosiron" />
      </Head>
      <div className="content">
        <h1>Home</h1>
        <p className={styles.text}>
          hello worldddd Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Necessitatibus iste dolorem illo natus repellat, deserunt
          aliquid ab, harum iure optio dolore itaque molestias cumque ad facilis
          nisi delectus dolores odit!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolorum vero perferendis sequi autem, debitis, rem eius, sit accusamus
          ratione ipsa distinctio labore sint eos harum doloribus. Soluta, eaque
          rerum.
        </p>
        <Link href="/Tosiron/Users">
          <a className={styles.btn}>See Users</a>
        </Link>
      </div>
    </>
  );
}
export default Home;
