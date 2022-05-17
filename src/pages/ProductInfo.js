import React from 'react'
import './ProductInfo.css'
import boots from '../images/boots.jpg'
function ProductInfo() {
    return (
        <div class="container">
            <div class="card">
                <div className='row'>
                    <div className='col border-4 border-primary '>
                        <img src={boots} />
                        <div className='d-flex flex-row fle justify-content-around mt-3'>
                            <img src={boots} style={{ width: '30%' }} />
                            <img src={boots} style={{ width: '30%' }} />
                            <img src={boots} style={{ width: '30%' }} />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card-body'>
                            <h2 className='card-title mb-4 text-uppercase'>
                                product name
                            </h2>
                            <div className='card-text'>
                                <h5>Narxi: &nbsp;<span className='text-danger h3'>15000 so'm</span></h5>
                                <br />

                                <hr />
                                <br />

                                <p className='mb-4'>Product Description</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo