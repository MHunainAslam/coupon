import React from 'react'

const Subscribe = ({ }) => {
    return (
        <>
            <div class="m-md-5 my-5 m-4">
                <div className="col-7 m-md-4">
                    <h1 class="subscribe-head text-md-start ">Best Deals From Top Stores.</h1>
                    <h3 class="mt-1 text-md-start fw-normal">Helping Customers Save Million Dollars</h3>
                    <p class="mt-2 text-md-start">Get latest disocunts from top brands Instantly</p>
                    <form action="" class="px-0 my-3 subscribe-form input-group " role="form" method="POST">
                        <div class="input-group mb-3 h-100 w-100">
                            <input type="text" class="form-control col-9 border-0" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn button-secondary  bg-secondary text-uppercase text-white col-3 fw-bolder" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Subscribe