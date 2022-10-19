import { useEffect, useState, useRef } from 'react'
import { hotjar } from 'react-hotjar'
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/custom.css'
import '../styles/responsive.css'
import Head from 'next/head'
import { GlobalSettingsContext } from "../context/GlobalSettingsContext"
import Script from 'next/script'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {

  let [mobile, setMobile] = useState(false)
  let [showPopup, setShowPopup] = useState({ show: false })
  let [showSignInPopup, setShowSignInPopup] = useState(false)
  let [width, setWidth] = useState(false)
  let [loading, setLoading] = useState(false)
  let [sitemapConfig, setSitemapConfig] = useState({ visibility: true, theme: "light", active: -1 })

  const theValueRef = useRef()
  const howItHelpsRef = useRef()
  const integrationsRef = useRef()
  const tryProducterRef = useRef()
  const resourcesRef = useRef()

  useEffect(() => {
    let getSize = () => {
      let size = { width: window.innerWidth, height: window.innerHeight }
      setMobile(size.width < 1025 ? true : false)
      setWidth(size.width)
    }
    getSize()
    hotjar.initialize(3041279, 6)

  }, [])

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TD7B8JZ');`}}>
        </script>

        <script dangerouslySetInnerHTML={{
          __html: `window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
    heap.load("519053531");`}}></script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TD7B8JZ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>The product management tool designed to become customer-driven</title>
        <meta name="title" content="Product Management Software | Producter" />
        <meta name="description" content="Producter is an all-in-one product management tool to collect feedback, manage tasks, track roadmap, share product updates, and create docs." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/producter-web.appspot.com/o/metadataimage.png?alt=media&token=25af50f5-02ef-4b51-8233-041a1cd6806c" />
        <meta property="og:image:url" content="https://firebasestorage.googleapis.com/v0/b/producter-web.appspot.com/o/metadataimage.png?alt=media&token=25af50f5-02ef-4b51-8233-041a1cd6806c" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Product Management Software | Producter" />
        <meta property="og:description" content="Producter is an all-in-one product management tool to collect feedback, manage tasks, track roadmap, share product updates, and create docs." />
        <meta property="twitter:title" content="Product Management Software | Producter" />
        <meta property="twitter:description" content="Producter is an all-in-one product management tool to collect feedback, manage tasks, track roadmap, share product updates, and create docs." />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />


        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" strategy="beforeInteractive"></Script>

      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" strategy="lazyOnload"></Script>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" strategy="lazyOnload"></Script>
      <GlobalSettingsContext.Provider value={{ loading, setLoading, mobile, width, setShowPopup, showPopup, setSitemapConfig, sitemapConfig, showSignInPopup, setShowSignInPopup, theValueRef, howItHelpsRef, integrationsRef, tryProducterRef, resourcesRef }}>
        <Component {...pageProps} />
      </GlobalSettingsContext.Provider>
    </>
  )
}

export default MyApp
