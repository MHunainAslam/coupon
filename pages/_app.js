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
  }, [])

  // const data = {
  //   color: {
  //     primary: '#f16d00',
  //     secondary: '#1b96b8',
  //   },
  //   logo: {
  //     // header: logo,
  //     footer: logo,
  //     favicon: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201024%201024%22%20style%3D%22background%3A%236276c4%22%3E%3Cg%3E%3Ctext%20text-anchor%3D%22middle%22%20dy%3D%22.35em%22%20x%3D%22512%22%20y%3D%22512%22%20fill%3D%22%23ffffff%22%20font-size%3D%22700%22%20font-family%3D%22-apple-system%2C%20BlinkMacSystemFont%2C%20Roboto%2C%20Helvetica%2C%20Arial%2C%20sans-serif%22%3EC%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fsvg%3E'
  //   },
  //   Style: 1,
  // }
  if (loading) return (
    <Layout title="Home - " metaTitle="" metaDescription="A" logo=""  >

      <div className='bg-white vh-100 vw-100 d-flex justify-content-center align-items-center'><Spinner /></div>
    </Layout>
  )
  if (err) return <div className='text-center my-auto'>Something went wrong!</div>
  else {

    return <>
      <style jsx global>
        {
          `:root{
              --primary: ${data?.color?.primary || 'green'};
              --secondary: ${data?.color?.secondary || '#1b96b8'};
              --header: ${data?.header?.background || 'blue'} ;
              --header-text: ${data?.header?.color || 'white'} ;
              --header-btn-bg: ${data?.header?.button_color || 'white'} ;
              --header-btn-text: ${data?.header?.button_background || 'black'} ;
              --footer-bg: ${data?.footer?.background || 'blue'} ;
              --footer-text: ${data?.footer?.color || 'white'} ;
              
          }`
        }
      </style>

      <Layout title="Home - " metaTitle="" metaDescription="A" logo="" themeData={data}>
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

