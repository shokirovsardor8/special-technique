import React, { useEffect, useRef, useState } from 'react'
import { Container, Button, Card } from 'react-bootstrap';
import Carusel from './Carusel';
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getproductview } from '../reducers/ProductReducer';

function Home(props) {

  const [productView, setProductView] = useState([])

  const firstUpdate = useRef(false);
  const selector = useSelector(state => state.product.product);
  const dispatch = useDispatch();
  const [params, setParams] = useState(useParams());



  useEffect(() => {
    setProductView(selector)
    // console.log(selector, 'selector');
  }, [selector])

  useEffect(() => {
    dispatch(getproductview())
  }, [useParams()])

  useEffect(() => {
    dispatch(getproductview())
    firstUpdate.current = true;
    setProductView([])
  }, [])

  return (
    <div>

      <Carusel />


      <div>
        <Container>
          {Array?.isArray(productView) && productView?.map((item, index) => (
            item?.limitProducts.length > 3 ?
              <div key={index}>
                <div className="d-flex justify-content-between">
                  <h3 className=''>{item?.categoryName}</h3>
                  <Link to={'/' + item?.categoryId} className='text-end text-primary'>
                    barcha mahsulotlar <AiOutlineArrowRight />
                  </Link>
                </div>
                <div xs={1} md={4} className="row g-4 ">
                  {item?.limitProducts?.map((item1, index1) => (
                    <div className='col col-sm-6 col-md-6 col-lg-3' key={index1}>
                      <Link to={'/product/' + item1?.id}>
                        <Card className='p-2 mt-1 mb-4 card-product'>
                          <div className='position-relative'>
                            <div style={{ backgroundImage: `url(http://185.217.131.138:7788/agromash/api/attachment/downloadSytem/${item1?.id})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
                              className='card-image'
                            >

                            </div>
                            {/* <Card.Img variant="top" src={"data:image/png;base64," + item1.listBytes} style={{ width: "100%" }} /> */}
                            <div className="card-img-overlay">
                              <h6 className="card-title position-absolute bottom-0 bg-success text-white" style={{ right: 0, bottom: 0, padding: '4px', paddingRight: '25px' }}>{item1?.price} so'm</h6>
                            </div>
                          </div>
                          <Card.Body className='card-body1 position-relative'>
                            <h6 className='text-center'>{item1?.name?.length > 50 ? item1?.name.substring(0, 30) + "..." : item1?.name}</h6>
                            <Card.Text>

                              <button className='mx-auto w-75 btn btn-success position-absolute go-btn m-0 '>Batafsil</button>

                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  ))}
                </div>
              </div> : ''
          ))}


          <div className='position-relative w-100 mt-3' style={{ height: 0, paddingBottom: '55%' }}>
            <iframe
              // width="853"
              // height="480"
              src='https://youtube.com/embed/3rCSvsh_2S8'
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className='position-absolute w-100 h-100' />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Home