import Newcoupon from '@/components/Newcoupon'
import Image from 'next/image'
import Link from 'next/link'
import StoreItem from '../components/StoreItem'
import Pagination from '../components/layout/Pagnation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { APP_URL, APP_KEY } from '@/config'
import Spinner from '@/components/Spinner'

const all_stores = ({ styledata }) => {


    const [allstore, setallstore] = useState({})
    const [err, setError] = useState(false);
    const [loading, setloading] = useState(true)

    useEffect(() => {
        fetch(`${APP_URL}api/store?key=${APP_KEY}&type=featured`).then(res => res.json()).then((storedata) => {
            setallstore(storedata)
            // toast.success('Slider fetch successfully!');
            setloading(false);
        }).catch(err => {
            toast.error('Something went wrong!');
            setloading(false);
            setError(true);
        })
    }, [])


    const images = [
        { id: 0, url: 'https://morecouponcode.com/adminpanel/assets/images/store/Audiobooksnow%20coupon%20code.png', slug: "hello-world", title: 'z', type: 'all-store' },
        { id: 1, url: 'https://morecouponcode.com/adminpanel/assets/images/store/bby.PNG', slug: "hello-world2", title: 'two', type: 'all-store' },
        { id: 2, url: 'https://morecouponcode.com/adminpanel/assets/images/store/bannar.PNG', slug: "hello-world3", title: 'three', type: 'all-store' },
        { id: 3, url: 'https://morecouponcode.com/adminpanel/assets/images/store/buty.PNG', slug: "hello-world4", title: 'four', type: 'all-store' },
        { id: 4, url: 'https://morecouponcode.com/adminpanel/assets/images/store/amsety-coupons.PNG', slug: "hello-world5", title: 'five', type: 'all-store' },
        { id: 5, url: 'https://morecouponcode.com/adminpanel/assets/images/store/Body%20Guardz%20LOGO.png', slug: "hello-world6", title: 'six', type: 'all-store' },
        { id: 6, url: 'https://morecouponcode.com/adminpanel/assets/images/store/best%20of%20signs-coupon-codes.PNG', slug: "hello-world7", title: 'seven', type: 'all-store' },
        { id: 7, url: 'https://morecouponcode.com/adminpanel/assets/images/store/Body%20Guardz%20LOGO.png', slug: "hello-world8", title: 'eight', type: 'all-store' },
        { id: 8, url: 'https://morecouponcode.com/adminpanel/assets/images/store/Koio%20LOGO.PNG', slug: "hello-world9", title: 'nine', type: 'all-store' },
        { id: 9, url: 'https://morecouponcode.com/adminpanel/assets/images/store/Lancer%20Skincare.PNG', slug: "hello-world10", title: 'ten', type: 'all-store' },
        { id: 10, url: 'https://morecouponcode.com/adminpanel/assets/images/store/son.PNG', slug: "hello-world11", title: 'eleven', type: 'all-store' },
        { id: 11, url: 'https://morecouponcode.com/adminpanel/assets/images/store/coldesnia%20LOGO.png', slug: "hello-world12", title: 'a', type: 'all-store' },
    ];

    const words = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ] 
    if (loading) return <div className='bg-white vh-100 vw-100 d-flex justify-content-center overflow-hidden align-items-center position-fixed top-0 start-0 z-1'><Spinner /></div>
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
                                {allstore?.data?.filter(item => item?.name?.charAt(0).toLowerCase() === itm.toLowerCase())?.flat()?.map(dta => <StoreItem item={dta} data={styledata} img={allstore?.url} />)}
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
