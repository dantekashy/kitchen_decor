// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';
import '../App.css';
import Card from '../components/Cards';
import mainBg from "../assets/images/main123.jpeg"; 
import mianBg2 from "../assets/images/kit2.jpeg";

function Design(){
 return (
    <section className="bg-[var(--main-color)] flex  gap-4 p-20 items-center justify-evenly ">
    <Card
     text1="Country collection"
     text2="We will measure your kitchen ask you questions and start the actual design process with you "
     bgImage={mainBg}
    />
    <Card
    text1="Concord collection"
    text2="We create amazing experiences"
    bgImage={mianBg2}
    />
    <Card
    
    text1="Classic collection"
     text2="We create amazing experiences"
     bgImage={mainBg}
    />
    </section>
 );

}export default Design;