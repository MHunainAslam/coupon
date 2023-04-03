import Spinner from '@/components/Spinner'
import Categorycrad from '@/components/store/coupon'
import { APP_KEY, APP_URL, DEFAULT_DESC, DEFAULT_TITLE } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../Layout'





export const getStaticPaths = async () => {
    const response = await fetch(`${APP_URL}api/season?key=${APP_KEY}&paginate=10`)
    const data = await response.json();
    const paths = data?.data?.map((item) => {
        return { params: { slug: item?.slug } }
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {

    const { slug } = params;

    console.log(slug);
    const response = await fetch(`${APP_URL}api/coupon?key=${APP_KEY}&season=${slug}`)
    const data = await response.json();
    console.log(data);
    return {
        props: { season: data },
    };
}




const Seasonpage = ({ data, season }) => {

    const [seasondropdown, setseasondropdown] = useState({})
    const [err, setError] = useState(false);
    const [loading, setloading] = useState(true);
    const seasonslug = useRouter()
    let slug = seasonslug?.query?.slug;
 

    useEffect(() => {
        setloading(true);
        console.log("heyyy");
        if (season) {
            setloading(false);
            setError(null);
        }
        if (season.success === false) {
            setError('No Season Found!');
        }
        setseasondropdown(season);
    }, [slug])

    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (
        <Layout title={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaTitle={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaDescription={`${data?.meta ? data?.meta?.description : "More Coupon Codes"}`} logo="" metaKeywords={`${data?.meta ? data?.meta?.keywords : "More Coupon Codes"}`}  >
            <div div className="container my-3" >
                {err ? <p className='text-center my-auto py-5'>{err}</p> :
                    <div className="row ">
                        <div className="col-md-10 mx-auto">
                            <h2> {seasondropdown?.name} Coupons & Promo Codes</h2>

                            {seasondropdown?.data?.map((item) => {
                                return <div className="px-1 my-0 ">
                                    <Categorycrad coupon={item} styledata={data} img={seasondropdown?.url + "/" + item.store_logo} data={data}/>
                                </div>
                            })}
                        </div>
                    </div>
                }
            </div >
        </Layout>
    )
}

export default Seasonpage