import Categorycrad from '@/components/Categorycard'
import Favoritebrands from '@/components/Favoritebrands'
import Spinner from '@/components/Spinner'
import { APP_KEY, APP_URL } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const category = ({ data }) => {

    const dta = useRouter()
    let slug = dta?.query?.slug;
    const [catcard, setcatcard] = useState({})
    const [err, setError] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {

        setloading(true);
        fetch(`${APP_URL}api/store?key=${APP_KEY}&category=${slug}`).then(res => res.json()).then((dta) => {
            if (dta.success) {
                setcatcard(dta);
                setError(null);
            } else {
                setError(dta.message)
            }
            setloading(false)
        }).catch(err => {
            setError('something went wrong!');
            setloading(false)
        })
    }, [slug])
 
    // const catcard = [
    //     "hello"
    // ]
    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (
        <>
            <div className="min-vh-100">
                {err ? <p className='text-center my-auto py-5'>{err}</p> :
                    <div className="container my-3">
                        <div className="row">
                            <h2> {catcard.name} Coupons & Promo Codes</h2>
                            {catcard?.data?.map((item) => {
                                return <div className="cat-card col-md-4">
                                    <Link href={`/store/${item.slug}`} > <Categorycrad item={item} img={catcard.url} /></Link>
                                </div>
                            })}
                        </div>
                    </div>
                }
                {data === 1 ?   <Favoritebrands /> : <>
                <div className="container bg-white">
                    <p>Automotive Coupon Codes, Discount Codes & Free Shipping Coupons, Don't Pay Extra, Save More With couponive.com Your Discount Partner</p>
                </div>
                </>}
              
                  
              
            </div>
        </>
    )
}

export default category