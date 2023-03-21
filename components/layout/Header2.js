
import Image from 'next/image'
import logo from '@/public/assets/logo-white.png'
import React from 'react'
import Link from 'next/link'

const Header2 = ({data}) => {
    const secondrycategory = [
        'Clothing/Apperal', "Arts & Entertainment", "Automotive"
    ]

  
return (
    <>
        <nav className="navbar navbar-expand-lg bg-secondary p-3">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image src={data?.url + "/" + data?.logo?.header|| logo} alt="" className={'position-relative my-1 h-100'} fill={200}   />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-75" id="navbarSupportedContent">
                    <form className="mx-auto mx-md-0 d-flex w-75 rounded-2" role="search">
                        <input className="form-control me-2 rounded-1 " type="search" placeholder="Search 5000+ Brands Coupons & Promo Codes" aria-label="Search" />

                    </form>
                </div>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 nav-css">
                    <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            All Stores
                            </Link >
                            <ul className="dropdown-menu  rounded-0">
                                <li><Link className="dropdown-item" href="#">hdsfgv</Link ></li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </Link >
                            <ul className="dropdown-menu  rounded-0">
                                {secondrycategory.map((item) => {
                                    return <li><Link className="dropdown-item dropdown-item-hov-2" href="#">{item}</Link ></li>
                                })}

                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Couopon
                            </Link >
                            <ul className="dropdown-menu  rounded-0">
                                <li><Link className="dropdown-item" href="#">Store</Link ></li>

                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Seasons
                            </Link >
                            <ul className="dropdown-menu  rounded-0">
                                <li><Link className="dropdown-item" href="#">Store</Link ></li>

                            </ul>
                        </li>
                       
                        <li className="nav-item dropdown memorial-btn">
                            <Link href='' className='button button-primary py-1'>Memorial Day Coupons</Link >
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    </>
)
}

export default Header2










