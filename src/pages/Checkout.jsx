import { useSelector } from 'react-redux';
import BasketCard from '../components/BasketCard';
import BasketSidebar from '../components/BasketSidebar';
// import {useCart} from '../context/CartContext'
import styles from './Checkout.module.css'
import { Col, Container, Row } from "react-bootstrap";
import empty from '../../public/empty.png'


function Checkout() {

    const state = useSelector(store => store.cart)

    if ( state.selectedItems == 0 ){
        return (
                 <Col align="center" size={12} md={12}>
        <div className={styles.container}>
                    <img src={empty} alt="" />
                    </div>
                </Col>
                )
    }

    console.log(state);
    return (<>
         <div className={styles.container}>
         <Container>
        <Row className="align-items-center">
     <Col size={12} lg={3}>

        <BasketSidebar state={state}  />
    </Col>
    <Col size={12} lg={9}>

        <div className={styles.pruducts}>
            {state.selectedItems.map(p => (
                <BasketCard key={p.id} data={p} />
            ))}
        </div>
        </Col>
        </Row>
      </Container>
    </div> 
            </>
    );
}

export default Checkout;