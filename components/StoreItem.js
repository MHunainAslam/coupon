import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function StoreItem({ data, item, img, cols , head}) {
    return (

        <div className={`most-popular-stores px-1 py-1 ${data?.Style === 1 ? 'popular-width-1' : 'popular-width-2 col-4 '}` } style={{ maxWidth: cols && '16.66666667%' }} >
            <Link href={`/store/${item.slug}`} className='d-block h-100'>
                <div className={`card-hover card rounded-0  popular-img-card ${head === true  ? 'h-100' : ''}`}>
                    <div className={`card-body p-0 popular-img d-flex align-items-center ${head === true  ? 'h-85-px' : ''} `}>
                        <Image src={`${img + '/' + item.logo}`} alt={`${item.name}`} fill={true} className='h-100 p-0 position-relative w-100 ' />
                    </div>
                    <div className={`card-footer bg-white text-center bg-transparent border-0 ${head === true ? '' : 'd-none'}`}>
                        <p className='mb-0' >{item.name}</p>
                    </div>
                </div>
            </Link>
        </div>

    )
}
