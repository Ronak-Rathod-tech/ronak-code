import { Provider } from "react-redux";
import store from "../reducers/store";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const gotoLogin = () =>{
        navigate('/login');
    }
    return (
        <Provider store={store}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Demo_1</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/about">About</a> */}
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/cart">Cart</a> */}
                                <NavLink className="nav-link" to="/cart">Cart</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/contact">Contact</a> */}
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                        </ul>
                        <Button color="primary" variant="contained" onClick={() => gotoLogin()}>Login</Button>
                    </div>
                </div>
            </nav>
        </Provider>
    );
};

export default NavBar;