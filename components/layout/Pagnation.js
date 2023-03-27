import Link from 'next/link'
import React from 'react'

const Pagnation = ({ words }) => {
    return (
        <div className="custom-pag row">
         
                {/* <ul class="pagination border-0 rounded-0 custom-pag"> */}
                    {/* <li class="page-item"><a class="page-link" href="#">Previous</a></li> */}
                    {words?.map((item)=> <li class="page-item"><Link class="page-link" href={`#${item}`}>{item.toUpperCase()}</Link></li>
                    )}
                    {/* <li class="page-item"><a class="page-link" href="#">Next</a></li> */}
                {/* </ul> */}
         
        </div>
    )
}

export default Pagnation