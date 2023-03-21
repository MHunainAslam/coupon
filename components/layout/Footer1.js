import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/footerlogo.png'
import Link from 'next/link'

const Footer1 = ({data}) => {
  return (
    <>
  
        <div className='container-fluid bg-secondary'>
          <div className="row">
            <div className="col-md-3 my-auto ">
             <Link href=""> <Image src={data?.url + "/" + data?.logo?.header || logo} fill={true}  className="h-auto w-40 position-relative"></Image></Link>
            </div>
            <div className="col-md-3 text-white text-center  my-auto">
              <p className='my-auto'> All Right Reserved</p>
            </div>
            <div className="col-md-6 footer-link text-center my-auto">
              <Link href="">Contact US</Link>
              <Link href="">About US</Link>
              <Link href="">privacy policy</Link>
              <Link href="">terms & condition</Link>
              <Link href="">stores</Link>
              <Link href="">Categories</Link>
              <Link href=""><i class="fab fa-twitter" aria-hidden="true"></i></Link>
              <Link href=""><i class="fab fa-pinterest" aria-hidden="true"></i></Link>
              <Link href=""><i class="fab fa-facebook" aria-hidden="true"></i></Link>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Footer1