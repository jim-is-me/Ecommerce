import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../css/products.css';

export default function Signup() {

    const [loginForm, setLoginForm] = useState({firstname:"",lastname:"",country:"",address:"",town:"",postcode:"",phone:"",email:"",password: "" });
    const [error, setError] = useState({});

    const history = useHistory();

    function handleClickregister(event) {

        // console.log(loginForm);
        // event.preventDefault();
        if (!loginForm.firstname) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.firstname = true;
                return temp;
            });
            return;
        }

        if (!loginForm.lastname) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.lastname = true;
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

        if (!loginForm.country) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.country = true;
                return temp;
                // return { ...prevSate, password: true };
            });
            // setError(prevState => ({ ...prevState, password: true }));
            return;
        } 
        
        if (!loginForm.address) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.address = true;
                return temp;
                // return { ...prevSate, password: true };
            });
            // setError(prevState => ({ ...prevState, password: true }));
            return;
        }

        if (!loginForm.town) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.town = true;
                return temp;
                // return { ...prevSate, password: true };
            });
            // setError(prevState => ({ ...prevState, password: true }));
            return;
        }

        if (!loginForm.postcode) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.postcode = true;
                return temp;
                // return { ...prevSate, password: true };
            });
            // setError(prevState => ({ ...prevState, password: true }));
            return;
        }

        if (!loginForm.phone) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.phone = true;
                return temp;
                // return { ...prevSate, password: true };
            });
            // setError(prevState => ({ ...prevState, password: true }));
            return;
        }

        if (!loginForm.email) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.email = true;
                return temp;
                // return { ...prevSate, password: true };
            });
            // setError(prevState => ({ ...prevState, password: true }));
            return;
        }

        // let data = loginForm.userName;
        //axios.get(`${baseUrl}/users/${loginForm.userName}`)
        axios.post('https://localhost/ci3/admin/Users/createacc/',{
                firstname : loginForm.firstname,
                lastname : loginForm.lastname,
                country : loginForm.country,
                address : loginForm.address,
                town : loginForm.town,
                postcode : loginForm.postcode,
                phone : loginForm.phone,
                email : loginForm.email,
                password : loginForm.password
            }
            , {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            })
            .then(resp => {
                // history.push("/mainpage");
                if(resp.data === 0){
                    setError(prevSate => {
                        const temp = JSON.parse(JSON.stringify(prevSate));
                        temp.userexists = true;
                        return temp;
                    });
                }
                
                else{
                    history.push("/mainpage");
                }
                
            })
            .catch(errpr => {
                alert(' username password incorrect ');
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

        <div><img src="folder/img/logo.png" alt="" />
        <div className='login-form'>
            <h4><b>Register a new account</b></h4>
            <div className="row">
                <div className="col-lg-8 col-md-6">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="checkout__input">
                                <p>Fist Name<span>*</span></p>
                                <input type="text" 
                                       onChange={(event) => onChange({ name: 'firstname', value: event.target.value })}
                                       value={loginForm.firstname} />
                                {error.firstname && <span style={{ color: 'red' }}>First name is required</span>}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="checkout__input">
                                <p>Last Name<span>*</span></p>
                                <input type="text" 
                                       onChange={(event) => onChange({ name: 'lastname', value: event.target.value })}
                                       value={loginForm.lastname}/>
                                {error.lastname && <span style={{ color: 'red' }}>Last name is required</span>}
                            </div>
                        </div>
                    </div>
                    <div className="checkout__input">
                        <p>Country<span>*</span></p>
                        <input type="text" 
                               onChange={(event) => onChange({ name: 'country', value: event.target.value })}
                               value={loginForm.country} />
                        {error.country && <span style={{ color: 'red' }}>Country is required</span>}
                    </div>
                    <div className="checkout__input">
                        <p>Address<span>*</span></p>
                        <input type="text" placeholder="Street Address" className="checkout__input__add" 
                               onChange={(event) => onChange({ name: 'address', value: event.target.value })}
                               value={loginForm.address}/>
                        {error.address && <span style={{ color: 'red' }}>Address is required</span>}
                    </div>
                    <div className="checkout__input">
                        <p>Town/City<span>*</span></p>
                        <input type="text"
                               onChange={(event) => onChange({ name: 'town', value: event.target.value })}
                               value={loginForm.town}/>
                        {error.town && <span style={{ color: 'red' }}>Town is required</span>}
                    </div>
                    <div className="checkout__input">
                        <p>Postcode / ZIP<span>*</span></p>
                        <input type="text" 
                               onChange={(event) => onChange({ name: 'postcode', value: event.target.value })}
                               value={loginForm.postcode}/>
                        {error.postcode && <span style={{ color: 'red' }}>Postcode is required</span>}
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="checkout__input">
                                <p>Phone<span>*</span></p>
                                <input type="phonenumber" 
                                       onChange={(event) => onChange({ name: 'phone', value: event.target.value })}
                                       value={loginForm.phone}/>
                                {error.number && <span style={{ color: 'red' }}>Number is required</span>}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="checkout__input">
                                <p>Email<span>*</span></p>
                                <input type="email" 
                                       onChange={(event) => onChange({ name: 'email', value: event.target.value })}
                                       value={loginForm.email} />
                                {error.email && <span style={{ color: 'red' }}>Email is required</span>}
                                {error.userexists && <span style={{ color: 'red' }}>EmailID alreay exists try new user name</span>}
                            </div>
                        </div>
                    </div>
                    <div className="checkout__input">
                        <p>Account Password<span>*</span></p>
                        <input type="password" 
                               onChange={(event) => onChange({ name: 'password', value: event.target.value })}
                               value={loginForm.password}/>
                        {error.password && <span style={{ color: 'red' }}>Password is required</span>}
                    </div>
                    <button type="submit" className="site-btn" onClick={() => handleClickregister()}>Create account</button>
                    <span  style={{marginRight: 10}} />
                    <Link to="/">Already have an account?</Link>
                </div>
            </div>
        </div>
        </div>
    );
}