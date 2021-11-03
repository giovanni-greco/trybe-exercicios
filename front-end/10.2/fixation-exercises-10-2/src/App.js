import logo from './logo.svg';
import './App.css';
import Image from './Image'
import UserProfile from './UserProfile';
import Order from './Orders';
import React from 'react';

// function App() {

//   const userData = {
//     name: 'Giovanni',
//     email: 'giovanni182@gmail.com',
//     avatar: 'data:image/png;base64,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'
//   }

//   return (
//   <UserProfile user={userData} />
//   );
// }


class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",  
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         <Order order={headphone} />
         <Order order={energyDrink} />
      </div>
    );
  }
}

export default App;
