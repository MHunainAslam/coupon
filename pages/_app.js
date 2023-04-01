import '@/styles/globals.css'
import Header1 from '@/components/layout/Header1'
import Header2 from '@/components/layout/Header2'
import Layout from './Layout'
import logo from '@/public/assets/logo.png'
import Slider from '../components/Slider'
import Popular from '@/components/Popular'
import Footer1 from '@/components/layout/Footer1'
import Footer2 from '@/components/layout/Footer2'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { APP_URL, APP_KEY } from '@/config'
import Spinner from '@/components/Spinner'
import { toast } from 'react-hot-toast'

const Toaster = dynamic(
  () => import("react-hot-toast").then((c) => c.Toaster),
  {
    ssr: false,
  }
);






export default function App({ Component, pageProps }) {
  const [data, setData] = useState([])

  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${APP_URL}api/settings?key=${APP_KEY}`).then(res => res.json()).then((theme) => {
      setData(theme);
      setLoading(false)
    }).catch(error => {
      console.log(error);
      setLoading(false);
      setErr(true)
    })
  }, []);

  console.log(data);

  if (loading) return (
    <Layout title={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaTitle={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaDescription={`${data?.meta ? data?.meta?.description : "More Coupon Codes"}`} logo="" metaKeywords={`${data?.meta ? data?.meta?.keywords : "More Coupon Codes"}`}  >
      <div className='bg-white vh-100 vw-100 d-flex justify-content-center align-items-center'><Spinner /></div>
    </Layout>
  )
  if (err) return <div className='text-center error my-auto vw-100 vh-100 d-flex justify-content-center align-items-center'>Something went wrong!</div>
  else {

    return <>
      <style jsx global>
        {
          `:root{
              --primary: ${data?.color?.primary || 'green'};
              --secondary: ${data?.color?.secondary || '#1b96b8'};
              --header: ${data?.header?.background || 'blue'} ;
              --header-text: ${data?.header?.color || 'white'} ;
              --header-btn-bg: ${data?.header?.button_background || 'white'} ;
              --header-btn-text: ${data?.header?.button_color || 'white'} ;
              --footer-bg: ${data?.footer?.background || 'blue'} ;
              --footer-text: ${data?.footer?.color || 'white'} ;
              
          }`
        }
      </style>

      <Layout title={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaTitle={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaDescription={`${data?.meta ? data?.meta?.description : "More Coupon Codes"}`} logo="" metaKeywords={`${data?.meta ? data?.meta?.keywords : "More Coupon Codes"}`}  >

        {
          data.Style === 1 ?
            <Header1 data={data} /> :
            <Header2 data={data} />
        }
        <div className="min-vh-90">
          <Component {...pageProps} data={data} />
        </div>
        <Toaster
          position="top-right"
        />
        {
          data.Style === 1 ?
            <Footer1 data={data} /> :
            <Footer2 data={data} />
        }
      </Layout>

    </>

  }

}

