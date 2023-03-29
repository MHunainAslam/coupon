import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const horizentalcoupon = ({ coupon, is_ico, img }) => {
    const slug = useRouter();
 
console.log(coupon);
    var date = new Date(coupon.updated_at);
    var edate = new Date(coupon.expire_date);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    return (

        <div className=" bg-white row p-2 my-2 mx-2 coupon ">
            <div className="col-md-2 my-auto ">

                <Image src={img} fill={true} className='h-auto position-relative' />

            </div>
            <div className="col-md-7">
                <Link href="#" className={`h5 text-${!coupon?.code ? 'secondary' : 'primary'}`}>{coupon?.title}</Link>
                <p className='tr-2 my-1' dangerouslySetInnerHTML={{ __html: coupon.description }}></p>

                <div className='d-md-flex justify-content-between mb-0'>
                    <small>Expires:

                        {coupon.expire_date ?
                            `${monthNames[edate.getMonth()].slice(0, 3)} ${edate.getDate()}, ${edate.getFullYear()}`
                            :
                            ' Expire Soon'
                        }

                    </small>
                    {!is_ico
                        &&
                        <div className=" coupon-social ">
                            <ul class="list-unstyled d-flex mb-0">
                                <li class="px-3">
                                    <Link href="http://www.facebook.com/sharer.php?u=https://morecouponcode.com/store/kara-coupon-code/6949" target="_blank">
                                        <span><i class={`fab fa-facebook text-${!coupon?.code ? 'secondary' : 'primary'}`} aria-hidden="true"></i></span>
                                    </Link>
                                </li>

                                <li class="px-3">
                                    <Link href="https://wa.me/?text=https://morecouponcode.com/store/kara-coupon-code/6949" target="_blank">
                                        <span><i class={`fab fa-whatsapp text-${!coupon?.code ? 'secondary' : 'primary'}`} aria-hidden="true"></i></span>
                                    </Link>
                                </li>

                                <li class="px-3">
                                    <Link href=" https://telegram.me/share/url?url=https://morecouponcode.com/store/kara-coupon-code/6949">
                                        <span><i class={`fab fa-telegram-plane text-${!coupon?.code ? 'secondary' : 'primary'}`} aria-hidden="true"></i></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>

            <div className="col-md-3 text-end m-auto">
                <Link href={`${coupon?.url || ''}`} onClick={() => { window.open(`/store/${slug?.query?.slug}/${coupon?.id}`) }} className={`p-2 button button-${!coupon?.code ? 'secondary' : 'primary'}`}  >
                    {!coupon?.code ? 'Show Code' : 'Show Deal'}
                </Link> <br />
                <small >Update: {`${monthNames[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()}`} </small>
            </div>
        </div >

    )
}

export default horizentalcoupon
