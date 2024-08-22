import { Link } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";


function Footer() {
    return ( 
        <div className="foot-cover">
            <div className="footer-left">
                <Link to={'/#'}> <FaHandsHelping size={20} /> Texnik yordam</Link>
                <Link to={'/#'}> <IoDocumentText size={20} /> Hujjatlar</Link>
            </div>
            <div className="footer-right">
                <img src="" alt="logotip" style={{color: 'lightgray'}} />
            </div>

        </div>
     );
}

export default Footer;