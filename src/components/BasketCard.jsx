import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus  } from "react-icons/fa";

import { shortenText } from "../helpers/helper"
import styles from './BasketCard.module.css'
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

function BasketCard({data, clickHandeler}) {
    // const state = useSelector(state=>state.)
    const dispatch = useDispatch()



  return (
    <div className={styles.card}>
        <img src={data.image} alt={data.title} />
        <p>{shortenText(data.title)}</p>
        <div className={styles.actions}>
            {data.quantity === 1 && (<button onClick={()=> dispatch(removeItem(data))}>
                <MdDelete />
            </button>)}
            {data.quantity >1 && (<button onClick={()=> dispatch(decrease(data))}>
                <FaMinus />
            </button>)}
            <span>{data.quantity}</span>
            <button onClick={()=> dispatch(increase(data))}>
                <FaPlus />
            </button>
        </div>
    </div>
  )
}

export default BasketCard