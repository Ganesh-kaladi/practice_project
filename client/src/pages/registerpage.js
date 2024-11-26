import { Fragment } from "react"
import { NavLink } from "react-router"

export const Registerpage = () => {
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
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="username" className="form-label fw-semibold fs-5">Username :</label>
                                        <input input="text" name="username" className="form-control" id="username" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label fw-semibold fs-5">Email :</label>
                                        <input input="email" name="email" className="form-control" id="email" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phone" className="form-label fw-semibold fs-5">Phone :</label>
                                        <input input="text" name="phone" className="form-control" id="phone" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="form-label fw-semibold fs-5">Password :</label>
                                        <input input="password" name="password" className="form-control" id="password" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="confirmpassword" className="form-label fw-semibold fs-5">Confirm Password :</label>
                                        <input input="password" name="confirmPassword" className="form-control" id="confirmpassword" required />
                                    </div>
                                    <div className="mb-4">
                                        <button className="btn btn-outline-primary">Register</button>
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