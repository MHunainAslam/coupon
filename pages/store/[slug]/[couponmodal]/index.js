import Modal from '@/components/store/modal';
import { APP_KEY, APP_URL } from '@/config';
import Storedetail from '@/pages/Storedetail';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
 ;


export default function postId() {

  const dta = useRouter()
  let slug = dta?.query?.couponmodal;
  // console.log(slug);

  // useEffect(() => {

  //   fetch(`${APP_URL}api/single-store/${dta.query.slug}?key=${APP_KEY}&cou=${slug}`).then(res => res.json()).then((data) => {
  //     console.log(data);
  //   }).catch(err => {
  //     toast.error('Something went wrong!');
  //   })

  // }, [])

  const data = [];
  return (
    <div>
      <Storedetail /> 
    </div>
  )
}
