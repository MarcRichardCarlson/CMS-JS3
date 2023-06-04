import { useNavigate } from 'react-router-dom'
import { Navigate } from '../const/routes'
import 'bootstrap/dist/css/bootstrap.css';
import "../index.scss";



const Header = () => {

    const navigate = useNavigate()
    const logout = () => {
        navigate(Navigate.home)
    }

  return (
<div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <a className="navbar-brand mt-2 mt-lg-0 text-light" href="/products">
                    <h1>CMS</h1>
                </a>
            </div>

            <div className="d-flex align-items-center">
            
            <button className='logout' onClick={() => logout()}> Logout </button>
            </div>
        </div>
    </nav>
  </div>
  )
}

export default Header