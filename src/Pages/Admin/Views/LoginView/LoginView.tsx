import React from "react";
import "./LoginView.css";
import PrimaryButton from "../../../../Shared/PrimaryButton/PrimaryButton";

const LoginView:React.FC = ():JSX.Element => {
    return(
        <>
            <section className="login-form">
                <div className="login-form-title">
                    <h2>Admin</h2>
                </div>
                <article className="login-form-content">
                    <div className="login-form-control">
                        <label htmlFor="login-username-input">Username: </label>
                        <input name="login-username-input" type="text" />
                    </div>
                    <div className="login-form-control">
                        <label htmlFor="">Password: </label>
                        <input name="login-password-input" type="password" />
                    </div>
                    <div className="login-buttons">
                        <PrimaryButton width="49%" height="100%" label="Go Back" onClick={() => {}}/>
                        <PrimaryButton width="49%" height="100%" label="Login" onClick={() => {}}/>
                    </div>
                </article>
            </section>
        </>
    );
}

export default LoginView;