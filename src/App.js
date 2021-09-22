import './App.css';
import React, {useEffect, useState} from 'react';
import StockProducts from './StockProducts.jsx';
import BuyList from './BuyList';

function App() {
  const [buyProducts, setBuyProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function addProduct(productData) {
    productData.quantity = Number(1);
    productData.totalPrice = Number(productData.price);

    if( buyProducts.some((currentProduct) => currentProduct.itemNumber === productData.itemNumber ) === false ) {
      setBuyProducts([...buyProducts, productData]);
    }
  }

  function deleteProduct(index) {
    const updatedProducts = buyProducts;
    
    updatedProducts.splice(index, 1)
    setBuyProducts( [...updatedProducts] )
  }

  function quantityChange(e, index) {
    const selectedProduct = buyProducts[index];
    const updatedProducts = buyProducts;
    
    selectedProduct.quantity = Number( e.target.value );
    selectedProduct.totalPrice = ( selectedProduct.price * Number( e.target.value ) );

    updatedProducts[index] = selectedProduct;
    setBuyProducts( [...updatedProducts] )
  }

  function getTotalPrice() {
    let totalPrice = 0;
    buyProducts.map((product) => totalPrice = totalPrice + product.totalPrice);
    
    setTotalPrice( totalPrice );
  }

  useEffect( () => {
    getTotalPrice();
  });

  return (
    <div className="p-10 m-auto bg-blue-50 min-h-screen">
      <div className="border border-gray-300 rounded-lg w-full bg-white p-10 shadow-lg">
        <h1 className="m-0 p-0 text-2xl font-semibold">Restaurant Order System</h1>
        <hr className="my-3 border border-0 border-t-1 border-gray-200" />
        Select products below to add to the ordering guide

        <StockProducts
          onProductAdd={addProduct}
          />
        {buyProducts.length > 0 &&
        <>
          <BuyList
            products={buyProducts}
            onProductDelete={deleteProduct}
            onQuantityChange={quantityChange}
            />
          <div className="text-right font-semibold text-lg mt-4">
            Total:
            <span className="text-xl ml-2">{(totalPrice).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</span>
          </div>
        </>
        }

      </div>
    </div>
  );
}

export default App;
