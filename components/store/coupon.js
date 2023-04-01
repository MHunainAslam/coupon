import { APP_URL } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const horizentalcoupon = ({ data, coupon, is_ico, img }) => {
    const slug = useRouter();

    console.log(coupon);
    var date = new Date(coupon.updated_at);
    var edate = new Date(coupon.expire_date);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    console.log("aas", coupon);
    return (

        <>
            {data?.Style === 1 ?
                <div className=" bg-white  my-2 h-100 px-3 py-2 coupon d-flex">
                    <div className="col-2  my-auto">

                        <Image src={img} fill={true} className='h-auto position-relative' />

                    </div>
                    <div className="col-8 my-auto px-4">
                        <Link href="#" className={`h3 text-${!coupon?.code ? 'secondary' : 'primary'}`}>{coupon?.title}</Link>
                        <p className='tr-2 my-1 d-md-block d-none fs-px' dangerouslySetInnerHTML={{ __html: coupon.description }}></p>
                        {coupon.featured === 'on' ? <p class="expiredate m-0   text-primary"><i class="fas fa-star  text-primary" aria-hidden="true"></i> New Coupon</p> : ''}

                        <div className='d-md-flex justify-content-between mb-0'>
                            <p className='x-small mb-0'>Expires:

                                {coupon.expire_date ?
                                    `${monthNames[edate.getMonth()].slice(0, 3)} ${edate.getDate()}, ${edate.getFullYear()}`
                                    :
                                    ' Expire Soon'
                                }

                            </p>
                            {!is_ico
                                &&
                                <div className=" coupon-social d-md-block d-none">
                                    <ul class="list-unstyled d-flex mb-0">
                                        <li class="px-3">
                                            <Link href={`http://www.facebook.com/sharer.php?u=${APP_URL}/store/${coupon.title}/${coupon.id}`} target="_blank">
                                                <span><i class={`fab fa-facebook text-${!coupon?.code ? 'secondary' : 'primary'}`} aria-hidden="true"></i></span>
                                            </Link>
                                        </li>

                                        <li class="px-3">
                                            <Link href={`https://wa.me/?text=${APP_URL}/store/${coupon.title}/${coupon.id}`} target="_blank">
                                                <span><i class={`fab fa-whatsapp text-${!coupon?.code ? 'secondary' : 'primary'}`} aria-hidden="true"></i></span>
                                            </Link>
                                        </li>

                                        <li class="px-3">
                                            <Link href={`https://telegram.me/share/url?url=${APP_URL}/store/${coupon.title}/${coupon.id}`}>
                                                <span><i class={`fab fa-telegram-plane text-${!coupon?.code ? 'secondary' : 'primary'}`} aria-hidden="true"></i></span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>

                    <div className=" col-2 text-end m-auto my-auto">
                        <Link href={`${coupon?.url || ''}`} onClick={() => { window.open(`/store/${slug?.query?.slug}/${coupon?.id}`) }} className={`p-2 d-md-block d-none button button-${!coupon?.code ? 'secondary' : 'primary'}`}  >
                            {!coupon?.code ? 'Show Code' : 'Show Deal'}
                        </Link>
                        <Link href={`${coupon?.url || ''}`} onClick={() => { window.open(`/store/${slug?.query?.slug}/${coupon?.id}`) }} className={`p-2  d-md-none d-block button button-${!coupon?.code ? 'secondary' : 'primary'}`}  >
                            {!coupon?.code ? '>' : '>'}
                        </Link>
                        <p className='d-md-block d-none x-small text-center'>Update: {`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`} </p>
                    </div>
                </div >
                :
                <div className=" bg-white  my-2 h-100 px-3 py-2 coupon ">
                    <div className="d-flex">
                        <div className="col-2  my-auto">

                            <Image src={img} fill={true} className='h-auto position-relative' />

                        </div>
                        <div className="col-8 my-auto px-4">
                            <Link href="#" className={`h3 text-black`}>{coupon?.title}</Link>
                            <p className='tr-2 my-1 d-md-block lh-1 d-none fs-6' dangerouslySetInnerHTML={{ __html: coupon.description }}></p>
                            {coupon.featured === 'on' ? <p class="expiredate m-0   text-primary"><i class="fas fa-star  text-primary" aria-hidden="true"></i> New Coupon</p> : ''}

                            <div className='d-none justify-content-between mb-0'>

                                {!is_ico
                                    &&
                                    <div className=" coupon-social d-none">
                                        <ul class="list-unstyled d-flex mb-0">
                                            <li class="px-3">
                                                <Link href={`http://www.facebook.com/sharer.php?u=${APP_URL}/store/${coupon.title}/${coupon.id}`} target="_blank">
                                                    <span><i class={`fab fa-facebook text-${!coupon?.code ? 'secondary' : 'primary'}`} aria-hidden="true"></i></span>
                                                </Link>
                                            </li>

                                            <li class="px-3">
                                                <Link href={`https://wa.me/?text=${APP_URL}/store/${coupon.title}/${coupon.id}`} target="_blank">
                                                    <span><i class={`fab fa-whatsapp text-${!coupon?.code ? 'secondary' : 'primary'}`} aria-hidden="true"></i></span>
                                                </Link>
                                            </li>

                                            <li class="px-3">
                                                <Link href={`https://telegram.me/share/url?url=${APP_URL}/store/${coupon.title}/${coupon.id}`}>
                                                    <span><i class={`fab fa-telegram-plane text-${!coupon?.code ? 'secondary' : 'primary'}`} aria-hidden="true"></i></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>

                        </div>
                        {coupon?.code ? 
                        <div className=" col-2 card-footer bg-transparent ">


                            {/* <div className="show-code-2 position-relative">
                                    <h4 className='w-100 text-center overflow-hidden'>{item.code}</h4>
                                    <Link href="" className='button button-primary px-1 rounded-1 py-2'></Link>
                                </div> */}
                            <div class="btncard_link position-relative ">


                                <Link href="" class="btn btn-sm  why w-100 show-code-2-btn position-relative btn code-btn bg-orange    text-white font-weight-bold">
                                    <span>Show Code</span>
                                </Link>

                                <div class="show-code-2-code overflow-hidden justify-content-end fw-bold d-flex align-items-center  my-auto">{coupon.code}</div>
                            </div>


                        </div>
                        :

                        <div className=" col-2 text-end m-auto my-auto">

                            <Link href={`${coupon?.url || ''}`} onClick={() => { window.open(`/store/${slug?.query?.slug}/${coupon?.id}`) }} className={`p-2 d-md-block d-none button button-${!coupon?.code ? 'secondary' : 'primary'}`}  >
                                Show Deal
                            </Link>
                            <Link href={`${coupon?.url || ''}`} onClick={() => { window.open(`/store/${slug?.query?.slug}/${coupon?.id}`) }} className={`p-2  d-md-none d-block button button-${!coupon?.code ? 'secondary' : 'primary'}`}  >
                                {!coupon?.code ? '>' : '>'}
                            </Link>
                            <p className='d-md-block d-none x-small text-center'>Update: {`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`} </p>
                        </div>
}
                    </div>
                    <div className='border-top w-100 d-flex justify-content-between'>
                        <div className='col-6 text-center ms-2 my-auto'>
                            <p className='x-small mb-0'>Expires:

                                {coupon.expire_date ?
                                    `${monthNames[edate.getMonth()].slice(0, 3)} ${edate.getDate()}, ${edate.getFullYear()}`
                                    :
                                    ' Expire Soon'
                                }

                            </p>
                        </div>
                        <div></div>
                    </div>
                </div >

            }
        </>

    )
}

export default horizentalcoupon
