import React, { useEffect, useRef, useState } from 'react'
import './ProductInfo.css'
import { Button, Carousel, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addproductImage, deleteproduct, deleteproductImage, editproduct, getproduct } from '../reducers/ProductReducer'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function ProductInfo() {

    const [product, setProduct] = useState([])

    const firstUpdate = useRef(false);
    const selector = useSelector(state => state.product);
    const dispatch = useDispatch();
    const pathname = window.location.pathname
    const [serviceList, setServiceList] = useState([]);
    const history = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setServiceList([{ name: "", value: "" }])
        setShow(false);
    }
    const handleShow = () => {
        if (product?.featuresDtoList?.length !== 0) {
            setServiceList(product?.featuresDtoList)
        } else {
            setServiceList([[...serviceList], { name: "", value: "" }])
            console.log([...serviceList]);
        }
        setServiceList(product?.featuresDtoList !== [] ? product?.featuresDtoList : [{ name: "", value: "" }]);
        // console.log(product?.featuresDtoList, 'product?.featuresDtoList');
        // console.log(serviceList, 'serviceList');
        setShow(true);
    }




    useEffect(() => {
        setProduct(selector?.product)

    }, [selector?.product])

    useEffect(() => {
        if (firstUpdate.current) {
            toast.success(selector?.result?.message);
            dispatch(getproduct(pathname.substring(pathname.lastIndexOf('/') + 1)))
        }
    }, [selector?.result])



    useEffect(() => {
        dispatch(getproduct(pathname.substring(pathname.lastIndexOf('/') + 1)))
        firstUpdate.current = true;
    }, [])


    const handleServiceChange1 = (e, index) => {
        let { name, value } = e.target;
        let list = [...serviceList];
        let element = list[index];
        element = { ...element, [name]: value };
        list[index] = element;
        setServiceList(list)
    };
    const handleServiceChange2 = (e, index) => {
        let { name, value } = e.target;
        let list = [...serviceList];
        let element = list[index];
        element = { ...element, [name]: value };
        list[index] = element;
        setServiceList(list)
    };

    const handleServiceRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    };

    const handleServiceAdd = () => {
        setServiceList([...serviceList, { name: "", value: "" }]);
    };

    const handleEditProduct = (e) => {
        e.preventDefault();
        setServiceList(serviceList?.filter(item => item.name !== '' && item.value !== ''));
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
        dispatch(editproduct(product.id, data))
        handleClose();
    }

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => {
        setImg('')
        setShow1(false);
    }
    const handleShow1 = () => {
        setShow1(true);
    }


    const uploadAction = async (e) => {
        e.preventDefault();
        var data = new FormData();
        var imagedata = document.getElementById('image').files[0];
        data.append("file", imagedata);

        const res = await axios.post("https://agromashelit.uz/agromash/api/attachment/uploadSystem/" + product.id + "/" + e.target.isMain.value, data, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: localStorage.getItem('Authorization'),
                role: localStorage.getItem('role'),
                id: localStorage.getItem('id')
            }
        });
        if (res.data.state) {
            toast.success("rasm muvaffaqqiyatli qo'shildi");
            dispatch(getproduct(pathname.substring(pathname.lastIndexOf('/') + 1)));
        }
        handleClose1();


    }
    const [img, setImg] = useState('');

    const showImage = e => {
        setImg(URL.createObjectURL(e.target.files[0]))
    }

    const handleDelImage = async (id) => {
        // dispatch(deleteproductImage(id))
        // if (useSelector(state => state.product.result.state)) {
        //     toast.success(useSelector(state => state.product.result.message));
        //     dispatch(getproduct(pathname.substring(pathname.lastIndexOf('/') + 1)));
        // }
        const res = await axios.delete("https://agromashelit.uz/agromash/api/attachment/delete/" + id, {
            headers: {
                Authorization: localStorage.getItem('Authorization'),
                role: localStorage.getItem('role'),
                id: localStorage.getItem('id'),
            }
        })
        if (res.data.state) {
            toast.success("rasm muvaffaqqiyatli o'chirildi");
            dispatch(getproduct(pathname.substring(pathname.lastIndexOf('/') + 1)));
        }

    }

    const deleteProduct = async () => {
        const res = await axios.delete("https://agromashelit.uz/agromash/api/product/delete/" + product.id, {
            headers: {
                Authorization: localStorage.getItem('Authorization'),
                role: localStorage.getItem('role'),
                id: localStorage.getItem('id'),
            }
        })
        if (res.data.state) {
            toast.success("mahsulot muvaffaqqiyatli o'chirildi");
            history('/' + product.categoryId)
        }
    }


    return (
        <>
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Rasm qo'shish</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => uploadAction(e)} id='add-picture'>
                        <img src={img} alt="" className='card-img w-50 mx-auto d-block mb-3' />
                        <div classname="form-outline mb-4">
                            <input type={'file'} className="form-control" name='file' onChange={showImage} id='image' />
                            <label className="form-label">Rasm tanlang</label>
                        </div>
                        <div classname="form-outline mb-4">
                            <input type={'checkbox'} className="form-check-input me-1" name='isMain' id='checkk' />
                            <label className="form-label" htmlFor='checkk'>Asosiy qilib belgilash</label>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose1} type='submit' form='add-picture'>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show} onHide={handleClose}>
                <form id='add-product' onSubmit={handleEditProduct}>
                    <Modal.Header closeButton>
                        <Modal.Title>Tahrirlash</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="form-outline mb-4">
                            <input type="text" id="form6Example4" className="form-control" name='pr_name' required defaultValue={product?.name} />
                            <label className="form-label" htmlFor="form6Example4">Nomi</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="number" className="form-control" name='price' required defaultValue={product?.price} />
                            <label className="form-label" htmlFor="form6Example6" >Narxi</label>
                        </div>

                        <div className="form-outline mb-4">
                            <select name="categoryId" className='form-control' defaultValue={product?.categoryId}>
                                {useSelector(state => state.category.category).map((item, index) =>
                                    <option key={index} value={item.id}>{item.name}</option>
                                )}

                            </select>

                            <label className="form-label" htmlFor="form6Example6">Kategoriyalar</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" className="form-control" name='brand' defaultValue={product?.brand} />
                            <label className="form-label" htmlFor="form6Example6">Brend nomi</label>
                        </div>
                        <div className="form-outline mb-4">
                            <input type="text" id="form6Example6" className="form-control" name='link' defaultValue={product?.link} />
                            <label className="form-label" htmlFor="form6Example6" >Yutub linki:</label>
                        </div>
                        {serviceList?.map((singleService, index) => (
                            <div className="form-outline mb-4" key={index}>
                                <div className="input-group mb-3">

                                    <input
                                        type="text" className="form-control"
                                        placeholder="rangi"
                                        aria-label="" aria-describedby="basic-addon1"
                                        name="name"
                                        id="service"
                                        defaultValue={singleService?.name}
                                        onChange={(e) => handleServiceChange1(e, index)}
                                    />
                                    <input
                                        type="text" className="form-control"
                                        placeholder="qora"
                                        aria-label="" aria-describedby="basic-addon1"
                                        name="value"
                                        id="service"
                                        defaultValue={singleService?.value}
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
                            className="btn btn-success form-outline mb-4"
                        >
                            <span>Xususiyat qo'shish</span>
                        </button>
                        <div className="form-outline mb-4">
                            <textarea className="form-control" id="form6Example7" rows="4" name='description' defaultValue={product?.description} />
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
            <div className="container mt-0">
                <div className="card bg-light p-0">
                    <div className='row'>
                        <div className='col-lg-6 border p-3 bg-light'>

                            <Carousel interval={1000000}>
                                {product?.listBytes?.map((item, index) => {
                                    return (
                                        <Carousel.Item className='ramka border-4' key={index} interval={100000}>

                                            <img
                                                className="d-block img"
                                                src={"https://agromashelit.uz/agromash/api/attachment/downloadSytem/" + item?.id}
                                                alt="First slide"
                                            />
                                            {localStorage.getItem('role') === 'ADMIN' && (
                                                <div className='carousel-caption'>
                                                    <button className='btn h-0 btn-danger delete-img' onClick={() => handleDelImage(item?.id)}>
                                                        O'chirish
                                                    </button>
                                                </div>
                                            )}
                                        </Carousel.Item>
                                    )
                                }
                                )}

                            </Carousel>
                            {localStorage.getItem('role') === 'ADMIN' && (
                                <button className="btn btn-success mx-auto w-100 mt-4" onClick={handleShow1} style={{ margin: "0 auto" }}>
                                    Rasm qo'shish
                                </button>
                            )}
                        </div>

                        <div className='col-lg-6 p-0 bg-white '>
                            <div className='card-body bg-white m-3 bg-danger'>
                                <h2 className='card-title mb-4 text-uppercase' onClick={() => dispatch(getproduct())}>
                                    {product?.name}
                                </h2>
                                <div className='card-text'>
                                    <h5>Narxi: &nbsp;<span className='text-danger h3'>{product?.price} so'm</span></h5>
                                    <hr />

                                    <div className="mt-1 mb-0 text-muted small">
                                        {product?.brand !== "" &&
                                            <span className='btn btn-sm btn-outline-light shadow-none text-secondary border m-1'>Brend nomi: {product?.brand}</span>}
                                        <br />

                                        {product?.featuresDtoList?.map((item, index) =>
                                            <div key={index}>
                                                <span className='btn btn-sm btn-outline-light shadow-none text-secondary border m-1'>{item?.name}: {item?.value}</span>
                                                <br />
                                            </div>

                                        )}
                                    </div>

                                    <br />

                                    <h4 className=''>tavsif</h4>
                                    <p className=''>{product?.description}</p>
                                    {product?.link !== "" &&
                                        <p className='mb-4'> <a href={product?.link} target={'_blank'} style={{ color: '#FF0000' }}>Batafsil video...</a></p>
                                    }
                                    {localStorage.getItem('role') === 'ADMIN' ?
                                        <>
                                            <button className='btn-sm btn-warning btn-block float-end mb-3'
                                                onClick={handleShow}>
                                                Tahrirlash</button>
                                            <button className='btn-sm btn-danger btn-block float-end mb-3 me-2'
                                                onClick={deleteProduct}>
                                                Mahsulotni o'chirish</button>
                                        </>
                                        :
                                        <a href='tel:+998904708181' className='btn btn-success btn-block float-end mb-5'>Qo'ng'iroq qilish</a>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProductInfo