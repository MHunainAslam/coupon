import Newcoupon from '@/components/Newcoupon'
import Image from 'next/image'
import Link from 'next/link'
import StoreItem from '../components/StoreItem'
import Pagination from '../components/layout/Pagnation'
import React, { useEffect, useState } from 'react'
import { APP_URL, APP_KEY } from '@/config'
import Spinner from '@/components/Spinner'

const all_stores = ({ data }) => {


    const [allstore, setallstore] = useState({})
    const [err, setError] = useState(false);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetch(`${APP_URL}api/store?key=${APP_KEY}&type=featured`).then(res => res.json()).then((storedata) => {
            setallstore(storedata)
            setloading(false);
        }).catch(err => {
            setloading(false);
            setError(true);
        });
    }, []);



    const words = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>
    console.log(data);
    return (
        <>
            <div className="min-vh-100">
                {err ? "Something Went Wrong" :
                    <div className="container">
                        <div className="">
                            <h3 className='ps-0 my-3'>Browse Your Coupon By Store</h3>
                            <div className='ps-0'>
                                <Pagination words={words} />
                            </div>
                        </div>
                        <div className="row my-5">
                            {/* {allstore?.data.data.map((item) => {

                                <StoreItem item={dta} data={styledata} img={allstore?.url} />
                            })} */}
                            {words.map(itm => <>

                                <div class="col-12 page-link" id={`${itm}`}>
                                    <div className='browse-coupon'> {allstore?.data?.filter(item => item?.name?.charAt(0).toLowerCase() === itm.toLowerCase())?.length ? itm : ''}</div>
                                </div>
                                {allstore?.data?.filter(item => item?.name?.charAt(0).toLowerCase() === itm.toLowerCase())?.flat()?.map(dta => <StoreItem cols={true} head={true} item={dta} styledata={data} img={allstore?.url} />)}
                            </>
                            )}
                        </div>

                    </div>
                }
            </div>
        </>
    )
}

export default all_stores
