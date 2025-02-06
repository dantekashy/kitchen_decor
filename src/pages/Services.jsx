// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';
import Service_Card from '../components/Service_card';
import idea from '../assets/images/idea.png';
import hand from '../assets/images/handshake.png';
import loan from '../assets/images/loan.png';
import rel from '../assets/images/reliability.png';



function Services(){
  return(
    <section className='bg-[var(--main-color)] flex  flex-col items-center space-y-10'>
    <div>
        <p className='text-[var(--second-color)]  text-2xl text-center '>Why choose us?</p>
        <h2 className='text-white text-4xl font-bold text-center'>Extremely high standards of<br/>Customer satisfaction</h2>
    </div>
    <div className="flex flex-wrap justify-center gap-4 p-4 ">
        <Service_Card 
        image={idea}
        title="Full service"
        desc="wondering where to start"
        />
         <Service_Card 
        image={hand}
        title="Full service"
        desc="wondering where to start"
        />
         <Service_Card 
        image={loan}
        title="Full service"
        desc="wondering where to start"
        />
         <Service_Card 
        image={rel}
        title="Full service"
        desc="wondering where to start"
        />
    </div>
    </section>
  );

}export default Services;