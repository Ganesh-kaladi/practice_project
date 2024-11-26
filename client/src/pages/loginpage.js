import { Fragment } from "react"
import { NavLink } from "react-router"
import { useState } from "react"
import axios from 'axios'
import {Navigate} from 'react-router-dom'

export const Loginpage = () => {
    const [formData, setFormdata] = useState({
        email: '',
        password: ''
    })
    //form data handle
    const handleFormData = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    //submit handle
    const submitHandle = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.post('http://localhost:5050/login', formData)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
            })
            .catch((err) => {
                console.log(`error at login page ${err}`)
            })
    }
    if(localStorage.getItem('token')){
        return <Navigate to='/dashboard' />
    }
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-dark top-fixed" data-bs-theme="dark" >
                <div className="container">
                    <a href="#home" className="navbar-brand text-light">
                        Devaloper Hub
                    </a>
                    <button className="navbar-toggler" data-bs-target="#navbarNav" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon ext-light"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="vh-100">
                <section className="h-100">
                    <div className="container">
                        <div className="row pt-5">
                            <div className="col-md-4 offset-md-4">
                                <form onSubmit={submitHandle}>
                                    <div>
                                        <label htmlFor="email" className="form-label">Email :</label>
                                        <input input="email" name="email" onChange={handleFormData} className="form-control" id="email" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label">Password :</label>
                                        <input input="password" name="password" onChange={handleFormData} className="form-control" id="password" />
                                    </div>
                                    <div className="mb-4">
                                        <button className="btn btn-outline-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}