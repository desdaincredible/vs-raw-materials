import Head from 'next/head'
import { config, dom } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import 'react-datepicker/dist/react-datepicker.css'

import Navbar from '../components/navbar'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <style>{dom.css()}</style>
        <link rel="icon" href="cloud-solid.svg" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Work+Sans:wght@300;400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Work+Sans:wght@300;400&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Work+Sans:wght@300;400&display=swap"
          />
        </noscript>

        <meta
          name="The Vapor Shop Raw Materials"
          content="The Vapor Shop Raw Materials"
        />
        <title>The Vapor Shop Raw Materials</title>
      </Head>
      <Navbar />

      <main className="w-75 mx-auto mt-2">{children}</main>
    </>
  )
}
