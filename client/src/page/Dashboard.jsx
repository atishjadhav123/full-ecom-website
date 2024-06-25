import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLogoutAdminMutation } from '../redux/apis/authApi'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useActivateProductMutation, useAdminaddProductMutation, useAdmindeleteProductMutation, useAdminupdateProductMutation, useDeActivateProductMutation, useGetAllProductDetailsQuery, useGetAllProductsQuery } from '../redux/apis/adminApi'
import { formatProdErrorMessage } from '@reduxjs/toolkit'

const Dashboard = () => {
    const [selectedProdcut, setSelectedProdcut] = useState({})
    const [logout, { isSuccess, isLoading, isError, error }] = useLogoutAdminMutation()
    const { data } = useGetAllProductsQuery()
    const [UpdateProduct, { isSuccess: UpdateIsSuccess, isLoading: UpdateLoading }] = useAdminupdateProductMutation()
    const [DeleteProduct, { isSuccess: DeleteIsSuccess, isLoading: DeleteLoading }] = useAdmindeleteProductMutation()
    const [deactiveProduct, { isSuccess: activateSucces }] = useDeActivateProductMutation()
    const [activateProduct, { isSuccess: deactivateSucces }] = useActivateProductMutation()
    const { admin } = useSelector(state => state.auth)
    useEffect(() => {
        if (isSuccess) {
            toast.success("Logout Success")
        }
    }, [isSuccess])
    useEffect(() => {
        if (DeleteIsSuccess) {
            toast.error("Product Delete Success")
        }
    }, [DeleteIsSuccess])
    useEffect(() => {
        if (UpdateIsSuccess) {
            toast.success("Product Update Success", { theme: "dark" })
        }
    }, [UpdateIsSuccess])
    return <div>
        <div className='flex justify-between bg-white py-5 px-5'>
            <div className=''>
                {admin && <details className="dropdown w-52">
                    <summary className="m-1 btn text-slate-700 font-bold">{admin && admin.name}</summary>
                    <ul className="p-5 shadow menu dropdown-content z-[1] bg-slate-500 rounded-box w-72 ">
                        <li className='my-3'>
                            <p className='p-4 bg-slate-900 rounded-lg hover:text-black font-bold'>{admin.email}</p>
                        </li>
                        <li>
                            <button onClick={e => logout()} className="btn btn-error">{isLoading ? <span className="loading loading-spinner loading-lg"></span> : "LogOut"}</button>
                        </li>
                    </ul>
                </details>}
            </div>
            <div className=''>
                <button className="btn btn-primary" onClick={() => document.getElementById('addproduct').showModal()}>+ Add Product</button>
            </div>
            <dialog id="addproduct" className="modal">
                <div className="modal-box">
                    <ProductForm />
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </dialog>
        </div>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div className='p-20 overflow-y-hidden'>
            <table className="table my-10">
                <thead>
                    <tr>
                        <th className='border text-center text-black'>#</th>
                        <th className='border text-center text-black'>Name</th>
                        <th className='border text-center text-black'>Desc</th>
                        <th className='border text-center text-black'>Price</th>
                        <th className='border text-center text-black'>Stock</th>
                        <th className='border text-center text-black'>MRP</th>
                        <th className='border text-center text-black'>Images</th>
                        <th className='border text-center text-black'>Mode</th>
                        <th className='border text-center text-black'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(item => <tr className={item.active ? "bg-green-400" : "bg-red-400"} key={item._id}>
                            <td className='border text-center text-black'>{item._id}</td>
                            <td className='border text-center text-black'>{item.name}</td>
                            <td className='border text-center text-black'>{item.desc}</td>
                            <td className='border text-center text-black'>{item.price}</td>
                            <td className='border text-center text-black'>{item.stock}</td>
                            <td className='border text-center text-black'>{item.mrp}</td>
                            <td className='border text-center text-black'>
                                <img className='h-20 w-full' src={item.images} alt='' />
                            </td>
                            <td className='border text-center text-white'>
                                {item.active
                                    ? <button onClick={e => deactiveProduct(item)} className="btn btn-sm btn-error ms-3">deActivate</button>

                                    : <button onClick={e => activateProduct(item)} className="btn btn-sm btn-success">Activate</button>
                                }

                            </td>
                            <td className='border text-center text-white'>
                                <button
                                    className="btn btn-warning"
                                    onClick={() => {
                                        setSelectedProdcut(item)
                                        document.getElementById('editmodal').showModal()
                                    }}>
                                    Edit
                                </button>
                                <button onClick={e => DeleteProduct(item._id)} className="btn btn-error">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="editmodal" className="modal">
            <div className="modal-box">
                <h1 className='font-bold text-center  text-white'>Update Product</h1>
                <form>
                    <div>
                        <input
                            onChange={e => setSelectedProdcut({ ...selectedProdcut, name: e.target.value })}
                            value={selectedProdcut.name}
                            name='name'
                            type="text"
                            placeholder="Enter Name"
                            className='input input-bordered w-full my-2'
                        />
                    </div>
                    <div>
                        <input
                            onChange={e => setSelectedProdcut({ ...selectedProdcut, desc: e.target.value })}
                            value={selectedProdcut.desc}
                            name='desc'
                            type="text"
                            placeholder="Enter Desc"
                            className='input input-bordered w-full my-2'
                        />
                    </div>
                    <div>
                        <input
                            onChange={e => setSelectedProdcut({ ...selectedProdcut, price: e.target.value })}
                            value={selectedProdcut.price}
                            name='price'
                            type="number"
                            placeholder="Enter Price"
                            className='input input-bordered w-full my-2'
                        />

                    </div>
                    <div>
                        <input
                            onChange={e => setSelectedProdcut({ ...selectedProdcut, stock: e.target.value })}
                            value={selectedProdcut.stock}
                            name='stock'
                            type="number"
                            placeholder="Enter Product Stock"
                            className='input input-bordered w-full my-2'
                        />

                    </div>
                    <div>
                        <input
                            onChange={e => setSelectedProdcut({ ...selectedProdcut, mrp: e.target.value })}
                            value={selectedProdcut.mrp}
                            name='mrp'
                            type="number"
                            placeholder="Enter MRP"
                            className='input input-bordered w-full my-2'
                        />

                    </div>
                    <button onClick={e => UpdateProduct(selectedProdcut)} className="btn w-full btn-primary">{isLoading ? <span className="loading loading-spinner loading-lg"></span> : "Update Product"}</button>
                </form>
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>
        </dialog>
    </div>
}
const ProductForm = () => {
    const [AddProduct, { isSuccess, isLoading }] = useAdminaddProductMutation()
    const formik = useFormik({
        initialValues: {
            name: "",
            desc: "",
            price: "",
            stock: "",
            mrp: "",
            hero: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Name"),
            desc: yup.string().required("Enter Desc"),
            price: yup.string().required("Enter Price"),
            stock: yup.string().required("Enter Stock"),
            mrp: yup.string().required("Enter Mrp"),
            hero: yup.string().required("Enter images"),
        }),
        onSubmit: (values, { resetForm }) => {
            const fd = new FormData()
            for (const key in values) {
                fd.append(key, values[key])
            }
            AddProduct(fd)
            resetForm()
        }
    })
    useEffect(() => {
        if (isSuccess) {
            toast.success("Product Successfully Added")
        }
    }, [isSuccess])
    return <>
        <div>
            <div className="card card-compact w-full p-10 bg-base-100 shadow-xl">
                <h1 className='text-white font-bold text-center underline'>Add Products</h1>
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input
                                {...formik.getFieldProps("name")}
                                name='name'
                                type="text"
                                placeholder="Enter Name"
                                className={
                                    `input input-bordered w-full my-2
                                 ${formik.errors.name && formik.touched.name ? "input-error" : "border-black"}`
                                }
                            />
                            <div
                                className={`
                            font-semibold
                             ${formik.errors.name && formik.touched.name ? "text-red-600" : "text-green-600"}`
                                }>{formik.errors.name && formik.touched.name ? "Enter Name" : !formik.errors.name && formik.touched.name ? "Looks Good...!" : ""}</div>
                        </div>

                        <div>
                            <input
                                {...formik.getFieldProps("desc")}
                                name='desc'
                                type="text"
                                placeholder="Enter Desc"
                                className={`input input-bordered w-full my-2 ${formik.errors.desc && formik.touched.desc ? "input-error" : "border-black"}`}
                            />
                            <div
                                className={`
                            font-semibold
                             ${formik.errors.desc && formik.touched.desc ? "text-red-600" : "text-green-600"}`
                                }>{formik.errors.desc && formik.touched.desc ? "Enter Desc" : !formik.errors.desc && formik.touched.desc ? "Looks Good...!" : ""}</div>
                        </div>
                        <div>
                            <input
                                {...formik.getFieldProps("price")}
                                name='price'
                                type="number"
                                placeholder="Enter Price"
                                className={`input input-bordered w-full my-2 ${formik.errors.price && formik.touched.price ? "input-error" : "border-black"}`}
                            />
                            <div className={`font-semibold ${formik.errors.price && formik.touched.price ? "text-red-600" : "text-green-600"}`}>{formik.errors.price && formik.touched.price ? "Enter Price" : !formik.errors.price && formik.touched.price ? "Looks Good...!" : ""}</div>
                        </div>
                        <div>
                            <input
                                {...formik.getFieldProps("stock")}
                                name='stock'
                                type="number"
                                placeholder="Enter Product Stock"
                                className={`input input-bordered w-full my-2 ${formik.errors.stock && formik.touched.stock ? "input-error" : "border-black"}`}
                            />
                            <div className={`font-semibold ${formik.errors.stock && formik.touched.stock ? "text-red-600" : "text-green-600"}`}>{formik.errors.stock && formik.touched.stock ? "Enter Stock" : !formik.errors.stock && formik.touched.stock ? "Looks Good...!" : ""}</div>
                        </div>
                        <div>
                            <input
                                {...formik.getFieldProps("mrp")}
                                name='mrp'
                                type="number"
                                placeholder="Enter MRP"
                                className={`input input-bordered w-full my-2 ${formik.errors.mrp && formik.touched.mrp ? "input-error" : "border-black"}`}
                            />
                            <div className={`font-semibold ${formik.errors.mrp && formik.touched.mrp ? "text-red-600" : "text-green-600"}`}>{formik.errors.mrp && formik.touched.mrp ? "Enter MRP" : !formik.errors.mrp && formik.touched.mrp ? "Looks Good...!" : ""}</div>
                        </div>
                        <div>
                            <pre>{JSON.stringify(formik.values.hero)}</pre>
                            <input
                                // {...formik.getFieldProps("hero")}
                                onChange={e => formik.setFieldValue("hero", e.target.files[0])}
                                name='hero'
                                type="file"
                                className={`input input-bordered w-full my-2 ${formik.errors.hero && formik.touched.hero ? "input-error" : "border-black"}`}
                            />
                            <div className={`font-semibold ${formik.errors.hero && formik.touched.hero ? "text-red-600" : "text-green-600"}`}>{formik.errors.hero && formik.touched.hero ? "Upload Product Image" : !formik.errors.hero && formik.touched.hero ? "Looks Good...!" : ""}</div>
                        </div>
                        <button type='submit' className="btn w-full btn-primary my-2 ">{isLoading ? <span className="loading loading-spinner loading-lg"></span> : "Add Product"}</button>
                    </form>
                </div>
            </div >
        </div >
    </>
}
export default Dashboard