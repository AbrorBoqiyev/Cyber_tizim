import './style.scss'
import { Outlet, Link } from 'react-router-dom';


function Navigation() {
    return ( 
        <div className="navigation-cover">
            <header>
                <nav>
                    <Link to={'/#act'}>Actives</Link>
                    <Link to={'/#leads'}>Leads</Link>
                    <Link to={'/#teachers'}>Teachers</Link>
                    <Link to={'/#groups'}>Groups</Link>
                    <Link to={'/students'}>Students</Link>
                </nav>
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