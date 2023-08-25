// import React from "react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
const Contact = () => {
  const [emailError, setEmailError] = useState("");
  // const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :");
    } else {
      setEmailError("Please Enter a valid Email!");
    }
  };
  // function EmailValidation()
  // const [error,setError]=useState(false)
  // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  // const onChange =(val) =>{
  //     if(val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
  //         setError(false)
  //     }else{
  //         setError(true)
  //     }
  // }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lya1ogx",
        "template_382h54j",
        form.current,
        "CmBiBF4zz_NG6oTJR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container" style={{ marginTop: "200px" }} id="Contact">
      {/* <div className="row align-items-center"> */}
      <div className="text-white text-center"></div>
      {/* <p >Need Good Developer?</p> */}
      <h1 className="text-white text-center">
        <strong>Get In Touch</strong>
      </h1>

      <div className="col mt-4">
        <div
          className="card "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          {" "}
          {/*style={{ width: "40rem" }} */}
          <div className="card-body" style={{ margin: "32px" }}>
            <form
              className="row g-3"
              ref={form}
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="col">
                <label htmlFor="input" className="form-label text-white">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  aria-label="First name"
                  className="form-control bg-dark"
                  // id="validationServer01"
                  // value="Mark"
                  // required
                />
              </div>
              <div className="col">
                <label htmlFor="input" className="form-label text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="form-control bg-dark"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label text-white">
                  E-mail
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control bg-dark"
                  id="inputEmail4"
                  placeholder="username@mail.com"
                  onChange={(e) => validateEmail(e)}
                />

                <span style={{ fontWeight: "bold", color: "green" }}>
                  {emailError}
                </span>

                {/* else {
                        <span style={{ fontWeight: 'bold', color: 'red' }}>{emailError}</span>

} */}

                {/* {error? <p style={{color:"red"}}>Enter valid Email</p>:''} */}
              </div>
              <div className="col">
                <label htmlFor="input" className="form-label text-white">
                  Describe Your Project
                </label>
                <input
                  type="text"
                  name="message"
                  className="form-control bg-dark"
                  placeholder="Describe Your Project"
                  aria-label="Project"
                />
              </div>
              <div className="container d-flex justify-content-center">
                <button className="btn btn-success mt-3" type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Contact;
