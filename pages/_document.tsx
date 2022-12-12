import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
	  <meta  name="twitter:site"  content="HugsforBugs"/> 
    <meta property="og:site_name" content="HugsForBugs" />
    <meta property="og:type" content="website" />
	      <link rel='icon' type='image/svg+xml' href='/h4b.svg' />
                   <script src="https://kit.fontawesome.com/e20sdfsd9.js" crossOrigin="anonymous"></script>
                  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Inter:wght@700&family=Montserrat:wght@600&family=Poppins:wght@500&family=Ubuntu+Mono&family=Ubuntu&display=swap" rel="stylesheet"></link>
                  {/* <script src="https://utteranc.es/client.js"
        repo="Hartaj-Singh-Dev/Hugs4Bugs.tech"
        issue-term="pathname"
        label="Comment"
        theme="github-dark"
        crossOrigin="anonymous"
        async>
</script>  */}
                   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}