import { useState } from 'react'
import { storageRemove } from '../utils/StorageUtil';
import { useNavigate } from 'react-router-dom';
import { Navigate } from '../const/routes.js';
import { Storage } from '../const/storage';
import { loginUser } from '../utils/ApiUtil';

const initState = {
    Email: '',
    Password: ''
}

const Login = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState(initState)

    const handleChange = e => {
        setFormData(data => {
            return {
                ...data,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        storageRemove(Storage.token)
        storageRemove(Storage.products)

        const res = await loginUser(formData.Email, formData.Password)
        if (res === undefined ) {
        } else {
            //navigates if token exists
            console.log('loggin in with token')
            navigate(Navigate.products)
        }

    }

    const handleNavigation = async e => {
        e.preventDefault()
        navigate(Navigate.register)
    }


    return (
        <> 
            <div className='loginPage'>
                <h4>Dont have an account?</h4>
                <button className='signUpBtn' onClick={handleNavigation}>Register here</button>
                <div className='form'>
                    <form noValidate
                        onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name='Email' id='email' className='form-control'
                                value={
                                    formData.Email
                                }
                                onChange={handleChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name='Password' id='password' className='form-control'
                                value={
                                    formData.Password
                                }
                                onChange={handleChange}/>
                        </div>

                        <button className='loginBtn'>Login</button>

                    </form>
                </div>
            </div>
        </>
    )
};

export default Login;
