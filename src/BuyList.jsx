import BuyListItem from "./BuyListItem";

const BuyList = (props) => (
  <div className="mt-4">
    <h1 className="font-semibold text-2xl">Buy List</h1>

    <div className="border border-gray-200 p-4 rounded shadow mt-2 grid grid-cols-1 gap-y-4">
      {props.products.map( (product, index) => (
        <BuyListItem
          key={index}
          index={index}
          product={product}
          onQuantityChange={props.onQuantityChange}
          onProductDelete={props.onProductDelete}
          />
      ))}
    </div>
  </div>
);

export default BuyList;