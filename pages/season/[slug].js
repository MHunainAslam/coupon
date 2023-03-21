import Categorycrad from '@/components/Categorycard'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Seasonpage = () => {


    const seasondropdown = [

    ]
    const seasonslug = useRouter()
    let slug = seasonslug?.query?.slug;
    return (
        <div className="container my-3">
            <div className="row">
                <h2> {slug} Coupons & Promo Codes</h2>
                {seasondropdown?.length ? seasondropdown?.map((item) => {
                    return <div className="px-1 my-0 col-md-4">
                        <Link href={`/store/${item.slug}`} > <Categorycrad item={item} /> </Link>

                    </div>
                }

                ) : "asd"}
            </div>
        </div>
    )
}

export default Seasonpage