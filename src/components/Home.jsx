import React, { useEffect, useState } from 'react'
import toast, {Toaster} from 'react-hot-toast';
import Axios from 'axios'


const Home = ({count,setCount}) => {
  
  const [cart,setCart]=useState({});
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

      async function fetchData(){
        setLoading(true);
        setError(null);
        try {
         const url='https://fakestoreapi.com/products';
         const response=await Axios.get(url);
         setProduct(response.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
     }
     fetchData()
    },[]);

    function buttonHandler(id) {
      setCart((prevCart)=>{
        const isInCart=prevCart[id];
        if (isInCart) {
          // setButtonText('REMOVE FROM CART')
          // setAddToCart(true)
          toast.error('Item Removed from Cart')
          setCount(count-1);
        } else {
          // setButtonText('ADD TO CART')
          // setAddToCart(false)
          toast.success('Item Added to Cart');
          setCount(count+1);
        }
        return {...prevCart,[id]:!isInCart};
      });
  } 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (product.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 px-8 mt-20 mx-auto max-w-[1400px]">
  {product.map((item) => (
    <div
      key={item.id}
      className="bg-[#f9f9f9] h-auto w-80 border-none rounded-xl 
                 hover:scale-105 hover:shadow-2xl transition-all 
                 duration-300 ease-in-out flex flex-col items-center 
                 justify-center p-3"
    >
      <div className="text-black font-medium text-xl text-center mt-2">
        {item.title}
      </div>
      <div className="text-gray-700 font-light text-sm text-center mt-2">
        {item.description}
      </div>
      <div className="w-40 h-40 flex justify-center mt-3">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="flex flex-row justify-between w-full mt-4 px-4">
        <div className="text-green-500 font-bold text-xl">${item.price}</div>
        <button
          onClick={() => buttonHandler(item.id)}
          className="text-black text-sm tracking-wide font-medium border-2 border-black rounded-3xl px-3 py-1"
        >
          {cart[item.id] ? "REMOVE FROM CART" : "ADD TO CART"}
        </button>
      </div>
    </div>
  ))}
</div>
<Toaster position="top-center" reverseOrder={false} />

    </>
  )
}

export default Home
