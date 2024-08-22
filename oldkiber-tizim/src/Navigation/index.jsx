import './style.scss'
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';


function Navigation() {


    return ( 
        <div className="all-cover" >
            <header>
                < Nav />                
            </header>

            <div className="outlet">
                < Outlet/>
            </div>

            <footer>
                <Footer/>
            </footer>
        </div>
     );
}

export default Navigation;