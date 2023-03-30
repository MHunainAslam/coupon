import { APP_KEY, APP_URL, DEFAULT_TITLE, DEFAULT_DESC } from "@/config";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";


const Layout = ({ children, title = { DEFAULT_TITLE }, metaTitle = { DEFAULT_TITLE }, metaKeywords = "", metaDescription = { DEFAULT_DESC } }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${APP_URL}api/settings?key=${APP_KEY}`).then(res => res.json()).then((theme) => {
            setData(theme);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href={data?.url + "/" + data?.logo?.header || ''} />
                <link href="/css/fontawesome-all.css" rel="stylesheet" />
                <link href="/css/flaticon.css" rel="stylesheet" />
                <link href="/bootstrap.min.css" rel="stylesheet" />
                <meta name="description" content="Created by Elite Blue Technoligies" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="title" content={`${metaTitle}`} />
                <meta name="keywords" content={`${metaKeywords}`} />
                <meta name="description" content={`${metaDescription}`} />
                <link rel="canonical" href={!(typeof window === 'undefined') && window.location.href} />
                <meta property="og:site_name" conten={`${DEFAULT_TITLE}`} />
                <meta property="og:url" content={!(typeof window === 'undefined') && window.location.href} />
                <meta property="og:title" content={`${metaTitle}`} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={`${metaDescription}`} />
                <link rel="shortcut icon" href={data?.url + "/" + data?.logo?.header || ''} />
                <link rel="apple-touch-icon" href={data?.url + "/" + data?.logo?.header || ''} />
                <link rel="image_src" href={data?.url + "/" + data?.logo?.header || ''} />
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://eliteblue.net/" />
                <meta property="og:image" itemprop="image primaryImageOfPage" content={data?.url + "/" + data?.logo?.header || ''} />
                <meta property="og:image:type" content="image/png" />
                <meta name="twitter:title" content={`${metaTitle}`} />
                <meta name="twitter:description" content={`${metaDescription}`} />
                <title>{title}</title>
            </Head>


            <main coupon-style={data?.Style || 1} store-style={data?.Style || 1} >
                {children}
            </main>
            <Script src="/bs.js" />
        </>

    );

}

export default Layout