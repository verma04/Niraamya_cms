import React from 'react'
import Head from 'next/head'
import AllProducts from '@/component/client/AllProduct/AllProduct';
function index() {
    return (
        <div>
            <Head>
        <title>All Products - Niraamya</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <AllProducts/>
        </div>
    )
}

export default index
