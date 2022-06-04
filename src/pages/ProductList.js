import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Modal, ToastContainer } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addproduct, getproductList } from '../reducers/ProductReducer'


function ProductList(props) {


    const pathname = window.location.pathname
    const [show, setShow] = useState(false);
    const [param, setParam] = useState(useParams());
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const firstUpdate = useRef(false);
    const [productList, setProductList] = useState(null);
    const categorySelector = useSelector(state => state.category.category)
    const [category, setCategory] = useState(categorySelector.find(item => item.id === parseInt(pathname.substring(pathname.lastIndexOf('/') + 1))))

    const selector = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        setProductList(selector?.product)
    }, [selector?.product])

    useEffect(() => {
        if (firstUpdate.current) {
            if (selector?.result?.state) {
                toast.success("Mahsulot qo'shildi");
            }
            getPageProductList(0)
        }
    }, [selector?.result])

    useEffect(() => {
        getPageProductList(0)
        setCategory(categorySelector.find(item => item.id === parseInt(pathname.substring(pathname.lastIndexOf('/') + 1))))
    }, [useParams()])

    useEffect(() => {
        getPageProductList(0)
        firstUpdate.current = true;
    }, [])

    const [serviceList, setServiceList] = useState([{ name: "", value: "" }]);

    const handleServiceChange1 = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    };
    const handleServiceChange2 = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    };

    const handleServiceRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    };

    const handleServiceAdd = () => {
        setServiceList([...serviceList, { name: "", value: "" }]);
    };


    const handleAddProduct = (e) => {
        e.preventDefault();
        setServiceList(serviceList.filter(item => item.name !== '' && item.value !== ''));
        let data = {
            name: e.target.pr_name.value,
            price: e.target.price.value,
            description: e.target.description.value,
            categoryId: e.target.categoryId.value,
            link: e.target.link.value,
            brand: e.target.brand.value,
            featuresDtoList: [...serviceList]
        }

        // console.log(data, 'data');
        dispatch(addproduct(data))
        handleClose();
    }
    const getPageProductList = (page) => {
        dispatch(getproductList(pathname.substring(pathname.lastIndexOf('/') + 1), { 'page': page, 'size': '16' }))
    }
    const pagination = () => {
        let rows = [];
        for (let i = 0; i < productList?.totalPages; i++) {
            rows.push(
                <li className="page-item page-link">
                    <a onClick={() => getPageProductList(i)}>{i + 1}</a>
                </li>
            )
        }
        return rows;
    }
    return (
        <div>



            <Modal show={show} onHide={handleClose}>
                <form id='add-product' onSubmit={handleAddProduct}>
                    <Modal.Header closeButton>
                        <Modal.Title>Mahsulot qo'shish</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="form-outline mb-4">
                            <input type="text" id="form6Example4" className="form-control" name='pr_name' required />
                            <label className="form-label" htmlFor="form6Example4">Nomi</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="number" className="form-control" name='price' required />
                            <label className="form-label" htmlFor="form6Example6">Narxi</label>
                        </div>

                        <div className="form-outline mb-4">
                            <select name="categoryId" className='form-control' defaultValue={category?.id}>
                                {useSelector(state => state.category.category).map((item, index) =>
                                    <option key={index} value={item.id}>{item.name}</option>
                                )}

                            </select>

                            <label className="form-label" htmlFor="form6Example6">Kategoriyalar</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" className="form-control" name='brand' />
                            <label className="form-label" htmlFor="form6Example6">Brend nomi</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" id="form6Example6" className="form-control" name='link' />
                            <label className="form-label" htmlFor="form6Example6">Yutub linki:</label>
                        </div>
                        {serviceList.map((singleService, index) => (
                            <div className="form-outline mb-4" key={index}>
                                <div className="input-group mb-3">

                                    <input
                                        type="text" className="form-control"
                                        placeholder="rangi"
                                        aria-label="" aria-describedby="basic-addon1"
                                        name="name"
                                        id="service"
                                        onChange={(e) => handleServiceChange1(e, index)}
                                    />
                                    <input
                                        type="text" className="form-control"
                                        placeholder="qora"
                                        aria-label="" aria-describedby="basic-addon1"
                                        name="value"
                                        id="service"
                                        onChange={(e) => handleServiceChange2(e, index)}
                                    />

                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-danger" onClick={() => handleServiceRemove(index)} type="button">Olib tashlash</button>
                                    </div>

                                </div>

                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleServiceAdd}
                            className="btn btn-success form-outline mb-4">
                            <span>Xususiyat qo'shish</span>
                        </button>
                        <div className="form-outline mb-4">
                            <textarea className="form-control" id="form6Example7" rows="4" name='description' />
                            <label className="form-label" htmlFor="form6Example7">Qo'shimcha Ma'lumotlar</label>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Bekor qilish
                        </Button>
                        <Button variant="success" form='add-product' type='submit'>
                            Saqlash
                        </Button>
                    </Modal.Footer>
                </form>

            </Modal>

            <div className='bg-light pb-3'>

                <div className="container py-4">
                    <h2 className='mb-3 text-center'>{category?.name}</h2>
                    {localStorage.getItem('role') === 'ADMIN' ?
                        <button className="btn btn-success container mb-3 mt-0" onClick={handleShow}>
                            Mahsulot qo'shish
                        </button> : null}
                    <div xs={1} md={4} className="row g-4 ">
                        {productList?.content?.map((item1, index1) => (
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
                <div className=''>
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                        </li>
                        {pagination()}
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </div>
            </div >

        </div >
    )
}


export default ProductList