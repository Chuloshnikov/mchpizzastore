import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

type Data = {
    _id: any;
    img: string;
    title: string;
    subtitle: string;
    eventDate: string;
    description: string;
  }[];
  
  interface ProductFormProps {
    _id: any;
    img: string;
    title: string;
    subtitle: string;
    eventDate: string;
    description: string;
  }

const EventForm: React.FC<ProductFormProps> = ({
    _id,
    img: existingImg,
    title: existingTitle,
    subtitle: existingSubtitle,
    eventDate: existingEventDate,
    description: existingDescription,
}) => {
    const [img, setImg] = useState<string>(existingImg || '');
    const [file, setFile] = useState<any>(null);
    const [title, setTitle] = useState<string>(existingTitle || '');
    const [subtitle, setSubtitle] = useState<string>(existingSubtitle || '');
    const [eventDate, setEventDate] = useState<string>(existingEventDate || '');
    const [description, setDescription] = useState<string>(existingDescription || '');
    const [goToEvents, setGoToEvents] = useState<boolean>(false);
    const router = useRouter();


    const handleCreate = async () => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "mchpizzauploads");
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/duufrpcxn/image/upload", data);
            const url  = uploadRes.data;
      const eventData = {
                    title,
                    subtitle,
                    eventDate,
                    description,
                    img: url,
                };
                if (id) {
                    await axios.put("/api/eventdata", {...eventData, _id});
                } else {
                    await axios.post("/api/eventdata", eventData);
                }
                setGoToEvents(true);
                
            } catch (err) {
                console.log(err);
            }
    }

    if (goToEvents) {
        router.push('/admin/events');
    }

  return (
        <div>
            <form onSubmit={handleCreate} className="flex flex-col max-w-[400px] mx-auto">
                <label>Choose an image</label>
                    <input type="file" onChange={(e) => setImg(e.target.files)} />
                <label>Event title</label>
                    <input
                    className="focus:border-yellow-600 focus:border-1 focus:ring-0"
                    type="text"
                    placeholder="Event name..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <label>Event subtitle</label>
                    <input
                    className="focus:border-yellow-600 focus:border-1 focus:ring-0"
                    type="text"
                    placeholder="Event name..."
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    />
                <label>Event date</label>
                    <input
                        className="focus:border-yellow-600 focus:border-1 focus:ring-0"
                        type="text"
                        placeholder="Event date..."
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                <label>Event description</label>
                    <textarea
                        className="focus:border-yellow-600 focus:border-1 focus:ring-0"
                        placeholder="Event description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                />
            <button
                className="bg-yellow-400 text-white p-1 px-2 text-base font-semibold hover:bg-yellow-500 duration-300 mt-2"
                type="submit"
                >
                Create
            </button>
      </form>
    </div>
  )
}

export default EventForm