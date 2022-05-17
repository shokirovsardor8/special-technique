import React from 'react'
import { AiFillCopyrightCircle, AiFillHome, AiFillPhone, AiFillPrinter } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">
<footer class="text-center text-lg-start bg-light text-muted">
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="" class="me-4 text-reset">
      <FaFacebookF />
      </a>
      <a href="" class="me-4 text-reset">
      <FaTelegramPlane/>
      </a>
      <a href="" class="me-4 text-reset">
      <FaYoutube/>
      </a>
      <a href="" class="me-4 text-reset">
        <FaInstagram/>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <AiFillCopyrightCircle className='me-2'/>Agromashelit
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><AiFillHome/> New York, NY 10012, US</p>
          <p>
            <MdEmail/>
          </p>
          <p><AiFillPhone/> + 01 234 567 88</p>
          <p><AiFillPrinter/> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
            </div>
    )
}

export default Footer;