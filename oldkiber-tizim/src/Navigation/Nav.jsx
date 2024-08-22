import { Link } from "react-router-dom";
import { useState } from "react";

import { GoQuestion } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";

import { BsBoxArrowInDown } from "react-icons/bs";
import { MdOutlinePerson2 } from "react-icons/md";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { BsFillPersonFill } from "react-icons/bs";
import { RiRefund2Fill } from "react-icons/ri";
import { LiaChartPieSolid } from "react-icons/lia";
import { LuSettings } from "react-icons/lu";
import { GiRadioactive } from "react-icons/gi";

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";




function Nav() {

    

    return ( 
        <div className="nav-cover">
            <div className="upnav">
                    <div className="left-nav">
                        <div className="logo">
                            <img src="" alt="logo" />
                        </div>
                        <div className="plus">
                            <FiPlusCircle className='icon' size={20} />
                        </div>
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
                
                <nav>
                    <Link to={'/actives'} className="active"><GiRadioactive size={30} />Actives</Link>
                    <Link to={'/leads'}><BsBoxArrowInDown size={35} /> Leads</Link>
                    <Link to={'/teachers'}><MdOutlinePerson2 size={40} />Teachers</Link>
                    <Link to={'/groups'}> <LiaLayerGroupSolid size={40} />Groups</Link>
                    <Link to={'/students'}><BsFillPersonFill size={40}/>Students</Link>
                    <Link to={'/finance'}><RiRefund2Fill size={40}/>Finance</Link>
                    <Link to={'/reports'}><LiaChartPieSolid size={40} />Reports</Link>
                    <Link to={'/#settings'}><LuSettings size={40} fontWeight={100} />settings</Link>
                    <span className="arrow"><IoIosArrowDropright size={40}  />  </span> 
                     {/* <IoIosArrowDropleft /> : <IoIosArrowDropright /> */}
                    
                </nav>
        </div>
     );
}

export default Nav;