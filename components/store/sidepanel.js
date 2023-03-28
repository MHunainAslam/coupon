import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const sidepanel = ({ sidepanelapi, img }) => {



    return (
        <>
            <div className="product-sidepanelapi p-2">
                <Image src={`${!img ? '' : img + "/" + sidepanelapi?.data?.store?.logo}`} fill={true} className='h-auto position-relative' />
                <h4 className='my-2'>{sidepanelapi?.data?.store?.name}</h4>
                <p dangerouslySetInnerHTML={{ __html: sidepanelapi?.data?.store?.description }}></p>

                <div className=''> <Link href={`${sidepanelapi?.data?.store?.home_url}`} className='button button-secondary p-2'>Go To Store</Link ></div>
                <div className="similar-cat">
                    <h5 className='my-4 '>Similar Category</h5>
                    {/* {sidepanelapi?.data?.category?.map((itema) => { */}
                    <div className='similar-cat-link'>
                        <Link href={`${sidepanelapi?.data?.category?.slug}`}>{sidepanelapi?.data?.category?.name}</Link>

                        <h6 className='mt-2'>Find More <strong> {sidepanelapi?.data?.category?.name}</strong> Coupon Codes </h6>
                    </div>
                    {/* })} */}
                </div>
                <div className="similar-store">
                    <h4 className='mt-5 my-3  '>Similar Store</h4>
                    {sidepanelapi?.data?.related_store?.data?.map((item) => {
                        return <div className='similar-store-link'>
                            <Link href={item.slug}>{item.name}</Link>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default sidepanel
