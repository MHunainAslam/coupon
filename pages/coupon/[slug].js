import Spinner from '@/components/Spinner'
import Categorycrad from '@/components/store/coupon'
import { APP_KEY, APP_URL, DEFAULT_DESC, DEFAULT_TITLE } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import ReactPaginate from 'react-paginate';
import Layout from '../Layout'


export const getStaticPaths = async () => {
    const response = await fetch(`${APP_URL}api/coupon_type?key=${APP_KEY}`)
    const data = await response.json();

    const paths = data?.map((item) => {
        return { params: { slug: item?.slug } }
    })

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {

    const { slug } = params;
    const response = await fetch(`${APP_URL}api/coupon?key=${APP_KEY}&type=${slug}`)
    const data = await response.json();

    return {
        props: { coupon: data },
    };
}



function PaginatedItems({ itemsPerPage, items, coupondropdown }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    console.log(currentItems);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <div>
                {currentItems &&
                    currentItems.map((item) => {
                        return <div className="px-1 my-0 col-12">
                            <Categorycrad coupon={item} is_ico={false} img={coupondropdown?.url + "/" + item?.store_logo} />
                        </div>
                    })}
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel="»"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="«"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

const coupon = ({ coupon, data }) => {

    const [coupondropdown, setcoupondropdown] = useState([])

    const dta = useRouter()
    let slug = dta?.query?.slug;

    const [err, setError] = useState(false);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setloading(true);
        if (coupon) {
            setloading(false);
            setError(null)
        }
        if (coupon.success === false) {
            setError('No Coupon Found!')
        }


        setcoupondropdown(coupon);

    }, [slug])

    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>

    return (
        <Layout title={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaTitle={`${data?.meta ? data?.meta?.title : "Home - More Coupon Codes"}`} metaDescription={`${data?.meta ? data?.meta?.description : "More Coupon Codes"}`} logo="" metaKeywords={`${data?.meta ? data?.meta?.keywords : "More Coupon Codes"}`}  >
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="col-md-10 p-0">
                        <h2 className='ms-3'> {coupondropdown.name} Coupons & Promo Codes</h2>
                        <div className="my-4">
                            {err ? <p className='text-center my-auto py-5'>{err}</p> :
                                <PaginatedItems itemsPerPage={10} items={coupondropdown?.data} coupondropdown={coupondropdown} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default coupon