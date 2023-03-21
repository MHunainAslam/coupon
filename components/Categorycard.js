import Image from 'next/image'
import React from 'react'

const Categorycrad = ({ item }) => {
    return (

        <div className="card my-2 border-0 rounded-0">
            <div className="col-12 d-flex">
                <div className="col-6">
                    <Image src={item.url} fill={100} className="position-relative cat-page-img"></Image>
                </div>
                <div className="col-6 my-auto cat-page-title">
                    {item.title}
                </div>
            </div>

        </div>
    )
}

export default Categorycrad