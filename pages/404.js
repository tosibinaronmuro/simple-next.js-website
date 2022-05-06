import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    <>
      <Head>
        <title>{"Tosiron's list | 404"}</title>
        <meta name="keywords" content="Tosiron" />
      </Head>
      <div className="not-found">
        <h1>Ooooops...</h1>
        <h2>That page cannot be found</h2>
        <p>
          go back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
