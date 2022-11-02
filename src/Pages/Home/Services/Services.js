import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services , setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    })
  return (
    <div>
        <div className='text-center'>
            <p className="text-3xl font-bold text-orange-700">Services</p>
            <h2 className="text-5xl font-semibold mb-10 ">Our Services Area</h2>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero amet placeat iusto quia modi accusamus repudiandae cum, nesciunt a beatae,  neque tenetur commodi!</p>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <ServiceCard key={service._id} service ={service}></ServiceCard>)
            }
        </div>

        <div className='mt-10 mb-20 text-center'>
  <button className="btn btn-outline btn-secondary">More Services</button>
  </div>
    </div>
  )
}

export default Services