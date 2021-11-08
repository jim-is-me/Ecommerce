import React, { useState } from "react";
import { Form, Tabs, Tab } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../css/products.css';

export default function Login () {

    const [loginForm, setLoginForm] = useState({userName:"",password: "" });
    const [error, setError] = useState({});

    const history = useHistory();

    function handleClicklogin() {

        // console.log(loginForm);

        if (!loginForm.userName) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.userName = true;
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

        let data = loginForm.userName;
        //axios.get(`${baseUrl}/users/${loginForm.userName}`)
        axios.post('https://localhost/ci3/admin/Users/index/',data
            , {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
            })
            .then(resp => {
                if ( resp.data[0].admin_password === loginForm.password) {
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
            .catch(errpr => {
                setError(prevSate => {
                    const temp = JSON.parse(JSON.stringify(prevSate));
                    temp.wrgusername = true;
                    return temp;
                });
            });

    }

    function handleClickregister() {

        // console.log(loginForm);

        if (!loginForm.userName) {
            setError(prevSate => {
                const temp = JSON.parse(JSON.stringify(prevSate));
                temp.userName = true;
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

        // let data = loginForm.userName;
        //axios.get(`${baseUrl}/users/${loginForm.userName}`)
        axios.post('https://localhost/ci3/admin/Users/create/',{
                username : loginForm.userName,
                password : loginForm.password
            }
            , {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            })
            .then(resp => {
                // history.push("/mainpage");
                if(resp.data == 0){
                    setError(prevSate => {
                        const temp = JSON.parse(JSON.stringify(prevSate));
                        temp.userexists = true;
                        return temp;
                    });
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
            <div className='login-form'>
                <Tabs defaultActiveKey="home" id="controlled-tab-example">
                    <Tab eventKey="home" title="Login">
                        <div className='table'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User name</Form.Label>
                                <Form.Control type="email"
                                    placeholder="Enter your email ID"
                                    onChange={(event) => onChange({ name: 'userName', value: event.target.value })}
                                    value={loginForm.userName} />
                                {error.userName && <span style={{ color: 'red' }}>User name is required</span>}
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    placeholder="Password"
                                    onChange={(event) => onChange({ name: 'password', value: event.target.value })}
                                    value={loginForm.password} />
                                {error.password && <span style={{ color: 'red' }}>Password is required</span>}
                                {error.wrgpassword && <span style={{ color: 'red' }}>Password is wrong</span>}
                                {error.wrgusername && <span style={{ color: 'red' }}>Username never</span>}
                            </Form.Group>
                            {/* <Button variant="primary" type="button" onClick={() => handleClickadmin()}>
                                Submit
                            </Button> */}
                            <button type="button" className="btn btn-primary" onClick={() => handleClicklogin()}>
                                Submit</button>
                        </div>
                    </Tab>

                        <Tab eventKey="profile" title="Register">

                        <div className='table'>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>User name</Form.Label>
                                    <Form.Control type="email"
                                        placeholder="Enter your prefred email ID"
                                        onChange={(event) => onChange({ name: 'userName', value: event.target.value })}
                                        value={loginForm.userName} />
                                    {error.userName && <span style={{ color: 'red' }}>User name is required</span>}
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"
                                        placeholder="Password"
                                        onChange={(event) => onChange({ name: 'password', value: event.target.value })}
                                        value={loginForm.password} />
                                    {error.password && <span style={{ color: 'red' }}>Password is required</span>}
                                    {error.userexists && <span style={{ color: 'red' }}>User name alreay exists try new user name</span>}
                                </Form.Group>

                                <button type="button" className="btn btn-primary" onClick={() => handleClickregister()}>
                                    Submit
                                </button>
                        </div>
                    </Tab>
                </Tabs>

            </div>
    );
}