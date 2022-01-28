import Head from "next/head"

export default function GoogleAnalytics() {
    return (
      <>
        {
          process.env.NODE_ENV === "production" && process.browser ?
          <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-17C110ZV05"></script>
            <script
              async
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", "G-17C110ZV05");`
              }}
            />
          </Head> : null
        }
      </>
    )
}