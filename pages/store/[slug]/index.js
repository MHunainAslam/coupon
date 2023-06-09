import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/store/modal';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Sidepanel from '@/components/store/sidepanel'
import Detail from '@/components/store/detail'
import { APP_KEY, APP_URL, DEFAULT_DESC, DEFAULT_TITLE } from '@/config'
import Spinner from '@/components/Spinner'
import Layout from '../../Layout';
import Favoritebrands from '@/components/Favoritebrands';


// export const getStaticPaths = async () => {
//     const response = await fetch(`${APP_URL}api/store?key=${APP_KEY}&graph=popular`)
//     const data = await response.json();
//     const paths = data?.data?.map((item) => {
//         return { params: { slug: item?.slug } }
//     })

//     return {
//         paths,
//         fallback: true
//     }
// }

export async function getServerSideProps({ params }) {

    const { slug, id } = params;

    console.log(params);
    const response = await fetch(`${APP_URL}api/single-store/${slug}?key=${APP_KEY}&cou=${id}`)
    const data = await response.json();

    return {
        props: { store: data },
    };
}





const Storedetail = ({ store, data }) => {

    const dta = useRouter()
    let slug = dta?.query?.slug;

    console.log(dta);
    const [singlestore, setsinglestore] = useState({});
    const [err, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);
        if (store) {
            setLoading(false);
            setError(null)
        }
        if (store.success === false) {
            setError('No Store Found!')
        }
        setsinglestore(store);
    }, [slug]);

    console.log(singlestore);

    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (

        <Layout title={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaTitle={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaDescription={`${data?.meta ? data?.meta?.description : "More Coupon Codes"}`} logo="" metaKeywords={`${data?.meta ? data?.meta?.keywords : "More Coupon Codes"}`}  >

            <div className="container">
                <div className='row'>
                    <div className="col-md-3 col-12  my-md-5 my-2 h-100">
                        <Sidepanel sidepanelapi={singlestore} img={singlestore.url} data={data}/>
                    </div>
                    <div className="col-md-9 col-12 my-md-5 my-2 px-2">
                        <Detail storedetailapi={singlestore} img={singlestore.url} data={data}/>
                    </div>
                </div>
            </div>
            {dta.query.id &&

                <Modal popup={singlestore?.data?.popup_coupon} store={singlestore?.data?.store?.name} data={data} />}

            <Favoritebrands styledata={data} />

        </Layout>
    )
}

export default Storedetail

