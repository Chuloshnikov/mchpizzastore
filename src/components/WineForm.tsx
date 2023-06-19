import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

type Data = {
  _id: any;
  title: string;
  origin: string;
  prices: number[];
}[];

interface WineFormProps {
  _id: any;
  title: string;
  origin: string;
  prices: number[];
};

const WineForm: React.FC<WineFormProps> = ({
  _id,
  title: existingTitle,
  origin: existingOrigin,
  prices: existingPrices,
}) => {
  const [title, setTitle] = useState<string>(existingTitle || '');
  const [origin, setOrigin] = useState<string>(existingOrigin || '');
  const [prices, setPrices] = useState<number[]>(existingPrices || []);
  const [goToWine, setGoToWine] = useState<boolean>(false);
  const router = useRouter();
  

  const changePrice = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const currentPrices = [...prices];
    currentPrices[index] = Number(e.target.value);
    setPrices(currentPrices);
  };


  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Data = { title, origin, prices };
    if (_id) {
      // update
      await axios.put('/api/winedata', { ...data, _id });
    } else {
      // create
      await axios.post('/api/winedata', data);
    }
    setGoToWine(true);
  };

  if (goToWine) {
    router.push('/admin/wine');
  }

  return (
    <div>
      <form onSubmit={handleCreate} className="flex flex-col max-w-[400px] mx-auto">
        <label>Wine title</label>
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          type="text"
          placeholder="wine name..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Wine origin</label>
        <textarea
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          placeholder="origin..."
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <label>Wine prices (in USD):</label>
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          type="number"
          placeholder="0.5L price..."
          value={prices[0] || ''}
          onChange={(e) => changePrice(e, 0)}
        />
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          type="number"
          placeholder="1L price..."
          value={prices[1] || ''}
          onChange={(e) => changePrice(e, 1)}
        />
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          type="number"
          placeholder="2L price..."
          value={prices[2] || ''}
          onChange={(e) => changePrice(e, 2)}
        />
        <button
          className="bg-yellow-400 text-white p-1 px-2 text-base font-semibold hover:bg-yellow-500 duration-300 mt-2"
          type="submit"
        >
          Create/Update
        </button>
      </form>
    </div>
  );
};

export default WineForm;