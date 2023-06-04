import Head from 'next/head';
import Link from 'next/link';
import Layout from './layout';
import App from '../src/App';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
        <p></p>
        <Link href="/practice1">← Practice1</Link>
      </h2>
      <App/>
    </>
  );
}