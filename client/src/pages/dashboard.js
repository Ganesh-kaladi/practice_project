import { Fragment } from "react"
import { NavLink } from "react-router"
import { useState, useEffect } from "react"
import axios from "axios"
import { Navigate } from "react-router"

export const Dashboardpage = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('http://localhost:5050/allusers', {
            headers: {
                'Token': localStorage.getItem('token')
            }
        })
            .then(res => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(`error at get all users ${err}`)
            })
    }, [])
    const handleLogOut = ()=>{
        localStorage.removeItem('token')
    }
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
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
                                <NavLink to="/" className="nav-link">All Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" onClick={handleLogOut}>Log Out</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="bg-light pt-5">
                <section className="">
                    <div className="container">
                        <div className="row pt-5">
                            {data?.length > 0 && data.map(res => {
                                return (
                                    <div className="col-md-4 " key={res.id}>
                                        <div className="container">
                                            <h3>{res.username}</h3>
                                            <span>{res.email}</span><br />
                                            <b>{res.phone}</b>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}