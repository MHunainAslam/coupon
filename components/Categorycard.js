import Image from 'next/image'
import React from 'react'

const Categorycrad = ({ item, img }) => {
    return (

        <div className="card h-100 border-0 rounded-0">
            <div className="col-12 my-auto d-flex">
                <div className="col-6">
                    <Image src={img + "/" + item.logo} fill={100} className="position-relative cat-page-img"></Image>
                </div>
                <div className="col-6 my-auto cat-page-title">
                    {item.name}
                </div>
            </div>

        </div>
    )
}

export default Categorycrad