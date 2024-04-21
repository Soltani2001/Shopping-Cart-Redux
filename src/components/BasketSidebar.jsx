import styles from './BasketSidebar.module.css'
import { FaListOl } from "react-icons/fa6";
import { LiaSlackHash } from "react-icons/lia";
import { IoCloudDone } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { checkout } from '../features/cart/cartSlice';

function BasketSidebar({state}) {
  const dispatch = useDispatch()
  return (
    <div className={styles.sidebar}>
        <div>
            <FaListOl />
            <p>Total: </p>
            <span>{state.total} $</span>
        </div>
        <div>
            <LiaSlackHash />
            <p>Quantity: </p>
            <span>{state.itemsCounter}</span>
        </div>
        <div>
            <IoCloudDone />
            <p>Status: </p>
            <span>{!state.checkout && "Pending..."}</span>
        </div>

        <button onClick={()=> dispatch(checkout()) }>checkout</button>

    </div>
  )
}

export default BasketSidebar