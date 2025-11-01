// import ProductsList from "./components/ProductsList"
// import UserList from "./components/UserList"

// import Product from "./components/Product"
// import Person from "./components/Person"

// import Card from "./components/Card"


// const ValidPassword = () => <h1>Valid Password</h1>
// const InvalidPassword = () => <h1>Invalid Password</h1>

// const Password = ({isValid}) => {
//   return (
//     isValid ? <ValidPassword/> : <InvalidPassword/>
//   )
// }

// const Cart = () => {
//   const items = ["qwe", "qwe", "qwe", "qwe", "qwe", "qwe"]
//   return (
//     <div>
//       <h1>Cart🛒🛒🛒</h1>
//       {items.length > 0 ? (
//         <div><div>{items.length}</div>
//         <ul>
//         {items.map(item => (
//           <li key={Math.random()}>
//             {item}
//           </li>
//         ))}
//       </ul>
//         </div>
        
      
//       ) : (
//         <div>Cart is empty</div>
//       )}

//     </div>
//   )
// }

import Weather from "./components/Weather"
import UserStatus from "./components/UserStatus"
import Greeting from "./components/Greeting"
import { useState } from "react"

const Move =()=> {
  const copyHandler = () => {
    console.log("Stop")
  }
  return (
    <p onMouseMove={(e) => {
      const x = e.clientX
      const y = e.clientY
      console.log(x);
      console.log(y);
      
    }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus voluptas magni cupiditate repellendus reprehenderit nobis voluptates? Accusamus ea, eum, molestias laborum perspiciatis repellendus non numquam, autem nam velit enim consequatur.
    </p>
  )
}
const Copy =()=> {
  const copyHandler = () => {
    console.log("Stop")
  }
  return (
    <p onCopy={() => {
      console.log("stop");
      
    }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus voluptas magni cupiditate repellendus reprehenderit nobis voluptates? Accusamus ea, eum, molestias laborum perspiciatis repellendus non numquam, autem nam velit enim consequatur.
    </p>
  )
}

function App() {
  const [state, setState] = useState("")
  return (
  <>
  <Move/>
  {/* <Weather temperature={14}/>
  <Weather temperature={24}/>
  <Weather temperature={34}/>
  <UserStatus isAdmin={true} loggedIn={true}/>
  <UserStatus isAdmin={false} loggedIn={true}/>
  <UserStatus isAdmin={true} loggedIn={true}/>
  <Greeting timeOfDate={"afternoon"}/>
  <Greeting timeOfDate={"morning"}/> */}
  
  </>
  )
}

export default App