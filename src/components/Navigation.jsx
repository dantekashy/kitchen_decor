// eslint-disable-next-line no-unused-vars
import React from "react";
import '../App.css';

function Navigation(){
return (
<header className=' flex items-center justify-between shadow-md p-5'>

  <div className="ml-10">
  <h2 className='text-2xl font-bold text-white '>KITCHOR</h2>
  </div>
    
    <nav >
      <ul className="flex space-x-6 text-white font-medium ">
        <li>HOME</li>
        <li>KITCHENS</li>
        <li>PROJECTS</li>
        <li>PAGES</li>
        <li>SHOP</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
    </nav>
</header>

);

}export default Navigation;