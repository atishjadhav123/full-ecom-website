import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useRegisterAdminMutation } from '../redux/apis/authApi'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [register, { isSuccess, isError, error, isLoading }] = useRegisterAdminMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            email: yup.string().required("Enter email"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            register(values)
            resetForm()
        }
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("Register Success")
            navigate("/login")
        }
    }, [isSuccess])
    return <>
        <div className='flex justify-center items-center mt-20'>
            <div className="card card-compact w-96 bg-white shadow-xl">
                <h1 className='font-bold text-center text-black text-xl p-2 bg-slate-500 rounded-md'>Register</h1>
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            {...formik.getFieldProps("name")}
                            type="text"
                            name='name'
                            placeholder="Enter name"
                            className={`input placeholder:text-black input-bordered text-black font-semibold  bg-white w-full my-2 ${formik.errors.name && formik.touched.name ? "input-error" : "border-green-500"}`}
                        />
                        {formik.errors.name
                            && formik.touched.name
                            && <div className='text-red-500 font-bold'>Enter Name</div>}
                        <input
                            {...formik.getFieldProps("email")}
                            type="text"
                            name='email'
                            placeholder="Enter email"
                            className={`input placeholder:text-black input-bordered text-black font-semibold  bg-white w-full my-2 ${formik.errors.email && formik.touched.email ? "input-error" : "border-green-500"}`}
                        />
                        {formik.errors.email
                            && formik.touched.email
                            && <div className='text-red-500 font-bold'>Enter Email</div>}
                        <input
                            {...formik.getFieldProps("password")}
                            type="password"
                            name='password'
                            placeholder="Enter password"
                            className={`input placeholder:text-black input-bordered text-black font-semibold  bg-white w-full my-2 ${formik.errors.password && formik.touched.password ? "input-error" : "border-green-500"}`}
                        />
                        {formik.errors.password &&
                            formik.touched.password
                            && <div className='text-red-500 font-bold'>Enter Password</div>}
                        <button type='submit' className="btn btn-primary w-full">{isLoading ? <span className="loading loading-spinner loading-lg"></span> : "Register"}</button>
                        <h1 className='text-black text-center font-bold mt-5'>Already have an Account? <Link className='text-blue-700 font-bold cursor-pointer underline' to='/login'>Login</Link></h1>
                    </form>
                </div>
            </div >
        </div >
    </>
}

export default Register