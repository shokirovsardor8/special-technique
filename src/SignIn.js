import React, { render, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "./reducers/Users";
import { ToastContainer, toast } from "react-toastify";
import { getproduct } from "./reducers/ProductReducer";

function SignIn({ token, signIn, user, error }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useNavigate();


  const dispatch = useDispatch();

  


  function submitFunction(e) {
    e.preventDefault();
    var data = {
      login: e.target.login.value,
      password: e.target.password.value,
    };
    // console.log(data, 'data');
    signIn(data);
  }

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      use();
    }
  }, [token]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      toast.error(error?.username);
    }
  }, [error]);

  function use() {
    if (token?.success === true) {
      saveToken();
    }
  }

  function saveToken() {
    localStorage.setItem("Authorization", token.token);
    localStorage.setItem("role", token.role);
    localStorage.setItem("id", token.id);
    if (token.role === "ADMIN") {
      history("/");
    }
  }

  return (
    <>
<ToastContainer/>
      <section className="vh-100 bg-light">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <form className="card-body p-3 text-center" onSubmit={submitFunction}>

                  <h3 className="mb-5">Tizimga kirish</h3>

                  <div className="form-outline mb-4">
                    <input
                      // minLength={5}
                      // maxLength={22}
                      required
                      type="text"
                      id="login"
                      className="form-control form-control-lg swiper-slide-shadow"
                      name='login'
                      placeholder='Login' />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control form-control-lg"
                      name='password'
                      placeholder='Parol'
                      // minLength={8}
                      // maxLength={22}
                      required
                    />
                  </div>

                  <button className="btn btn-success btn-lg btn-block w-100" type="submit">Login</button>

                  <hr className="my-4" />
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default connect(
  ({ users }) => {
    return {
      users: users.user,
      token: users.token,
      result: users.result,
      error: users.error,
    };
  },
  { signIn }
)(SignIn);
