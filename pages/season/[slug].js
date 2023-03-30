import Spinner from '@/components/Spinner'
import Categorycrad from '@/components/store/coupon'
import { APP_KEY, APP_URL, DEFAULT_DESC, DEFAULT_TITLE } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../Layout'

const Seasonpage = ({ data }) => {

    const [seasondropdown, setseasondropdown] = useState({})
    const [err, setError] = useState(false);
    const [loading, setloading] = useState(true);
    const seasonslug = useRouter()
    let slug = seasonslug?.query?.slug;

    useEffect(() => {
        fetch(`${APP_URL}api/coupon?key=${APP_KEY}&season=${slug}`).then(res => res.json()).then((dta) => {
            if (dta.success) {
                setseasondropdown(dta);
                setError(null);
            } else {
                setError(dta.message)
            }
            setloading(false)
        }).catch(err => {
            setError(true);
            setloading(false)
        })
    }, [slug])

    console.log("aa", seasondropdown);
    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (
        <Layout title={`${seasondropdown?.name || DEFAULT_TITLE}`} metaDescription={`${seasondropdown?.data?.store?.seo_description || DEFAULT_DESC}`} metaKeywords={`${seasondropdown?.data?.store?.meta_key}`} metaTitle={`${seasondropdown?.data?.store?.seo_title}`}>
            <div div className="container my-3" >
                {err ? <p className='text-center my-auto py-5'>{err}</p> :
                    <div className="row ">
                        {/* <div className="col-12"> */}
                        <div className="col-md-10 mx-auto">
                            <h2> {seasondropdown?.name} Coupons & Promo Codes</h2>

                            {/* seasondropdown?.data?.length ?  */}
                            {seasondropdown?.data?.map((item) => {
                                return <div className="px-1 my-0 ">
                                    {/* <Link href={`/store/${item.slug}`} > */}
                                    <Categorycrad coupon={item} styledata={data} img={seasondropdown?.url + "/" + item.store_logo} />
                                    {/* </Link> */}
                                </div>
                            }
                            )
                                // : <>
                                //     <div className='text-center'>
                                //         <p>No Coupons Available in Table</p>
                                //     </div>
                                // </>
                            }
                        </div>
                        {/* </div> */}
                    </div>
                }
            </div >
        </Layout>
    )
}

export default Seasonpage