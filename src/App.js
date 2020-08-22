import React from 'react';

import './App.css';
import ProductTable from "./ProductTable";

var array=[{price:10,name:'pull',category:'clothes'},
{price:200,name:'smartphone',category:'electronics'},
{price:45,name:'jeans',category:'clothes'}]
function App() {
  return (
    <div id="table">
      <ProductTable tab={array}/>
    </div>
  );
}

export default App;
