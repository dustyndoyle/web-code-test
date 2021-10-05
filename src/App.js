import './App.css';
import React, {useState} from 'react';
import StockProducts from './StockProducts.jsx';
import BuyList from './BuyList';

function App() {
  const [buyProducts, setBuyProducts] = useState({
    'products': [],
    'totalPrice': Number(0),
  });

  function addProduct(productData) {
    productData.quantity = Number(1);
    productData.totalPrice = Number(productData.price);

    if( buyProducts.products.some((currentProduct) => currentProduct.itemNumber === productData.itemNumber ) === false ) {
      buyProducts.products = [...buyProducts.products, productData]
      buyProducts.totalPrice = getTotalPrice( buyProducts.products );
      setBuyProducts({...buyProducts});
    }
  }

  function deleteProduct(index) {
    buyProducts.products.splice(index, 1)
    setBuyProducts( {...buyProducts} )
  }

  function quantityChange(e, index) {
    buyProducts.products[index].quantity = Number( e.target.value );
    buyProducts.products[index].totalPrice = ( buyProducts.products[index].price * Number( e.target.value ) );
    buyProducts.totalPrice = getTotalPrice( buyProducts.products );

    setBuyProducts( {...buyProducts} )
  }

  function getTotalPrice(products) {
    const totalPrice = products.reduce((totalPrice, product) => totalPrice = totalPrice + product.totalPrice, 0);
    
    return totalPrice;
  }

  return (
    <div className="p-10 m-auto bg-blue-50 min-h-screen">
      <div className="border border-gray-300 rounded-lg w-full bg-white p-10 shadow-lg">
        <h1 className="m-0 p-0 text-2xl font-semibold">Restaurant Order System</h1>
        <hr className="my-3 border border-0 border-t-1 border-gray-200" />
        Select products below to add to the ordering guide

        <StockProducts
          onProductAdd={addProduct}
          />
        {buyProducts.products.length > 0 &&
        <>
          <BuyList
            products={buyProducts.products}
            onProductDelete={deleteProduct}
            onQuantityChange={quantityChange}
            />
          <div className="text-right font-semibold text-lg mt-4">
            Total:
            <span className="text-xl ml-2">{(buyProducts.totalPrice).toLocaleString('en-US', {style: 'currency',currency: 'USD'})}</span>
          </div>
        </>
        }

      </div>
    </div>
  );
}

export default App;
