// import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import styles from './ProductsPage.module.css'
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { createQueryObject, filterProducts, getInitialQuery, searchProducts } from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
import { Col } from "react-bootstrap";

function ProductsPage() {
    const dispatch = useDispatch()
    const {products, loading} = useSelector((state)=> state.product)

    console.log(products, loading);
    // const products = []

    const [search, setSearch] = useState("");
    const [displayed, setDisplayed] = useState([]);
    const [query, setQuery] = useState ({})

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(()=>{
        dispatch(fetchProducts())
    }, [])

    useEffect(()=>{
        setDisplayed(products);
        setQuery(getInitialQuery(searchParams))
    },[products])

    useEffect(()=>{
        setSearchParams(query)
        setSearch(query.search || "")
        let finalProducts = searchProducts(products, query.search)
        finalProducts = filterProducts(finalProducts, query.category)
        // console.log(finalProducts);
        setDisplayed(finalProducts)
    },[query])


    return ( 
    <>
    <Col size={12} sm={6} md={6}>
    <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
    </Col>
    <Col    size={12} md={12}>
        <div  align="center">

    <SideBar query={query} setQuery={setQuery} />
        </div>
    </Col>
    <div align="center" className={styles.container}>
        <Col size={12} md={12}>
        <div  className={styles.products}>
            {loading && <Loader />}
        {displayed.map(p => <Card key={p.id} data={p}/>)}
        </div>
        </Col>
        

    </div>
    </> );
}

export default ProductsPage;