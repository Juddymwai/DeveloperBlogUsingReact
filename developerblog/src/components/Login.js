import React from "react";

function Login (){
    return(
        <div>
            <h3>Login Page</h3>
            <h1>Login</h1>

            <form>

                <div>
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default Login;