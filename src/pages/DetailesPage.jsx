import { Link, useParams } from "react-router-dom";
// import { useProductsDetailes } from "../context/ProductContext";
import { useEffect } from "react";
import { RiLinksFill } from "react-icons/ri";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import Loader from "../components/Loader";
import styles from './DetailesPage.module.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import { Col, Container, Row } from "react-bootstrap";

function DetailesPage() {
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(fetchProducts())
    }, [])

    const {id} = useParams()
    const product = useSelector ((store) => store.product.products.find(i => i.id === +id))
    if (!product) return <Loader />
    console.log(product);
    return ( 
    <div className={styles.container}>
        <Container>
        <Row className="align-items-center">
        <Col align="center" size={12} md={6}>

        <img src={product.image} alt={product.title} />
        </Col>
        
        <Col size={12} md={6} >

        <div className={styles.info} >
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.category}><RiLinksFill/>{product.category}</p>
        <div>
            <span className={styles.price}>
                <IoMdPricetag/>
                {product.price} $
            </span>
            <Link to="/products"><FaAngleDoubleLeft /><span>Back to shop</span></Link>
        </div>
            
        </div>
        </Col>
        </Row>
      </Container>
    </div> );
}

export default DetailesPage;