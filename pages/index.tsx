import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import Link from 'next/link';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <h1> The News Page</h1>
      <ul>
        <li>
          <a href="/news/next-js-is-good">Next Js is Great! </a>
        </li>
        <li>
          <a href="/news/something"> Something </a>
        </li>
        <li>
          <Link href="/news/next-js-link">Link </Link>
        </li>
      </ul>
    </Fragment>
  );
}
