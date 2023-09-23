import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <>
           <nav>
             <Header />
           </nav>
           <main>
            <Outlet />
           </main>
           <Footer />
        </>
    );
};

export default Root;