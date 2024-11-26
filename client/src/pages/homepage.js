import { Fragment } from "react"
import { NavLink } from "react-router"

export const HomePage = ()=>{
     return(
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-dark top-fixed" data-bs-theme="dark" >
                <div className="container">
                    <NavLink to="/" className="navbar-brand text-light">
                        Devaloper Hub
                    </NavLink>
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
            <main className="vh-100 bg-light">
                <section className="h-100 d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 offset-lg-3 text-center">
                                <h3>WELCOME TO...</h3>
                                <h1>Devaloper Hub</h1>
                                <span className="mt-n1">This is a platform for to achive desired tasks</span>
                                <p className="lead mt-3">A full stack developer is a software engineer skilled in both front-end and back-end development. They handle the entire development process, from designing user interfaces (UI) with HTML, CSS, and JavaScript, to building server-side applications using technologies like Node.js, Python, or Java. Full stack developers are proficient in databases (SQL/NoSQL), version control (Git), and API design. Their versatility allows them to build, deploy, and maintain web applications end-to-end.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
     )
}