import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import boots from '../images/boots.jpg'
function Main() {
  return (
    <div>
      <Container>
        <h3 className='mt-5 mb-4 text-center'>Category name</h3>
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={boots} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* <div class="card flex-row flex-wrap">
          <div class="card-header border-0">
            <img src={boots} alt="" style={{ width: 600 }} />
          </div>
          <div class="card-block px-2">
            <h3 class="card-title">Title</h3>
            <p>145000000 so'm</p>
            <p class="card-text">Description</p>
            <a href="#" class="btn btn-primary">BUTTON</a>
          </div>
          <div class="w-100"></div>
          <div class="card-footer w-100 text-muted">
            FOOTER
          </div>

        </div> */}
        <section style={{ backgroundColor: "#eee" }}>
          <div class="container py-5">
            <div class="row justify-content-center mb-3">
              <div class="col-md-12 col-xl-10">
                <div class="card shadow-0 border rounded-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                            class="w-100" />
                          <a href="#!">
                            <div class="hover-overlay">
                              <div class="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6 col-xl-6">
                        <h5>Quant trident shirts</h5>
                        <div class="d-flex flex-row">
                          <div class="text-danger mb-1 me-2">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <span>310</span>
                        </div>
                        <div class="mt-1 mb-0 text-muted small">
                          <span>100% cotton</span>
                          <span class="text-primary"> • </span>
                          <span>Light weight</span>
                          <span class="text-primary"> • </span>
                          <span>Best finish<br /></span>
                        </div>
                        <div class="mb-2 text-muted small">
                          <span>Unique design</span>
                          <span class="text-primary"> • </span>
                          <span>For men</span>
                          <span class="text-primary"> • </span>
                          <span>Casual<br /></span>
                        </div>
                        <p class="text-truncate mb-4 mb-md-0">
                          There are many variations of passages of Lorem Ipsum available, but the
                          majority have suffered alteration in some form, by injected humour, or
                          randomised words which don't look even slightly believable.
                        </p>
                      </div>
                      <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div class="d-flex flex-row align-items-center mb-1">
                          <h4 class="mb-1 me-1">$13.99</h4>
                          <span class="text-danger"><s>$20.99</s></span>
                        </div>
                        <h6 class="text-success">Free shipping</h6>
                        <div class="d-flex flex-column mt-4">
                          <button class="btn btn-primary btn-sm" type="button">Details</button>
                          <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                            Add to wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center mb-3">
              <div class="col-md-12 col-xl-10">
                <div class="card shadow-0 border rounded-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                            class="w-100" />
                          <a href="#!">
                            <div class="hover-overlay">
                              <div class="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6 col-xl-6">
                        <h5>Quant olap shirts</h5>
                        <div class="d-flex flex-row">
                          <div class="text-danger mb-1 me-2">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <span>289</span>
                        </div>
                        <div class="mt-1 mb-0 text-muted small">
                          <span>100% cotton</span>
                          <span class="text-primary"> • </span>
                          <span>Light weight</span>
                          <span class="text-primary"> • </span>
                          <span>Best finish<br /></span>
                        </div>
                        <div class="mb-2 text-muted small">
                          <span>Unique design</span>
                          <span class="text-primary"> • </span>
                          <span>For men</span>
                          <span class="text-primary"> • </span>
                          <span>Casual<br /></span>
                        </div>
                        <p class="text-truncate mb-4 mb-md-0">
                          There are many variations of passages of Lorem Ipsum available, but the
                          majority have suffered alteration in some form, by injected humour, or
                          randomised words which don't look even slightly believable.
                        </p>
                      </div>
                      <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div class="d-flex flex-row align-items-center mb-1">
                          <h4 class="mb-1 me-1">$14.99</h4>
                          <span class="text-danger"><s>$21.99</s></span>
                        </div>
                        <h6 class="text-success">Free shipping</h6>
                        <div class="d-flex flex-column mt-4">
                          <button class="btn btn-primary btn-sm" type="button">Details</button>
                          <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                            Add to wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-12 col-xl-10">
                <div class="card shadow-0 border rounded-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                            class="w-100" />
                          <a href="#!">
                            <div class="hover-overlay">
                              <div class="mask" style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}></div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-6 col-xl-6">
                        <h5>Quant ruybi shirts</h5>
                        <div class="d-flex flex-row">
                          <div class="text-danger mb-1 me-2">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <span>145</span>
                        </div>
                        <div class="mt-1 mb-0 text-muted small">
                          <span>100% cotton</span>
                          <span class="text-primary"> • </span>
                          <span>Light weight</span>
                          <span class="text-primary"> • </span>
                          <span>Best finish<br /></span>
                        </div>
                        <div class="mb-2 text-muted small">
                          <span>Unique design</span>
                          <span class="text-primary"> • </span>
                          <span>For women</span>
                          <span class="text-primary"> • </span>
                          <span>Casual<br /></span>
                        </div>
                        <p class="text-truncate mb-4 mb-md-0">
                          There are many variations of passages of Lorem Ipsum available, but the
                          majority have suffered alteration in some form, by injected humour, or
                          randomised words which don't look even slightly believable.
                        </p>
                      </div>
                      <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div class="d-flex flex-row align-items-center mb-1">
                          <h4 class="mb-1 me-1">$17.99</h4>
                          <span class="text-danger"><s>$25.99</s></span>
                        </div>
                        <h6 class="text-success">Free shipping</h6>
                        <div class="d-flex flex-column mt-4">
                          <button class="btn btn-primary btn-sm" type="button">Details</button>
                          <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                            Add to wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <iframe
          width="853"
          height="480"
          src='https://youtube.com/embed/KcpllO6AXio'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube" />
      </Container>


    </div>
  )
}

export default Main