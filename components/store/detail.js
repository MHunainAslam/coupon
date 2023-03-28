import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Coupon from './coupon'
import Expire from './expire'

const detail = ({ storedetailapi, data, coupon, expire, img }) => {

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

    const [isData, setIsData] = useState({ store: false, expire: false })
    const [expir, setExpir] = useState(false)
    const [stor, setStor] = useState(false)


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


    console.log(storedetailapi?.data?.coupon, expir, stor);
    return (
        <div className="product-detail">
            {/* {stor
                && <> */}
            <h2 className='ms-3'> {storedetailapi?.data?.store.name} Coupons & Promo Codes</h2>
            <div className="col-12 ">
                {storedetailapi?.data?.coupon?.map((item) => {
                    return new Date(item.expire_date) > new Date() ?

                        <div className=" ">
                            <Coupon coupon={item} img={img + "/" + storedetailapi?.data?.store?.logo} />
                        </div> : ''
                }
                )}
            </div>
            {/* </>
            }
            {expir
                && <> */}
            <h2 className='text-start ps-3 mb-0 mt-3'>Expired</h2>
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
