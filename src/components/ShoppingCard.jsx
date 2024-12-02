
const ShoppingCard = ({ products }) => {



  const { image, name, price, discount_percentage, store_name } = products;

 

  return (
    <div className="">
      <img className="w-3/12" src={image} />
      <h1>{name}</h1>
      <h3>{price}</h3>
      <h3>{discount_percentage}</h3>
      <h3>{store_name}</h3>
    </div>
  );
};

export default ShoppingCard;