import '../styles/globals.css'

function MyApp({ Component, pageProps }) { //component: nextjs passes pages elements in here //pageProps: nextjs pases properties of componenets provided by pages here.
  return <Component {...pageProps} />
}

export default MyApp 
