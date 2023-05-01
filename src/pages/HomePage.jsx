import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { loggedUser, role } from '../context/PayerContext';
import { loggedUserFunction } from '../api/apis';

const HomePage = () => {

    const { userState, setUserState } = useContext(loggedUser);
    const { SetUserRole } = useContext(role)

    const getLoggeduser = async () => {
        const apiResponse = await loggedUserFunction();
        setUserState(apiResponse.data.user);
        SetUserRole(apiResponse.data.role);
    }
    useEffect(() => {
        getLoggeduser();
    }, []);
    return (
        <>
            <div className="container default-page">
                <h1>Hello {userState ? userState : "World"}</h1>
                <div className="auth_btn">
                    <Link className="btn btn-outline-dark btn-sm me-3" to="/login">Login</Link>
                    <Link className="btn btn-outline-dark btn-sm me-3" to="/sign-up">Sign Up</Link>
                </div>
            </div>
        </>
    )
}

export default HomePage