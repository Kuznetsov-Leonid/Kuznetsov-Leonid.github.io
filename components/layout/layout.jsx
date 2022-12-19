/**
 * create by Kuznetsov Leonid 
 * 16.12.2022
 */
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => (
    <>
        <Header/>
        { children }
        <Footer/>
    </>
);

export default Layout;
