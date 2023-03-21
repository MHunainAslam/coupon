import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function StoreItem({ data, item, img }) {  
    return (

        <div className={`most-popular-stores px-1 py-1 ${data?.Style === 1 ? 'popular-width-1' : 'popular-width-2 col-4'}`}>
            <Link href={`/store/${item.slug}`} className='d-block h-100'>
                <div className={`card-hover card rounded-0 popular-img-card ${item.popular === "all-store" ? 'h-100' : ''}`}>
                    <div className="card-body p-2 popular-img d-flex align-items-center h-100">
                        <Image src={`${img+'/'+item.logo}`}  alt={`${item.name}`} fill={true} className='h-100 position-relative w-100' />
                    </div>
                    <div className={`card-footer text-center bg-transparent border-0 ${item.type === "all-store" ? '' : 'd-none'}`}>
                        <p className='mb-0' >{item.name}</p>
                    </div>
                </div>
            </Link>
        </div>

    )
}
