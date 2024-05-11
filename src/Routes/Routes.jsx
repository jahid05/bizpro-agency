import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Nav from '../Components/Shared/Nav/Nav';

const Routes = () => {
    return (
        <div className="font-customFont">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Routes;