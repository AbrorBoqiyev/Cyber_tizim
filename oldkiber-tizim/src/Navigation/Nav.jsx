import { Link } from "react-router-dom";
import { useState } from "react";

import { GoQuestion } from "react-icons/go";
import { MdOutlineWatchLater, MdOutlinePerson2 } from "react-icons/md";
import { BsBellFill, BsArrowsFullscreen, BsBoxArrowInDown, BsFillPersonFill,} from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosArrowDropright, IoIosSearch } from "react-icons/io";

import { LiaChartPieSolid, LiaLayerGroupSolid } from "react-icons/lia";
import { RiRefund2Fill } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { GiRadioactive } from "react-icons/gi";



function Nav() {

    const [navStyle, setNavStyle] = useState(false)
    
    

    const toggleNavbar = (e) => {
        setNavStyle(prev => !prev)
        
        console.log(navStyle)
    }


    const strechNavbar = {
         transform: navStyle ? 'rotate(180deg)' : 'rotate(0deg)',
         left: navStyle ? '10.8rem' : '1rem',
         width: navStyle ? '11.5rem' : '1.4rem',
         opacity: navStyle ? '0' : '1',
         chap: navStyle? '5rem' : '-4rem',
    }

    

    return ( 
        <div className="nav-cover">
            <div className="upnav">
                    <div className="left-nav">
                        <div className="logo">
                            <img src="" alt="logo" />
                        </div>
                        <h2 style={{
                            opacity: strechNavbar.opacity,
                            letterSpacing: '2rem',
                            left: strechNavbar.chap
                        }}>
                            MENU
                        </h2>
                    </div>

                    <div className='middle'>
                        <span className="inp">
                            <input type="text" placeholder="Qidiruv" />
                            <IoIosSearch className='icon' size={25} />
                        </span>
                    </div>

                    <div className="right-nav">
                        <span className='lang'>
                            <p>uz</p>
                            <div className="down">
                                <li>uz-O'zbekcha</li>
                                <li>en-Inglizcha</li>
                                <li>ru-ruscha</li>
                                <li>id</li>
                            </div>
                        </span>
                        <span className='arrows'>
                            <BsArrowsFullscreen  className='icon'  />
                        </span>
                        <span className='arrows'>
                            <GoQuestion className='icon' size={20} />
                        </span>
                        <span className='watch'>
                            < MdOutlineWatchLater className='icon' size={20} />
                        </span>
                        <span className='bell'>
                            < BsBellFill className='icon'  size={20} />
                        </span>

                        <div className="owner">
                            <span>Name Surname</span>
                            <img src="#" alt="img" />
                        </div>
                    </div>
                </div>
                
                <nav style={{width: strechNavbar.width}} >
                    <Link className="links" to={'/actives'}><GiRadioactive size={30} />Faollar</Link>
                    <Link className="links" to={'/leads'}><BsBoxArrowInDown size={35}  /> Leadlar</Link>
                    <Link className="links" to={'/teachers'}><MdOutlinePerson2 size={40}  />O'qituvchilar</Link>
                    <Link className="links" to={'/groups'}> <LiaLayerGroupSolid size={40}  />Guruhlar</Link>
                    <Link className="links" to={'/students'}><BsFillPersonFill size={40} />Talabalar</Link>

                    <span className="links menu" ><RiRefund2Fill size={40} />Moliya</span>
                    <span className="links menu" ><LiaChartPieSolid size={40}  />Xisobot</span>
                    <span className="links menu" ><LuSettings size={40}  fontWeight={100} />Sozlamalar</span>
                    
                </nav>
                <span onClick={toggleNavbar} >
                    <IoIosArrowDropright className="arrow"  
                        style={{transform: strechNavbar.transform, left: strechNavbar.left}} 
                        size={40} 
                    />  
                </span>                     
        </div>
     );
}

export default Nav;