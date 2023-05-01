import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userSearch } from '../context/PayerContext'

const Header = ({userState}) => {

    const {setUserSearchState} = useContext(userSearch);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MyApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/add-player">Add Player</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/get-all-player">Get All Player</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/get-user-player">Get Users Player</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active">Login User</li>
                                    <li className="breadcrumb-item">{userState ? userState : "Nobody"}</li>
                                </ol>
                            </nav>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setUserSearchState(e.target.value)}/>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header