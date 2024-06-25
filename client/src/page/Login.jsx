import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLoginAdminMutation } from '../redux/apis/authApi'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [login, { isSuccess, isError, isLoading, error }] = useLoginAdminMutation()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup.string().required("Enter email"),
            password: yup.string().required("Enter password"),
        }),
        onSubmit: (values, { resetForm }) => {
            login(values)
            resetForm()
        }
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("Login Success")
            navigate("/admin/dashboard")
        }
    }, [isSuccess])
    return <>
        <div className='flex justify-center items-center mt-20'>
            <div className="card card-compact w-96 bg-white shadow-xl">
                <h1 className='font-bold text-center text-black text-xl p-2 bg-slate-500 rounded-md'>Login</h1>
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            {...formik.getFieldProps("email")}
                            type="text"
                            name='email'
                            placeholder="Enter email"
                            className={`input text-black placeholder:text-black input-bordered bg-white w-full my-2 ${formik.errors.email && formik.touched.email ? "input-error" : "border-green-500"}`}
                        />
                        {formik.errors.email
                            && formik.touched.email
                            && <div className='text-red-500 font-bold'>Enter Email</div>}
                        <input
                            {...formik.getFieldProps("password")}
                            type="password"
                            name='password'
                            placeholder="Enter password"
                            className={`input text-black placeholder:text-black input-bordered bg-white w-full my-2 ${formik.errors.password && formik.touched.password ? "input-error" : "border-green-500"}`}
                        />
                        {formik.errors.password
                            && formik.touched.password
                            && <div className='text-red-500 font-bold'>Enter Password</div>}
                        <button type='submit' className="btn btn-primary w-full">{isLoading ? <span className="loading loading-spinner loading-lg"></span> : "Login"}</button>
                        <h1 className='text-black mt-5 font-bold text-center'>Don't have an Account? <Link className='underline text-blue-900 cursor-pointer' to='/'>Register</Link></h1>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Login