import React from 'react'
import traktor from '../images/traktor.png'
import fasd from '../images/fasd.png'
import dwd from '../images/dwd.png'
import press from '../images/press.png'
import { Carousel } from 'react-bootstrap'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

function Carusel() {
    return (
        <div className='container pt-5 pb-5'>
            <Carousel>
                <Carousel.Item className='home-carousel' interval={5000}>
                    <div className='home-img'>
                        <img
                            className="d-none d-md-block w-50 float-end mt-5 mb-0"
                            src={traktor}
                            alt="First slide"
                        />
                    </div>
                    <div className='slider-text m-5 m-md-5 w-75'>
                        <h1 className='fw-bold text-white'>DEUTZ-FAHR <br/>Germaniya </h1>
                        <p className='text-white'></p>
                        {/* <div className='mt-5 mb-5 tel-btn'> */}
                        <a href='tel:+998904708181' className='tel-btn btn-lg btn-success home-call-btn mb-5'>Qo'ng'iroq qilish</a>
                        {/* </div> */}
                    </div>
                </Carousel.Item>
                <Carousel.Item className='home-carousel' interval={5000}>
                    <img
                        className="d-none d-md-block w-50 float-end home-img"
                        src={fasd}
                        alt="First slide"
                        style={{marginTop: '150px'}}
                    />
                    <div className='slider-text m-5 w-75'>
                    <h1 className='fw-bold text-white'>Somon zichlagich Z-511 <br/>Polsha</h1>
                        <a href='tel:+998904708181' className='tel-btn btn-lg btn-success home-call-btn mb-5'>Qo'ng'iroq qilish</a>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='home-carousel2' interval={5000}>
                    <img
                        className="d-none d-md-block w-50 float-end mb-5 home-img"
                        src={dwd}
                        alt="First slide"
                        style={{marginTop: '180px'}}
                    />
                    <div className='slider-text m-5 w-75'>
                        <h1 className='fw-bold text-white'>Pnevmatik ekish mashinasi<br/>Turkiya</h1>
                        <a href='tel:+998904708181' className='tel-btn btn-lg btn-success home-call-btn mb-5'>Qo'ng'iroq qilish</a>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='home-carousel' interval={5000}>
                    <img
                        className="d-none d-md-block w-50 float-end home-img"
                        src={press}
                        alt="First slide"
                        style={{marginTop: '235px'}}
                    />
                    <div className='slider-text m-5 w-75'>
                    <h1 className='fw-bold text-white'>Somon zichlagich BLY-02R <br/>Turkiya</h1>
                        <a href='tel:+998904708181' className='tel-btn btn-lg btn-success home-call-btn mb-5'>Qo'ng'iroq qilish</a>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Carusel