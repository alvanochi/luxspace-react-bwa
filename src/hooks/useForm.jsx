import { useState } from "react"
import { useCart } from "../context/CartContext"
import fetchData from "../../fetchData"
import { useNavigate } from "react-router-dom"

export default function useForm(initial) {
    const [stateForm, setStateForm] = useState(initial)
    const {dispatch, cart} = useCart()
    const navigate = useNavigate()
  const handleChangeState = e =>{
    setStateForm((prev) => (
        {...prev,
             [e.target.name] : e.target.value}
            )
        )
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      const response = await fetchData({
        url: '/api/checkout',
        method: 'POST',
        body: JSON.stringify({
          ...stateForm, cart: cart.map(item => ({id: item.id, qty: item.qty}))})
      }) 
      if(response){
        alert('Thank you for your order!')
        dispatch({type: "RESET_CART"})
        setStateForm(initial)
        navigate('/success')
      }
    }
    catch(e){
        console.log(e)
    }
  }
  return {stateForm, handleChangeState, handleSubmit}
}
