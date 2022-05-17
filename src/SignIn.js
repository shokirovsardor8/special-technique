import React, { render, useState } from "react";
import { connect } from "react-redux";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useEffect, useRef } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signIn } from "./reducers/Users";
import { ToastContainer, toast } from "react-toastify";
import Logo_Dark from "./images/logo.png";

function SignIn({ token, signIn, user, error }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const history = useNavigate();

  function submitFunction(e) {
    e.preventDefault();
    var data = {
      login: e.target.login.value,
      password: e.target.password.value,
    };
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
    if (token.role === "ROLE_ADMIN") {
      history("/admin/company");
    } else if (token.role === "ROLE_RAHBAR") {
      history("/leader");
    } else if (token.role === "ROLE_TEXNOLOG") {
      history("/texnolog/account");
    } else if (token.role === "ROLE_HAMSHIRA" || token.role === "ROLE_OSHPAZ" || token.role === "ROLE_BOG`CHA MUDIRASI") {
      history("stuff/myHome");
    } else if (token.role === "ROLE_OMBORCHI") {
      history("warehouseman/company");
    } else if (token.role === "ROLE_TA`MINOTCHI") {
      history("supplier/company");
    } else if (token.role === "ROLE_BUXGALTER") {
      history("/bugaltir")
    }
  }

  [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  ));

  return (
    <>
      <section class="vh-100" style={{ backgroundColor: '#508bfc' }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <form class="card-body p-5 text-center" onSubmit={submitFunction}>

                  <h3 class="mb-5">Sign in</h3>

                  <div class="form-outline mb-4">
                    <input
                      minLength={5}
                      maxLength={22}
                      required
                      type="text"
                      id="login"
                      class="form-control form-control-lg"
                      name='login'
                      placeholder='Login' />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      class="form-control form-control-lg"
                      name='password'
                      placeholder='Parol'
                      minLength={8}
                      maxLength={22}
                      required
                    />
                  </div>


                  <div class="form-check d-flex justify-content-start mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form1Example3" />
                    <label class="form-check-label" for="form1Example3"> Remember password </label>
                  </div>

                  <button class="btn btn-primary btn-lg btn-block w-100" type="submit">Login</button>

                  <hr class="my-4" />

                  {/* <button class="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;"
                                    type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
                                <button class="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;"
                                    type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button> */}

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
