import Categorycrad from '@/components/Categorycard'
import Favoritebrands from '@/components/Favoritebrands'
import Spinner from '@/components/Spinner'
import { APP_KEY, APP_URL, DEFAULT_DESC, DEFAULT_TITLE } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../Layout'


export const getStaticPaths = async () => {
    const response = await fetch(`${APP_URL}api/category?key=${APP_KEY}&paginate=12`)
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
    const response = await fetch(`${APP_URL}api/store?key=${APP_KEY}&category=${slug}`)
    const data = await response.json();

    return {
        props: { categ: data },
    };
}



const category = ({ data, categ }) => {

    const dta = useRouter()
    let slug = dta?.query?.slug;

    console.log(categ);

    const [catcard, setcatcard] = useState({});
    const [err, setError] = useState(null);
    const [loading, setloading] = useState(true);

    console.log(categ);
    useEffect(() => {
        setloading(true);
        if (categ) {
            setloading(false);
            setError(null)
        }
        if (categ.success === false) {
            setError('No Category Found!')
        }
        setcatcard(categ);
    }, [slug])

    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (
        <Layout title={`${catcard?.name || DEFAULT_TITLE}`} metaDescription={`${catcard?.data?.store?.seo_description || DEFAULT_DESC}`} metaKeywords={`${catcard?.data?.store?.meta_key}`} metaTitle={`${catcard?.data?.store?.seo_title}`}>
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
                {err === null ?
                    data === 1 ? <Favoritebrands /> : <>
                        <div className="container bg-white p-2 mb-2">   
                            {/* <p className='mb-0'>Automotive Coupon Codes, Discount Codes & Free Shipping Coupons, Don't Pay Extra, Save More With couponive.com Your Discount Partner</p> */}
                            <p className='mb-0' dangerouslySetInnerHTML={{ __html: catcard.description }}></p>
                        </div>
                    </>
                    : ''
                } 
            </div>
        </Layout>
    )
}

export default category


// export async function getStaticProps({ params }) {

//     const slug = params.slug;

//     // const response = await fetch(`${APP_URL}api/store?key=${APP_KEY}&category=${slug}`)
//     const response = await fetch(`${APP_URL}api/category?key=${APP_KEY}&paginate=12`)

//     const data = await response.json();

//     const paths: response?.data?.map((item) => {
//         return item?.slug
//     })

//     return {
//         props: { categ: data },
//     };
// }