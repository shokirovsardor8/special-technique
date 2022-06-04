import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getproductsearch } from '../reducers/ProductReducer';

function SearchResult() {
    const selector = useSelector(state => state.product);
    const [searchResult, setSearchResult] = useState([]);

    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(() => {
        setSearchResult(selector.product)
    }, [selector.product])

    useEffect(() => {
        // dispatch(getproductsearch({ search: history.location.search }))
    }, [])

  return (
    <div>
        <div className="container py-4">
            <h3>{searchResult?.length} ta natija topildi</h3>
                    <div xs={1} md={4} className="row g-4 ">
                        {Array.isArray(searchResult)&&searchResult?.map((item1, index1) => (
                            <div className='col col-sm-6 col-md-6 col-lg-3' key={index1}>
                                <Link to={'/product/' + item1?.id}>
                                    <Card className='p-2 mt-1 mb-4 card-product border-1'>
                                        <div className='position-relative'>
                                            <div style={{ backgroundImage: 'url("data:image/png;base64,' + item1.listBytes + '")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
                                                className='card-image'
                                            >

                                            </div>
                                            <div className="card-img-overlay">
                                                <h6 className="card-title position-absolute bottom-0 bg-success text-white" style={{ right: 0, bottom: 0, padding: '4px', paddingRight: '25px' }}>{item1?.price} so'm</h6>
                                            </div>
                                        </div>
                                        <Card.Body className='card-body1 position-relative'>
                                            <h6 className='text-center'>{item1?.name?.length > 50 ? item1?.name.substring(0, 30) + "..." : item1?.name}</h6>
                                            <Card.Text>

                                                <Button variant="success" className='mx-auto btn position-absolute go-btn m-0'>Batafsil</Button>

                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
    </div>
  )
}

export default SearchResult