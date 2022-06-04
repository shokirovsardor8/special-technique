import React from 'react'
import {Route, Routes} from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductInfo from './pages/ProductInfo';
import MyNavbar from './pages/MyNavbar';
import Footer from './pages/Footer';
import EditCategory from './pages/EditCategory';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import About from './pages/About';
function Main() {
    return (
        <div>
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/products/" element={<ProductList />} /> */}
                <Route path="/product/*" element={<ProductInfo />} />
                {/* <Route path='/category/*' element={<ProductList />} /> */}
                <Route path=':id' element={<ProductList />} />
                <Route path='/edit/category/' element={<EditCategory />} />
                <Route path='/search/*' element={<SearchResult/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
            {/* {localStorage.getItem("role")!=="ADMIN"&& */}
            <Footer />
        </div>
    )
}

export default Main