// import { useFormik } from 'formik'
// import * as Yup from 'yup';
// import React from 'react'
// import "./Form.css";
// import { toast, ToastContainer } from 'react-toastify';
// import { Zoom } from 'react-toastify/unstyled';

// const Form = () => {

//     

//     const formik = useFormik({
//         initialValues: {
//             name: "",
//             email: "",
//             password: ""
//         },
//         validationSchema: Yup.object().shape({
//             name: Yup.string()
//                 .required("Name is Required"),
//             email: Yup.string()
//                 .email("Enter Valid Email Address")
//                 .required("Email is Required"),
//             password: Yup.string()
//                 .matches(passRules, { message: "Enter Strong password" })
//                 .required("Password is Required")
//         }),

//         onSubmit: (values) => {
//             toast.success("Form Submitted", {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: false,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//                 transition: Zoom,
//             })
//         }
//     })

//     return (
//         <div className='container'>
//             <div className='row'>
//                 <h1>FORM</h1>

//                 <form onSubmit={formik.handleSubmit}>
//                     <input type="text" id='name' name='name' placeholder='Enter your name' onChange={formik.handleChange} value={formik.values.name} className='mt-4' />
//                     {formik.touched.name && formik.errors.name ? (
//                         <div className='text-danger'>{formik.errors.name}</div>
//                     ) : null}

//                     <input type="email" id='email' name='email' placeholder='Enter your Email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='mt-4' />
//                     {formik.touched.email && formik.errors.email ? (
//                         <div className='text-danger'>{formik.errors.email}</div>
//                     ) : null}

//                     <input type="password" id='password' name='password' placeholder='Enter your Password' onChange={formik.handleChange} value={formik.values.password} className='mt-4' />
//                     {formik.touched.password && formik.errors.password ? (
//                         <div className='text-danger'>{formik.errors.password}</div>
//                     ) : null}

//                     <button type='submit' className='mt-4 rounded'>Submit</button>
//                     <ToastContainer />
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Form

import { useFormik } from 'formik'
import * as Yup from "yup";
import "./Form.css"
import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
// import { ToastContainer } from 'react-bootstrap';
import { Zoom } from 'react-toastify/unstyled';

const passRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },

        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required("Name is Required"),
            email: Yup.string()
                .email("Check Email format")
                .required("Email is required"),
            password: Yup.string()
                .matches(passRules, { message: "Enter Strong password" })
                .required("Password is Required")
        }),

        onSubmit: (values) => {
            toast.success("Form Submitted", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            })
        }
    })

    return (
        <div className='container'>
            <div className='row'>
                <h1>FORM</h1>

                <form onSubmit={formik.handleSubmit}>
                    <input type="text" name="name" id="name" placeholder='Enter your name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='mt-4' />
                    {formik.touched.name && formik.errors.name ? <div className='text-danger'>{formik.errors.name}</div> : null}

                    <input type="email" name="email" id="email" placeholder='Enter your email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='mt-4' />
                    {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}

                    <input type="password" name="password" id="password" placeholder='Enter your password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='mt-4' />
                    {formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}

                    <button type='submit' className='mt-4'>Submit</button>

                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Form