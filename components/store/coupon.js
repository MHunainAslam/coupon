import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const horizentalcoupon = ({ coupon, is_ico, img }) => {
    const slug = useRouter();

    var date = new Date(coupon.updated_at);
    var edate = new Date(coupon.expire_date);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // console.log(coupon)

    return (

        <div className=" bg-white row p-2 my-2 mx-2 coupon ">
            <div className="col-md-2 my-auto ">
                <Image src={img} fill={true} className='h-auto position-relative' />
            </div>
            <div className="col-md-7">
                <Link href="#" className={`h5 text-${coupon?.type === 'code' ? 'secondary' : 'primary'}`}>{coupon?.title}</Link>
                <p className='tr-2 my-1' dangerouslySetInnerHTML={{ __html: coupon.description }}></p>

                <div className='d-md-flex justify-content-between mb-0'>
                    <small>Expires: {`${monthNames[edate.getMonth()].slice(0, 3)} ${edate.getDate()}, ${edate.getFullYear()}`} </small>
                    {!is_ico
                        &&
                        <div className=" coupon-social ">
                            <ul class="list-unstyled d-flex mb-0">
                                <li class="px-3">
                                    <Link href="http://www.facebook.com/sharer.php?u=https://morecouponcode.com/store/kara-coupon-code/6949" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                    </Link>
                                </li>

                                <li class="px-3">
                                    <Link href="https://wa.me/?text=https://morecouponcode.com/store/kara-coupon-code/6949" target="_blank">
                                        <span><i class="fab fa-whatsapp" aria-hidden="true"></i></span>
                                    </Link>
                                </li>

                                <li class="px-3">
                                    <Link href=" https://telegram.me/share/url?url=https://morecouponcode.com/store/kara-coupon-code/6949">
                                        <span><i class="fab fa-telegram-plane" aria-hidden="true"></i></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>

            <div className="col-md-3 text-end m-auto">
                <Link href={`${coupon?.url || ''}`} onClick={() => { window.open(`/store/${slug?.query?.slug}/${coupon?.coupon_id}`) }} className={`p-2 button button-${coupon?.type === 'code' ? 'secondary' : 'primary'}`}  >
                    {coupon?.type === 'code' ? 'Show Code' : 'Show Deal'}
                </Link> <br />
                <small >Update: {`${monthNames[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`} </small>
            </div>
        </div >

    )
}

export default horizentalcoupon
