import React, { useEffect } from 'react'
import { Dropdown } from 'react-bootstrap'
import { AiFillInstagram, AiOutlineSearch } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { BiLogInCircle, BiLogOut } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../reducers/CategoryReducer'
import logo from '../images/logotip.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { getproductsearch } from '../reducers/ProductReducer'

function MyNavbar() {

  const [category, setCategory] = React.useState([]);
  const selector = useSelector(state => state.category);
  const dispatch = useDispatch();



  useEffect(() => {
    setCategory(selector?.category)
    console.log(selector, 'selector');
  }, [selector?.category])



  useEffect(() => {
    dispatch(getAllCategory())
  }, [])


  const history = useNavigate();

  function logout() {
    localStorage.removeItem("Authorization");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    history("/")
  }
  function pushLoginPage() {
    history("/login")
  }

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getproductsearch({ search: e.target.search.value }))
    history("/search", { search: e.target.search.value })
  }

  return (
    <>
      <nav className="navbar bg-white mb-0" style={{ zIndex: 1, background: "rgb(248, 249, 250, 1)" }}>
        <div className="container position-relative" >
          <div className='mb-4 mt-4 me-4' style={{ marginTop: '20px' }}>
            <Link className="navbar-brand h1 fw-bold me-0 text-success text-uppercase" to='/' style={{ fontSize: 30 }}>

              <img src={logo} width={280} style={{ height: 'auto', weight: '40px' }} />

            </Link>
            {localStorage.getItem("role") !== "ADMIN" ?
              <Link to='/about' className='me-4 ms-5 text-decoration-underline text-muted d-none d-sm-inline-block'>Biz haqimizda</Link>
              : null}
          </div>
          <div className='mb-3 mt-3'>
            <a href="https://t.me/agromash_elit" target={'_blank'} className="me-4 text-reset">
              <FaTelegramPlane />
            </a>
            <a href="https://www.youtube.com/channel/UC2kMDrHwJAKarYCeV9gE_wA" target="_blank" className="me-4 text-reset">
              <FaYoutube />
            </a>
            <a href="https://instagram.com/agromashelit" target="_blank" className="me-4 text-reset">
              <FaInstagram />
            </a>
          </div>
          {localStorage.getItem("role") === "ADMIN" ?
            // <div className='position-absolute d-flex flex-row mb-5' style={{ right: "10px", top: "18px", zIndex: 3 }}>

            //   <div className='d-flex flex-column'>
            //     <MdAccountCircle size={30} className='mx-auto' />
            //     <p className='text-center'>admin</p>
            //   </div>
            <button className='btn btn-outline-danger ms-4 h-25' onClick={logout}><BiLogOut /> Chiqish</button>
            :
            <form className="form-inline flex-fill" onSubmit={(e) => handleSearch(e)}>
              <div className='input-group'>

                <input
                  size={50}
                  type="search"
                  className="form-control"
                  placeholder="Qidirish"
                  name='search'
                />
                {/* <div class="input-group-append"> */}
                <button className='btn btn-success ' type="submit"
                ><AiOutlineSearch size={23} className="" /></button>
              </div>
            </form>
            // <button className='btn btn-success ms-4 position-absolute' onClick={pushLoginPage}
            //   style={{ right: "10px", top: "18px", zIndex: 3 }}
            // ><BiLogInCircle /> Kirish</button>

          }
          {/* <h1 className=''><AiFillInstagram/></h1> */}



        </div>
      </nav>

      <nav className="navbar navbar-expand navbar-light bg-white pt-0 shadow-sm" style={{ zIndex: 1 }}>
        <div className="container collapse navbar-collapse">
          <Dropdown>
            <Dropdown.Toggle variant="light shadow-none" id="dropdown-basic" className=''>
              Kategoriya
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {Array.isArray(category) && category?.map((item, index) =>
                <Dropdown.Item key={index}><Link to={"/" + item?.id} >{item.name}</Link></Dropdown.Item>
              )}

              {localStorage.getItem("role") === "ADMIN" ?
                <>
                  <Dropdown.Divider />
                  <Dropdown.Item><Link to={"/edit/category"} >O'zgartirish</Link></Dropdown.Item>
                </>
                : null}

            </Dropdown.Menu>
          </Dropdown>

          {/* <ul className="navbar-nav mt-2 mt-0 container d-none d-md-flex">
            {category.map((item, index) =>
              <li className="nav-item" key={index}>
                <Link to={"/" + item?.id} className="nav-link text-black" style={{ whiteSpace: 'nowrap' }}>{item.name}</Link>
              </li>
            )}
          </ul> */}
          {localStorage.getItem('role') === 'ADMIN' &&
            <button className='btn btn-warning ms-3'>
              <Link to={'edit/category'}>
                O'zgartirish
              </Link>
            </button>
          }
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={'auto'}
            className="mySwiper ms-3  d-none d-md-flex"
            navigation={true}
            modules={[Navigation]}>

            {Array.isArray(category) && category?.map((item, index) =>
              <SwiperSlide className='nav-item w-auto' key={index}>
                <Link to={"/" + item?.id} className="nav-link text-black">{item.name}</Link>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </nav>
    </>
  )
}

export default MyNavbar