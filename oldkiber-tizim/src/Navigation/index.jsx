import './style.scss'
import { Outlet, Link } from 'react-router-dom';
import { GoQuestion } from "react-icons/go";


function Navigation() {
    return ( 
        <div className="navigation-cover">
            <header>
                <div className="upnav">
                    <Link to={'/actives'}>Actives</Link>
                    <div className="plus">+</div>
                    <span className='inp'>
                        <input type="search" />
                        🔍
                    </span>
                    <span className='lang'>
                        <p>uz</p>
                        <li>uz</li>
                        <li>en</li>
                        <li>ru</li>
                        <li>id</li>
                    </span>
                    <GoQuestion/>
                </div>
                <nav>
                    
                    <Link to={'/leads'}>Leads</Link>
                    <Link to={'/teachers'}>Teachers</Link>
                    <Link to={'/groups'}>Groups</Link>
                    <Link to={'/students'}>Students</Link>
                    <Link to={'/finance'}>Finance</Link>
                    <Link to={'/reports'}>Reports</Link>
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