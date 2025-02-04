// eslint-disable-next-line no-unused-vars
import React from "react";
import "../index.css"
import "../App.css"

function Num_bloc(){
return(
 <div className="flex gap-4 p-10  items-center justify-between">

{/**The first text area begins */}
<div className="flex gap-4   items-center border-4 border-[var(--main-color)] p-10 ">
 <div >
    <h2 className="text-7xl text-white font-bold ">25</h2>
 </div>

 <div className="text-white">
    <p>Years experience<br/> working</p>
 </div>
 </div>

 <div className="flex flex-col text-white">
    <p>About Us</p>
    <h3 className="text-3xl  font-bold">Creative Solutions<br/>by professions<br/>designers</h3>
 </div>

 <div>
    <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit<br></br>. Exercitationem necessitatibus repellendus excepturi optio <br></br>reprehenderit ab veniam et aspernatur, sed eligendi<br></br>consequuntur id reiciendis, a nemo commodi ex minus. Aut,<br></br> doloremque.</p>

    <button className="text-white bg-[var(--second-color)] p-2 rounded-full mt-4 font-bold ">Continue reading</button>
 </div>

 </div>
);
}export default Num_bloc;