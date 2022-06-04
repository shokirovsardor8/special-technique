
import React, { useEffect, useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { getAllCategory, editCategory, addCategory, deleteCategory, clearCategory } from '../reducers/CategoryReducer';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function EditCategory() {

    const [categoryList, setCategoryList] = useState([])
    const [category, setCategory] = useState({})
    const [type, setType] = useState("");
    const update = useRef(false);

    const [serviceList, setServiceList] = useState();

    const selector = useSelector(state => state.category);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);


    const handleClose = () => {
        setCategory({})
        setShow(false);

    }
    const handleShow = (category, type) => {
        setCategory(category)
        setType(type)
        setShow(true);

    }

    useEffect(() => {
        setCategoryList(selector?.category)
        setServiceList(selector?.category)

    }, [selector?.category])

    useEffect(() => {
        if (update.current) {
            toast.success(selector?.result?.message);
            dispatch(getAllCategory())
        }
    }, [selector?.result])



    useEffect(() => {
        dispatch(getAllCategory())
        update.current = true;
    }, [])


    const handleEdit = () => {
        var data = {
            "name": category.name,
        }
        dispatch(editCategory(category.id, data))
        handleClose()
    }
    const handleAdd = () => {
        dispatch(addCategory({ "name": category.name }))
        dispatch(getAllCategory())
        handleClose()
    }
    const handleDelete = () => {
        dispatch(deleteCategory(category.id))
        handleClose()
    }
    return (
        <div>
            <ToastContainer />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{type === "ADD" ? "Kategoriya qo'shish" : type === "EDIT" ? "Tahrirlash" : "Kategoriyani O'chirish"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {type === "ADD" || type === "EDIT" ?
                        <form id='edit-category '>
                            <label className="form-label" for="form6Example4">Kategoriya nomi:</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue={category?.name}
                                onChange={(e) => setCategory({ ...category, name: e.target.value })}
                            />
                        </form>
                        : <p>ESLATMA</p>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Bekor qilish
                    </Button>

                    <Button variant="success" onClick={type === "ADD" ? handleAdd : type === "EDIT" ? handleEdit : handleDelete} form='edit-category' type='submit'>
                        Saqlash
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="container">
                <h2 className='text-center mt-3 mb-3'>Kategoriyalar</h2>
                {Array.isArray(categoryList) && categoryList?.map((item, index) => (
                    <div className="form-outline mb-4" key={index}>
                        <div className="input-group mb-3">
                            <div class="input-group-prepend" style={{ width: '45px' }}>
                                <span class="input-group-text text-center d-block">{index + 1}</span>
                            </div>
                            <input
                                type="text" className="form-control"
                                name="name"
                                id="service"
                                value={item.name}
                                disabled
                            />
                            <Link to={'/' + item?.id} className="input-group-prepend">
                                <button className="btn btn-success " onClick={() => handleShow(item, "EDIT")} type="button" >Mahsulotlar</button>
                            </Link>
                            <div className="input-group-prepend">
                                <button className="btn btn-warning " onClick={() => handleShow(item, "EDIT")} type="button" >Tahrirlash</button>
                            </div>

                            <div className="input-group-prepend">
                                <button className="btn btn-danger" onClick={() => handleShow(item, "DELETE")} type="button">O'chirish</button>
                            </div>

                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => handleShow({}, "ADD")}
                    className="btn btn-success mb-5"
                >
                    Kategoriya qo'shish
                </button>
            </div>
        </div>
    )
}

export default EditCategory