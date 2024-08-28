import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useCallback, useEffect, useState } from "react";
import fetchData from "../../../fetchData";
import useForm from "../../hooks/useForm";


const ShoppingCart = () => {
  const {cart, dispatch} = useCart()
  const [data, setData] = useState(null)
  const {stateForm, handleChangeState, handleSubmit} = useForm({
    completeName: '',
    emailAddress: '',
    address: '',
    phoneNumber: '',
    courier: '',
    payment: ''
  })
  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetchData({
        url: "/api/checkout/meta",
      });
      setData(response);
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  useEffect(() => {
    fetchProducts();

    return () => {
      setData(null);
    };
  }, [fetchProducts]);

  const isDisabledButton = Object.keys(stateForm).filter(key => stateForm[key] === '').length === Object.keys(stateForm).length

  return (
    <section className="md:py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div
            className="w-full px-4 mb-4 md:w-8/12 md:mb-0"
            id="shopping-cart"
          >
            <div className="flex pb-3 mt-8 mb-4 border-b border-gray-200 flex-start md:border-b-0">
              <h3 className="text-2xl">Shopping Cart</h3>
            </div>

            <div className="hidden mb-4 border-b border-gray-200 md:block">
              <div className="flex items-center pb-2 -mx-4 flex-start">
                <div className="flex-none px-4">
                  <div className="" style={{ width: 90 }}>
                    <h6>Photo</h6>
                  </div>
                </div>
                <div className="w-5/12 px-4">
                  <div className="">
                    <h6>Product</h6>
                  </div>
                </div>
                <div className="w-5/12 px-4">
                  <div className="">
                    <h6>Price</h6>
                  </div>
                </div>
                <div className="w-2/12 px-4">
                  <div className="text-center">
                    <h6>Action</h6>
                  </div>
                </div>
              </div>
            </div>
              {cart.length > 0 ? 
              (
                cart.map((item) =>(
                  <div
                  className="flex flex-wrap items-center mb-4 -mx-4 flex-start"
                  data-row="1"
                  key={item.id}
                >
                  <div className="flex-none px-4">
                    <div className="" style={{ width: 90, height: 90 }}>
                      <img
                        src={item.imgUrls[0]}
                        alt={item.title}
                        className="object-cover w-full h-full rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="flex-1 w-auto px-4 md:w-5/12">
                    <div className="">
                      <h6 className="text-lg font-semibold leading-8 md:text-xl">
                        {item.title}
                      </h6>
                      <span className="text-sm md:text-lg">Office Room</span>
                      <h6 className="block text-base font-semibold md:text-lg md:hidden">
                        Rp {item.price.toLocaleString('id-ID')}
                      </h6>
                    </div>
                  </div>
                  <div className="flex-none hidden w-auto px-4 md:flex-1 md:w-5/12 md:block">
                    <div className="">
                      <h6 className="text-lg font-semibold">Rp {item.price.toLocaleString('id-ID')}</h6>
                    </div>
                  </div>
                  <div className="w-2/12 px-4">
                    <div className="text-center">
                      <button
                      onClick={() => dispatch({type : 'REMOVE_FROM_CART', payload: item})}
                        data-delete-item="1"
                        className="px-3 py-1 text-red-600 border-none focus:outline-none"
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
                ) )
              )
              :
              (
                <p id="cart-empty" className="py-8 text-center ">
                Ooops... Cart is empty
                <Link to="/" className="ml-2 underline">
                  Shop Now
                </Link>
              </p>
              )}
          </div>
          <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
            <div className="px-4 py-6 bg-gray-100 md:p-8 md:rounded-3xl">
              <form onSubmit={handleSubmit}>
                <div className="flex mb-6 flex-start">
                  <h3 className="text-2xl">Shipping Details</h3>
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="completeName" className="mb-2 text-sm">
                    Complete Name
                  </label>
                  <input
                    
                    type="text"
                    id="completeName"
                    name="completeName"
                    value={stateForm.completeName}
                    onChange={handleChangeState}
                    className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                    placeholder="Input your name"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    
                    type="email"
                    id="email"
                    name="emailAddress"
                    value={stateForm.emailAddress}
                    onChange={handleChangeState}
                    className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                    placeholder="Input your email address"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="address" className="mb-2 text-sm">
                    Address
                  </label>
                  <input
                    
                    type="text"
                    id="address"
                    name="address"
                    value={stateForm.address}
                    onChange={handleChangeState}
                    className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                    placeholder="Input your address"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="phoneNumber" className="mb-2 text-sm">
                    Phone Number
                  </label>
                  <input
                    
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={stateForm.phoneNumber}
                    onChange={handleChangeState}
                    className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                    placeholder="Input your phone number"
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="courier" className="mb-2 text-sm">
                    Choose Courier
                  </label>
                  <div className="flex flex-wrap -mx-2">
                    {data ? data.couriers.map(item => (
                      <div key={item.id} className="w-6/12 h-24 px-2 mb-4">
                        <button
                        type="button"
                          onClick={() => handleChangeState({target: {
                            name: 'courier', value: item.id
                          }})}
                          className="flex items-center justify-center w-full h-full bg-white border border-gray-200 focus:border-red-200 rounded-xl focus:outline-none"
                        >
                          <img
                            src={item.imgUrl}
                            alt={item.name}
                            className="object-contain max-h-full"
                          />
                        </button>
                      </div>
                    )) : (Array(2).fill().map((_, index) => (
                      <div key={index} className="w-6/12 h-24 px-2 mb-4">
                        <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl">
                          
                        </div>
                      </div>
                    )))}
                  </div>
                </div>

                <div className="flex flex-col mb-4">
                  <label htmlFor="payment" className="mb-2 text-sm">
                    Choose Payment
                  </label>
                  <div className="flex flex-wrap -mx-2">
                  {data ? data.payments.map((item,index) => (
                      <div key={index} className="w-6/12 h-24 px-2 mb-4">
                        <button
                        type="button"
                          onClick={() => handleChangeState({target: {name: 'payment', value: item.id}})}
                          className="flex items-center justify-center w-full h-full bg-white border border-gray-200 focus:border-red-200 rounded-xl focus:outline-none"
                        >
                          <img
                            src={item.imgUrl}
                            alt={item.name}
                            className="object-contain max-h-full"
                          />
                        </button>
                      </div>
                    )) : (Array(4).fill().map((_, index) => (
                      <div key={index} className="w-6/12 h-24 px-2 mb-4">
                        <div className="w-full h-full bg-gray-300 animate-pulse rounded-xl">
                          
                        </div>
                      </div>
                    )))}
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    // disabled={!isDisabledButton}
                    className="w-full px-6 py-3 text-lg text-black transition-all duration-200 bg-pink-400 rounded-full hover:bg-black hover:text-pink-400 focus:outline-none focus:text-black"
                  >
                    Checkout Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
