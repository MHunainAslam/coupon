import Modal from '@/components/store/modal';
import Storedetail from '@/pages/Storedetail';
import { useRouter } from 'next/router';
import React from 'react'


export default function postId() {

  const dta = useRouter()
  let slug = dta?.query?.couponmodal;
  return (
    <div>
      <Storedetail />
      <Modal />
    </div>
  )
}
