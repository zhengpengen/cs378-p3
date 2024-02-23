import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];




function App() {

  var tempDict = menuItems.reduce((acc, item) => {
    acc[item.title] = 0;
    return acc;
  }, {});

  var costDict = menuItems.reduce((acc, item) => {
    acc[item.title] = item.price;
    return acc;
  }, {});
  

  const [totalDict, changeTotal] = useState(tempDict);
  const [totalCount, updateSum] = useState("0.00");
  

  function changeEntry(title, value) {
    var newDict = totalDict;
    newDict[title] = Math.max(0, newDict[title] + value);
    changeTotal(newDict);
    var newSum = 0;
    for(var key in newDict){
      newSum += newDict[key]*costDict[key];
    }
    updateSum(newSum.toFixed(2));
  }

  function clearAll(){
    const newDict = Object.keys(tempDict).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});
    changeTotal(newDict);
    updateSum((0).toFixed(2));
  }

  function checkOut(){
    if(totalCount === "0.00") {
      window.alert("No items in cart");
      return;
    }

    console.log(totalDict);
    var order = "Order placed:\n";
    for(var key in totalDict){
      if(totalDict[key] > 0) order += totalDict[key] + " " + key + "\n";
    }
    console.log(order);
    
    window.alert(order);
  }

  return (
    <div>
      <div className='container'> 

      

        {/* <div>{totalCount}</div>
        <button onClick={clearAll}>CLEAR ALL</button> */}

        <MenuHeader 
          logo="picobrain_logo.jpg"
          header1="Relax the Brain and Enjoy the Food"
          header2="Nutritional Mind-Enhancing Cuisine"
        />


        <div className='menu'>
          {menuItems.map((item) => (
            <MenuItem 
              title={item.title}
              description={item.description}
              imagename={item.imageName}
              price={item.price}
              dict = {totalDict}
              changeEntry = {changeEntry}
            />))}
        </div>
      </div>
      <div class="footer">
        <div className='row'>
          <div className='col-1'>
          </div>
          <div className='col-4 subtotal'>
            <div>Subtotal:</div> 
            <div>${totalCount}</div> 
          </div>
          <div className='col-3 btn-group'>
            <button 
              type="button" 
              class="btn btn-primary fitfull"
              onClick={() => checkOut()}>Order</button>
          </div>
          <div className='col-3 btn-group'>
            <button 
              type="button" 
              class="btn btn-primary fitfull"
              onClick={() => clearAll()}>Clear All</button>
          </div>
          <div className='col-1'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
