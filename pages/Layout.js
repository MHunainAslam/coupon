import Head from "next/head";
import Script from "next/script";


const Layout = ({ children, themeData, title = "Elite Blue Technologies", metaTitle = "Elite Blue Technologies", metaKeywords = "", metaDescription = "", logo }) => {

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href={logo.favicon} />
                <link href="/css/fontawesome-all.css" rel="stylesheet" />
                <link href="/css/flaticon.css" rel="stylesheet" />
                <link href="/bootstrap.min.css" rel="stylesheet" />
                <meta name="description" content="Created by Elite Blue Technoligies" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="title" content={`${metaTitle}`} />
                <meta name="keywords" content={`${metaKeywords}`} />
                <meta name="description" content={`${metaDescription}`} />
                <link rel="canonical" href={!(typeof window === 'undefined') && window.location.href} />
                <meta property="og:site_name" content="Elite Blue Technologies" />
                <meta property="og:url" content={!(typeof window === 'undefined') && window.location.href} />
                <meta property="og:title" content={`${metaTitle}`} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={`${metaDescription}`} />
                <link rel="shortcut icon" href={logo.favicon} />
                <link rel="apple-touch-icon" href={logo.favicon} />
                <link rel="image_src" href={logo.favicon} />
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://eliteblue.net/" />
                <meta property="og:image" itemprop="image primaryImageOfPage" content={logo.favicon} />
                <meta property="og:image:type" content="image/png" />
                <meta name="twitter:title" content={`${metaTitle}`} />
                <meta name="twitter:description" content={`${metaDescription}`} />
                <title>{title}</title>
            </Head>


            <main coupon-style={themeData?.Style || 1} store-style={themeData?.Style || 1} >
                {children}
            </main>
            <Script src="/bs.js" />
        </>

    );

}

export default Layout

