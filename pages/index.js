
import Newcoupon from '@/components/Newcoupon'
import Favorite from '@/components/Favoritebrands'
import Couponslider from '@/components/Couponslider'
import Popularcoupon from '@/components/Popularcoupon'
import Popular from '@/components/Popular'
import Slider from '@/components/Slider'
import Layout from './Layout'
import Subscribe from '@/components/Subscribe'
import { APP_NAME } from '@/config'
import { useEffect, useState } from 'react'
import Spinner from '@/components/Spinner'

export default function Home({ data }) {
 
  
  return (
    <>


      <Slider data={data} />
      {data.Style === 1 ? '' :
        <Subscribe data={data} />
      }
      <Popular styledata={data} />
      <Popularcoupon data={data} />


      {data.Style === 1 ? <>
        <Newcoupon styledata={data} />

        <Couponslider styledata={data} /></> : ""

      }
      <Favorite styledata={data} />

    </>
  )
}
