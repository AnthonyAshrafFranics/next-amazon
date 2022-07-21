import Head from "next/head";
import Link from "next/link";
import React from "react";

export const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazon" : "Amazon"}</title>
        <meta name="description" content="E-commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between shadow-md px-4">
            <Link href="/">
              <a className="text-lg font-bold">amazon</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container max-w-[100%] m-auto mt-4 px-4 ">
          {children}
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Copyright © 2022 Amazon
        </footer>
      </div>
    </>
  );
};
