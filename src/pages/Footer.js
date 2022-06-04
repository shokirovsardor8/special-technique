import React from 'react'
import { AiFillCopyrightCircle, AiFillHome, AiFillPhone, AiFillPrinter } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer mt-3 bg-light">
      <footer className="text-center text-lg-start text-muted container">
        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
          <div className="me-5 d-none d-lg-block">
            <span>Bizni ijtimoiy tarmoqlarda kuzatib boring:</span>
          </div>

          <div className=''>
            <a href="https://t.me/agromash_elit" className="me-4 text-reset" target={'_blank'}>
              <FaTelegramPlane />
            </a>
            <a href="https://www.youtube.com/channel/UC2kMDrHwJAKarYCeV9gE_wA" className="me-4 text-reset" target={'_blank'}>
              <FaYoutube />
            </a>
            <a href="https://instagram.com/agromashelit" className="me-4 text-reset" target={'_blank'}>
              <FaInstagram />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h5 className="text-uppercase fw-bold mb-4 text-success">
                  Agromash<span className='text-warning'>elit</span>
                </h5>
                <p>
                  O'zbekistondagi ishonchli firma! Yevropa, Italiya, Turkiya, Polsha, Xitoy davlatlarida ishlab chiqarilgan eng so'nggi rusumdagi qishloq xo'jalogi texnikalari
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  foydali havolalar
                </h6>
                <p>
                  <a href="/about" className="text-reset">Biz haqimizda</a>
                </p>
                <p>
                  <a href="/" className="text-reset">Bosh sahifa</a>
                </p>
                <p>
                  <a href="https://yengilyechim.uz" target={'_blank'} className="text-reset">Dasturchi bilan aloqa</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><AiFillHome /><a href='https://maps.google.com/maps?q=41.243922,69.233673&ll=41.243922,69.233673&z=16' className='text-secondary' target={'_blank'}> Toshkent sh. Sergeli t. </a></p>
                <p>
                  <a href='mailto: kadirov-35@mail.ru' className='text-secondary' target={'_blank'}><MdEmail /> kadirov-35@mail.ru</a>
                </p>
                <p><AiFillPhone /><a href="tel:+998909960440" className='text-secondary'> +998 90 996 04 40</a></p>
                <p><AiFillPhone /><a href="tel:+998971960440" className='text-secondary'> +998 97 196 04 40</a></p>
              </div>
            </div>
          </div>
        </section>
      </footer>
      {/* <img class="lu-fs" height="160" id="lu_map" src="https://www.google.com/maps/vt/data=V616subzOpFLgD0JaITbQz8QWrqOpQcXdC56PFTGK6O9lWkLgWsBDv5UTrARXtz5q5IHJzbewrKPOlDRxKkkFiP-mNlH83pZB9pWPWEGHA7vTN__-dAPxlhWeNl-qjsUTnFi0YVFvZnzM2x6sKJDF2qzy_oRFcxBlBX4KoIJBpLR&amp;w=400&amp;h=400" width="400" height={400} title="Map of OOO &quot;AGROMASH ELIT&quot;" alt="Map of OOO &quot;AGROMASH ELIT&quot;" border="0" data-atf="1" data-frt="0" style={{ display: "block" }} /> */}

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        <a className="text-reset fw-bold " href="/">AGROMASHELIT.uz</a>
      </div>
    </div>
  )
}

export default Footer;