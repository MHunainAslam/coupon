import Categorycrad from '@/components/Categorycard'
import { APP_KEY, APP_URL } from '@/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Seasonpage = () => {

    const [seasondropdown, setseasondropdown] = useState({})
    const [err, setError] = useState(false);

    useEffect(() => {
        fetch(`${APP_URL}api/season?key=${APP_KEY}&ttype=coupon-type(slug)&paginate=20`).then(res => res.json()).then((dta) => {
            setseasondropdown(dta)
        }).catch(err => {
            setError(true);
        })
    }, [])

    const seasonslug = useRouter()
    let slug = seasonslug?.query?.slug;
    return (
        <div className="container my-3">
            <div className="row ">
                {/* <div className="col-12"> */}
                <div className="col-md-10 mx-auto">
                    <h2> {slug} Coupons & Promo Codes</h2>
                    {seasondropdown?.length ? seasondropdown?.map((item) => {
                        return <div className="px-1 my-0 col-md-4">
                            <Link href={`/store/${item.slug}`} > <Categorycrad item={item} /> </Link>
                        </div>
                    }

                    ) : <>
                        <div className='text-center'>
                            <p>No Coupons Available in Table</p>
                        </div>
                    </>}
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Seasonpage