import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../css/products.css';

export default function Loginpage () {

    const [loginForm, setLoginForm] = useState({email:"",password: "" });
    const [error, setError] = useState({});

    const history = useHistory();

    function handleClicklogin() {

        // console.log(loginForm);

        if (!loginForm.email) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.email = true;
                return temp;
            });
            return;
        }
        if (!loginForm.password) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.password = true;
                return temp;
                // return { ...prevSate, password: true };
            });
            // setError(prevState => ({ ...prevState, password: true }));
            return;
        }

        let data = loginForm.email;
        //axios.get(`${baseUrl}/users/${loginForm.userName}`)
        axios.post('https://localhost/ci3/admin/Users/login/',data
            , {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
            })
            .then(resp => {
                if ( resp.data[0].password === loginForm.password) {
                    // auth.login();
                    history.push("/mainpage");
                }
                else{
                    // const name = "wrgpassword";
                    setError(prevSate => {
                        const temp = JSON.parse(JSON.stringify(prevSate));
                        temp.wrgpassword = true;
                        return temp;
                    });
                }
                // console.log(resp.data[0].admin_username);
            })
            .catch(error => {
                setError(prevSate => {
                    const temp = JSON.parse(JSON.stringify(prevSate));
                    temp.wrgusername = true;
                    return temp;
                });
            });

    }

    const onChange = data => {

        const name = data.name;
        const value = data.value;

        setLoginForm(prevSate => {
            const temp = JSON.parse(JSON.stringify(prevSate));
            temp[name] = value;
            return temp;
        });
        setError(prevSate => {
            const temp = JSON.parse(JSON.stringify(prevSate));
            temp[name] = value ? false : true;
            return temp;
        });
    };

    return(
            <div>
                
                <img src="folder/img/logo.png" alt="" />

                <div className='login-form'>
                    <h4><strong>Login</strong></h4>
                            
                    <div className="checkout__input">
                        <p>Email ID<span>*</span></p>
                        <input type="email"
                         onChange={(event) => onChange({ name: 'email', value: event.target.value })}
                         value={loginForm.email} />
                     {error.email && <span style={{ color: 'red' }}>User name is required</span>}
                     {error.wrgusername && <span style={{ color: 'red' }}>Username never exists</span>}
                    </div>
                    <div className="checkout__input">
                        <p>Password<span>*</span></p>
                        <input type="password" 
                         onChange={(event) => onChange({ name: 'password', value: event.target.value })}
                         value={loginForm.password} />
                    {error.password && <span style={{ color: 'red' }}>Password is required</span>}
                    {error.wrgpassword && <span style={{ color: 'red' }}>Password is wrong</span>}
                    </div> 
                    <button type="submit" className="site-btn" onClick={() => handleClicklogin()}>Login</button><span  style={{marginRight: 10}} />
                    <Link to="/signup">Create a new account?</Link>
                </div>
 
            </div>
    );
}