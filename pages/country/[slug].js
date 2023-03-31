import Categorycrad from '@/components/Categorycard'
import Spinner from '@/components/Spinner'
import { APP_KEY, APP_URL } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const country = ({data}) => {

    const dta = useRouter()
    let slug = dta?.query?.slug;
    const [countrycard, setcountrycard] = useState({})
    const [err, setError] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {

        setloading(true);
        fetch(`${APP_URL}api/store?key=${APP_KEY}&country=${slug}`).then(res => res.json()).then((dta) => {
            if (dta.success) {
                setcountrycard(dta);
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
    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (

        <Layout title={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaTitle={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaDescription={`${data?.meta ? data?.meta?.description : "More Coupon Codes"}`} logo="" metaKeywords={`${data?.meta ? data?.meta?.keywords : "More Coupon Codes"}`}  >
            <div className="container my-3">
                {err ? <p className='text-center my-auto py-5'>{err}</p> :
                    <div className="row">
                        <h2> {countrycard.name} Coupons & Promo Codes </h2>
                        {countrycard?.data?.map((item) => {
                            return <div className="cat-card col-md-4">
                                <Link href={`/store/${item.slug}`} > <Categorycrad item={item} img={countrycard.url} /></Link>
                            </div>
                        })}
                    </div>
                }
            </div>
        </Layout>
    )
}

export default country