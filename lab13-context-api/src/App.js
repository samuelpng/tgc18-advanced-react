import React, {useState} from 'react'
import ProductContext from './ProductContext'
import ProductListing from './ProductListing'
import AddProduct from './AddProductForm'

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      product_name: "Brown Roce Cookies",
      cost: 9.99
    },
    {
      id: 2,
      product_name: "Seaweed Cakes",
      cost: 10.50
    },
    {
      id: 3,
      product_name: "Soya Milkshake",
      cost: 15.00
    }
  ])

  //this context object goes into ProductContext
  const context = {
    getProducts: () => {
      return products
    },
    addProduct: (productName, cost) => {
      const cloned =  [...products, {
        id:  Math.floor((Math.random() * 100000) + 10000),
        product_name: productName,
        cost: cost
      }]
      setProducts(cloned)
    }
  }


 

  return (
    <React.Fragment>
      <ProductContext.Provider value={context}>
        <h1>Catalog</h1>
        <ProductListing />
        <AddProduct />
      </ProductContext.Provider>
    </React.Fragment>
  );
}

export default App;
