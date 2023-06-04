import { Navigate } from '../const/routes'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/ApiUtil';

const Register = () => {
    const navigate = useNavigate()
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
      e.preventDefault();
      registerUser(email, password, confirmPassword)
      navigate(Navigate.home)
    };

  return (
    <>
        <div className='registerPage'>
            <div className='registerForm'>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <h3>Register admin account</h3>
                        <input className='form-control' placeholder='Enter E-mail here' required
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">                   
                        <input className='form-control' placeholder='Enter Password here' required
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-group">                   
                    <input input className='form-control' placeholder='Password comfirm'
              required
              id="confirmPassword"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
                    </div>
                    <button className='registerBtn' type='submit'>Register</button>
                </form>
            </div>
        </div>
    </>
  )
};

export default Register