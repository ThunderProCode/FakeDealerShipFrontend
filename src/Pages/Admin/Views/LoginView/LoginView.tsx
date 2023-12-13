import React, { useEffect, useState } from "react";
import "./LoginView.css";
import PrimaryButton from "../../../../Shared/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { userLogin } from "../../../../features/userSlice";

const LoginView:React.FC = ():JSX.Element => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const { userData } = useSelector((state:RootState) => state.auth);
    
    const handleGoBackClick = ():void => {
        navigate('/');
    }
    
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        dispatch( userLogin({username,password}) );
    }

    useEffect(() => {
        if(userData) {
            navigate('/admin/inventory');
        }
    }, [navigate, userData]);

    return(
        <>
            <div className="login-form-container">
                <form className="login-form" onSubmit={ (e) => handleSubmit(e)}>
                    <div className="login-form-title">
                        <h2>Admin</h2>
                    </div>
                    <article className="login-form-content">
                        <div className="login-form-control">
                            <label htmlFor="login-username-input">Username: </label>
                            <input name="login-username-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="login-form-control">
                            <label htmlFor="">Password: </label>
                            <input name="login-password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="login-buttons">
                            <PrimaryButton width="49%" height="100%" label="Go Back" onClick={handleGoBackClick}/>
                            <PrimaryButton width="49%" height="100%" label="Login" type="submit"/>
                        </div>
                    </article>
                </form>
            </div>
        </>
    );
}

export default LoginView;