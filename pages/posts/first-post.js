import React from 'react'
import Head from 'next/head';

import Layout from '../../components/Layout';
import Link from 'next/link';

const FirstPost = () => {
  return (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>My First Post</h1>
        <h2>
            <Link href='/'>Back To Home</Link>
        </h2>
    </Layout>
  )
}

export default FirstPost;