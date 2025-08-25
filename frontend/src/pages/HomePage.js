import React from 'react'
import Headers from "../features/common/Headers";
import Products from "../features/products/Components/Products";
import Animation from '../features/common/Animation';
import { useEffect, useState } from 'react'
const Home = () => {
    const[loading, setLoading] = useState(false)
      useEffect(() => {
        setTimeout(()=>{
          setLoading(true);
        }, 50000)
      }, [])
    document.title = "Plant Selling Website";
    return (
        <>
            <Headers />
            {!loading && <div>
                <Animation/></div>}
            {loading && <Products/>}
        </>
    )
}

export default Home