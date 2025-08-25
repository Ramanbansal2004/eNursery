import Products from '../features/products/Components/Products'
import { useEffect, useState } from 'react'
import Animation from '../features/common/Animation';
const ProductsPage = () => {
  const[loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(()=>{
      setLoading(true);
    }, 50000)
  }, [])
  document.title = "Products Page"
  return (
    <>
      {!loading && <div>
        <Animation/></div>}
      {loading && <Products/>}
    </>
  )
}

export default ProductsPage