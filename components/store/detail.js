import { APP_KEY, APP_URL } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import Coupon from './coupon'
import Expire from './expire'

const detail = ({ storedetailapi, img , data}) => {

    // if (storedetailapi.data?.coupon) {
    //     let GivenDate = new Date(data.coupon.expiry_date.split(" ")[0].replace(/-/g, "/"))
    //     let CurrentDate = new Date();


    //     let difference = CurrentDate.getTime() - GivenDate.getTime();
    //     let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

    //     if (GivenDate > CurrentDate) {
    //         date = `${TotalDays} Days`;
    //     } else {
    //         date = 'Expired';
    //     }
    // }

    // useEffect(() => {
    // if (storedetailapi?.data) {

    //     storedetailapi?.data?.coupon?.map((itm) => {

    //         if (new Date(itm.expire_date) > new Date()) {
    //             // setIsData({ ...isData, store: true })
    //             setStor(true)
    //             console.log('exppp');
    //         }
    //         else {
    //             // setIsData({ ...isData, expire: true })
    //             setExpir(true);
    //             console.log('exppp');
    //         }
    //         console.log(isData);
    //     });
    // }
    // }, [])

    const [isData, setIsData] = useState({ store: false, expire: false })
    const [expir, setExpir] = useState(false)
    const [stor, setStor] = useState(false)

    const [isLoading, setIsLoading] = useState(false);

    const handleContact = (e) => {
        e.preventDefault();

        setIsLoading(true);

        let email = e.target.elements['email'].value;

        fetch(`${APP_URL}api/subscribe`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ email, key: APP_KEY })
        }).then(res => res.json()).then((data) => {
            if (data.success) {
                 toast.success(data.message)
                 maill.reset()
            } else {
                 toast.error(data.message)
            }
            setIsLoading(false);
        }).catch(err => {
            console.error(err);
            setIsLoading(false);
            toast.error('Something went wrong!')
        });
    }


    return (
        <div className="product-detail">
            {/* {stor
                && <> */}


            <h2 className='fw-bold'> {storedetailapi?.data?.store.name} Coupons & Promo Codes</h2>
            <div className="col-12 ">
                {storedetailapi?.data?.coupon?.map((item) => {
                    return new Date(item.expire_date) > new Date() ?

                        <div className=" ">
                            <Coupon coupon={item} img={img + "/" + storedetailapi?.data?.store?.logo} data={data} />
                        </div> : ''
                }
                )}
            </div>
            <div className="col-12 ">
                <div class="row mx-auto my-3" id="email-alert-signup">
                    <div class="col-md-5 py-3 pe-0">
                        <h3 className='fs-5 text-white mb-0'>Get latest <em class="text-capitalize">{storedetailapi?.data?.store.name} Coupon</em> &amp; deals alert.  <Link href=" /footerpage/ " class="privacy fs-6 text-white">Privacy Policy</Link></h3>
                    </div>
                    <div class="col-md-7" yth="">

                        <form class="search ajax-form search-alert-signup py-3 d-flex w-100  h-85-px" id='maill' onSubmit={handleContact}>
                            <div class="text-field-holder w-80">
                                <input id="email_" type="email" name="email" placeholder="Email Address" className='w-100 h-100 px-3' />
                            </div>
                            <button type="submit" class=" text-white button button-primary ms-md-3" name="newsletter">

                                {isLoading ? 'Subscribing...' : 'Go'}

                            </button>

                        </form>
                    </div>
                </div>
            </div>
            {/* </>
            }
            
            {expir
                && <> */}
            <h2 className='text-start fw-bold mb-0 mt-3'>Expired {storedetailapi?.data?.store.name} Coupons & Promo Codes</h2>
            <div className="text-expired">
                {storedetailapi?.data?.coupon?.map((item) => {

                    return new Date(item.expire_date) > new Date() ?
                        '' :
                        <Expire expire={item} img={img + "/" + storedetailapi?.data?.store?.logo} />

                })}
            </div>
            {/* </>
            } */}
        </div>
    )
}

export default detail
