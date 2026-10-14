import { useState } from 'react'
import { useOrder } from "./hooks/useOrder.ts";
import MenuItem  from "./components/MenuItem"
function App() {
  
const {
order,
tip,
setTip,
addItem,
removeItem,
placeOrder
} = useOrder()


return (

<MenuItem
addItem = {addItem}

/>

<main className= "flex h-screen justify-left">

  <h3>Menu</h3>

  <div className = "flex flex-col">
   {data.map((guitar))}

  </div>


</main>

);

}

export default App
