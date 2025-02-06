/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import '../App.css'
import '../index.css';

function Service_Card({image,title, desc}){
    return(

<div className="icon--card">
    <div className="serv--icon">
    <img src={image} alt={title}  className="h-24"/>
    </div>


<div className="servicecard--text">
<h4 className="text-white text-2xl mt-3 font-bold">{title}</h4>
<p className="text-white text-lg">{desc}</p>
</div>

</div>
    );
}export default Service_Card;

