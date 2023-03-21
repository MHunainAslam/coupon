import { APP_URL, APP_KEY } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Couponcard = ({ data, item, img }) => {


    console.log(img + "/" + item.store_logo);
    return (
        <>
            {data.Style === 1 ?

                <div className="card card-hover rounded-0 new-coupon">
                    <div className="card-img new-coupon-img">
                        <Image src={`${!img ? '' : img + "/" + item?.store_logo}`} alt={item.store_name} fill={true} className='w-100 position-relative p-4'></Image>
                    </div>
                    <div className="card-body text-center text-secondary">
                        <h5 className='ship-hover'>{item.title}</h5>
                    </div>
                    <div className="card-footer bg-transparent text-center ">
                        <Link href={`/store/${item.store_slug}`} className='text-black new-coupon-title'>{item.store_name}</Link>
                        <div>
                            {/* {item.url} */}
                            <Link href="www.google.com" onClick={() => { window.open(`/store/${item.store_slug}/${item.id}`) }} className={`coupon-btn py-1 px-md-5 px-2 mt-1  button button-${item.type === 'Coupon Code' ? 'secondary' : 'primary'}`}  >
                                {item.type === 'Coupon Code' ? 'Show Code' : 'Show Deal'}
                            </Link>

                        </div>

                    </div>
                </div>

                :

                // <h2 className='head1 pt-5 '>Today's Most Popular Deals</h2>

                // ${item.type === 'topdeal' ? 'top-deal' : ''}
                <div class={`card position-relative border-0 h-100  `}>
                    <div className="img-overlay  ">
                        <Image src={item.url} class="card-img-top w-100 position-relative" fill={100} alt="..." />
                    </div>
                    <div class="card-body">
                        <Link href={`all-stores/`}> <h5 class="card-title text-primary fw-bold">{item.title}</h5></Link>
                        <h4 class="card-text text-secondary fw-bold">{item.discount}</h4>
                        <p class="card-text">{item.extraoff}</p>
                        <h6 class="card-text fw-bold">{item.offertime}</h6>
                    </div>
                    <div className="card-footer bg-transparent ">
                        {item.type === 'showdeal' ?
                            <Link href="" className='button button-secondary w-100 rounded-1 px-1 py-2'>Show Deal</Link>
                            : <div>
                                <div className="show-code-2 position-relative">
                                    <h4 className='w-100 text-center'>{item.code}</h4>
                                    <Link href="" className='button button-primary px-1 rounded-1 py-2'></Link>
                                </div>

                            </div>
                        }
                        <p className='text-expired my-auto'> used {item.usetime} times</p>
                    </div>
                </div>



            }
        </>

    )
}

export default Couponcard