import { APP_URL, APP_KEY } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Couponcard = ({ data, item, img }) => {
    console.log(item);
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
                            <Link href={`${item.url}`} onClick={() => { window.open(`/store/${item.store_slug}/${item.id}`) }} className={`coupon-btn py-1 px-md-5 px-2 mt-1  button button-${item.type === 'Coupon Code' ? 'secondary' : 'primary'}`}  >
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
                        <Image src={`${!img ? '' : img + "/" + item?.store_logo}`} alt={item.store_name} fill={true} className='w-100 position-relative p-4'></Image>

                    </div>
                    <div class="card-body">
                        <Link href={`all-stores/`}> <h5 class="card-title text-primary fw-bold">{item.store_name}</h5></Link>
                        <h3 class="card-text text-secondary fw-bold" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                        <p class="card-text" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                        <h6 class="card-text fw-bold">{item.offertime}</h6>
                    </div>
                    <div className="card-footer bg-transparent ">
                        {item.type === 'showdeal' ?
                            <Link href="" className='button button-secondary w-100 rounded-1 px-1 py-2'>Show Deal</Link>
                            : <>
                                {/* <div className="show-code-2 position-relative">
                                    <h4 className='w-100 text-center overflow-hidden'>{item.code}</h4>
                                    <Link href="" className='button button-primary px-1 rounded-1 py-2'></Link>
                                </div> */}
                                <div class="btncard_link position-relative ">


                                    <Link href="" class="btn btn-sm px-5 why w-100 show-code-2-btn position-relative bg-orange btn code-btn  text-white font-weight-bold">
                                        <span>Show Code</span>
                                    </Link>

                                    <div class="show-code-2-code overflow-hidden justify-content-end fw-bold d-flex align-items-center  my-auto">{item.code}</div>
                                </div>
                            </>
                        }
                        {/* <p className='text-expired my-auto'> used {item.store} times</p> */}
                    </div>
                </div>



            }
        </>

    )
}

export default Couponcard