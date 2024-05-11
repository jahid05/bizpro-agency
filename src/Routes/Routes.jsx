import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Nav from '../Components/Shared/Nav/Nav';
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

const Routes = () => {
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    return (
        <div className="font-customFont">
            {
                loading? <div className="flex justify-center items-center h-screen">
                    <ScaleLoader color="#00E5CC" />
                </div> :
                
                <>
                    <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
                </>
            }
        </div>
    );
};

export default Routes;