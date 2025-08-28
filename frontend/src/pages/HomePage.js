import React from 'react'
import Headers from "../features/common/Headers";
import Products from "../features/products/Components/Products";

const Home = () => {
    document.title = "eNursery";
    return (
        <>
            <Headers />
            <Products />
        </>
    )
}

export default Home