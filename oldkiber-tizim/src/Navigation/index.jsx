import './style.scss'
import Nav from './Nav';
import { Outlet } from 'react-router-dom';


function Navigation() {


    return ( 
        <div className="navigation-cover" >
            <header>
                < Nav />                
            </header>

            <div className="outlet">
                < Outlet/>
            </div>

            <footer>

            </footer>
        </div>
     );
}

export default Navigation;