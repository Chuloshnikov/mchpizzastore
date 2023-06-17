import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import axios from "axios";

const EventsPage = () => {
    const [events, setEvents] = useState();
    useEffect(() => {
        axios.get("/api/eventdata").then(response => {
            setEvents(response.data);
        });
        
    },  []);
    console.log(events);
  return (
    <div>
        <div>
            {events?.map(event => (
                <div key={event._id} className='mx-auto mt-10 mb-12 shadow-bannerShadow p-10'>
                <div>
                    <Image 
                    src={event?.img} 
                    alt="pizza event"
                    width={800}
                    height={500}
                    className="mx-auto"
                    />
                </div>
                <div className='flex flex-col gap-5 max-w-[900px] mx-auto text-center mt-10 text-yellow-950'>
                    <h1 className='font-bold text-2xl'>{event?.title}</h1>
                    <h2 className='font-bold text-lg'>
                        {event?.subtitle}
                    </h2>
                    <p className='font-semibold text-base'>
                        {event?.eventDate}
                    </p>
                    <p className='font-semibold text-sm'>
                       {event?.description}
                    </p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default EventsPage;