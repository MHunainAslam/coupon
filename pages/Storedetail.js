import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/store/modal';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Sidepanel from '@/components/store/sidepanel'
import Detail from '@/components/store/detail'
import { APP_KEY, APP_URL, DEFAULT_DESC } from '@/config'
import Spinner from '@/components/Spinner'
import Layout from './Layout';

const Storedetail = () => {

    const dta = useRouter()
    let slug = dta?.query?.slug;
    const [singlestore, setsinglestore] = useState({});
    const [err, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(`${APP_URL}api/single-store/${slug}?key=${APP_KEY}&cou=${dta.query.couponmodal}`).then(res => res.json()).then((dta) => {
            setsinglestore(dta);
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            setError(true);
        });
    }, [slug]);

    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (

        <Layout title={`${singlestore?.data?.store?.name || DEFAULT_TITLE}`} metaDescription={`${singlestore?.data?.store?.seo_description || DEFAULT_DESC}`} metaKeywords={`${singlestore?.data?.store?.meta_key}`} metaTitle={`${singlestore?.data?.store?.seo_title}`}>

            <div className="container">
                <div className='row'>
                    <div className="col-md-3 col-12  my-5 h-100">
                        <Sidepanel sidepanelapi={singlestore} img={singlestore.url} />
                    </div>
                    <div className="col-md-9 col-12 my-5 px-2">
                        <Detail storedetailapi={singlestore} img={singlestore.url} />
                    </div>
                </div>
            </div>
            {dta.query.couponmodal &&
                <Modal popup={singlestore?.data?.popup_coupon} store={singlestore?.data?.store?.name} />}
        </Layout>
    )
}

export default Storedetail

