import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const sidepanel = ({ data }) => {



    return (
        <>
            <div className="product-sidepanel p-2">
                <Image src={`${data?.product?.url || ''}`} fill={true} className='h-auto position-relative' />
                <h3 className='text-center'>{data?.product?.title}</h3>
                <p>{data?.product?.desc}</p>
                <div className='text-center'> <Link href='#' className='button button-secondary'>Go To Store</Link ></div>
                <div className="similar-cat">
                    <h5 className='my-4  text-center'>Similar Category</h5>
                    {data.similarCategory.map((item) => {
                        return <div className='similar-cat-link'>
                            <Link href={item.slug}>{item.title}</Link>
                        </div>
                    })}
                </div>
                <div className="similar-store">
                    <h5 className='mt-5 my-3  text-center'>Similar Store</h5>
                    {data.similarStore.map((item) => {
                        return <div className='similar-store-link'>
                            <Link href={item.slug}>{item.title}</Link>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default sidepanel
