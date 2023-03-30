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

console.log("aas",coupon);
    return (

        <div className=" bg-white  my-2 h-100 px-3 py-2 coupon d-flex">
            <div className="col-2  my-auto">

                <Image src={img} fill={true} className='h-auto position-relative' />

            </div>
            <div className="col-8 my-auto px-4">
                <Link href="#" className={`h3 text-${!coupon?.code ? 'secondary' : 'primary'}`}>{coupon?.title}</Link>
                <p className='tr-2 my-1 d-md-block d-none fs-px' dangerouslySetInnerHTML={{ __html: coupon.description }}></p>
                {coupon.featured === 'on' ? <p class="expiredate m-0   text-primary"><i class="fas fa-star  text-primary" aria-hidden="true"></i> New Coupon</p> : '' }
                
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

            <div className=" col-2 text-end m-auto my-auto">
                <Link  href={`${coupon?.url || ''}`} onClick={() => { window.open(`/store/${slug?.query?.slug}/${coupon?.id}`) }} className={`p-2 d-md-block d-none button button-${!coupon?.code ? 'secondary' : 'primary'}`}  >
                    {!coupon?.code ? 'Show Code' : 'Show Deal'}
                </Link>
                <Link href={`${coupon?.url || ''}`} onClick={() => { window.open(`/store/${slug?.query?.slug}/${coupon?.id}`) }} className={`p-2  d-md-none d-block button button-${!coupon?.code ? 'secondary' : 'primary'}`}  >
                    {!coupon?.code ? '>' : '>'}
                </Link>
                <p className='d-md-block d-none x-small text-center'>Update: {`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`} </p>
            </div>
        </div >

    )
}

export default horizentalcoupon
