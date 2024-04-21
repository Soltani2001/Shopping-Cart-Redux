import { Col } from 'react-bootstrap';
import error from '../../public/4042.png'
import styels from './404.module.css'
import { Link } from 'react-router-dom';
// import { FaAngleDoubleLeft } from "react-icons/fa";



function PageNotFound() {
    return ( <>
                 <Col align="center" size={12} md={12}>

                    <img className={styels.img} src={error} alt="" />
                </Col>
                 <Col className={styels.link} align="center" size={12} md={12}>

                    <Link className={styels.link} to="/products"><span>Back to shop</span></Link>
                </Col>
    </> 
    );
}

export default PageNotFound;