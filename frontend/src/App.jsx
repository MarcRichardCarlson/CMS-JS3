import {Routes, Route} from "react-router-dom";
import Products from "./pages/Products";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Navigate} from './const/routes.js'
//import ProtectedRoutes from '../src/components/ProtectedRoutes'

const App = () => {
    return (
        <div className="application">
            <main>
                    <Routes>
                        <Route path={Navigate.register}element={<Register/>}/>
                        <Route path={Navigate.home}element={<Login/>}/>
                        <Route path={Navigate.products}element={<Products/>}/>
                        <Route path={Navigate.productDetails + ':productId'}element={<Details/>}/>
                        {
                        /*
                        <Route element={<ProtectedRoutes/>}>
                        </Route>
                        */
                        }
                    </Routes>
            </main>
        </div>
    );
};

export default App;
