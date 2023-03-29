import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/public/assets/footerlogo.png'
import Link from 'next/link'
import { APP_KEY, APP_URL } from '@/config'
import Spinner from '../Spinner'

const Footer1 = ({ data }) => {

  const [footer, setfooter] = useState({})
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch(`${APP_URL}api/pages?key=${APP_KEY}`).then(res => res.json()).then((dta) => {
      setfooter(dta);
      setloading(false)
    }).catch(err => {
      setloading(false)
    })
  }, [])
  if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>
    
  return (
    <>

      <div className='container-fluid bg-footer  footer-1'>
        <div className="row">
          <div className="col-md-3 my-auto text-center text-md-start">
            <Link href=""> <Image src={data?.url + "/" + data?.logo?.header || logo} fill={true} className="footer1-logo w-40 position-relative"></Image></Link>
          </div>
          <div className="col-md-3 text-white text-center my-auto">
            <p className='my-auto text-footer '> All Right Reserved</p>
          </div>
          <div className="col-md-6 footer-link text-center my-auto">
          
            {footer?.data?.map((item)=>{
              return  <Link href={`/footerpages/${item.slug}`}>{item.name}</Link> 
            })}
            <Link href="/all-stores">stores</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/category">Categories</Link>
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