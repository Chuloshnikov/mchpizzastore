import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

type ExtraOption = {
  text: string;
  price: number;
};

type Data = {
  _id: any;
  title: string;
  description: string;
  prices: number[];
  img: string;
  extraOptions: ExtraOption[];
}[];

interface ProductFormProps {
  _id: any;
  title: string;
  description: string;
  prices: number[];
  img: string;
  extraOptions: ExtraOption[];
}

const ProductForm: React.FC<ProductFormProps> = ({
  _id,
  title: existingTitle,
  description: existingDescription,
  prices: existingPrices,
  img: existingImage,
  extraOptions: existingExtraOptions,
}) => {
  const [img, setImg] = useState<string>(existingImage || '');
  const [title, setTitle] = useState<string>(existingTitle || '');
  const [description, setDescription] = useState<string>(existingDescription || '');
  const [prices, setPrices] = useState<number[]>(existingPrices || []);
  const [extraOptions, setExtraOptions] = useState<ExtraOption[]>(existingExtraOptions || []);
  const [extra, setExtra] = useState<any>(null);
  const [goToProducts, setGoToProducts] = useState<boolean>(false);
  const router = useRouter();

  const changePrice = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const currentPrices = [...prices];
    currentPrices[index] = Number(e.target.value);
    setPrices(currentPrices);
  };

  const handleExtraInput = (e: ChangeEvent<HTMLInputElement>) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = () => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Data = { title, description, prices, img, extraOptions };
    if (_id) {
      // update
      await axios.put('/api/productdata', { ...data, _id });
    } else {
      // create
      await axios.post('/api/productdata', data);
    }
    setGoToProducts(true);
  };

  if (goToProducts) {
    router.push('/admin/products');
  }

  return (
    <div>
      <form onSubmit={handleCreate} className="flex flex-col max-w-[400px] mx-auto">
        <label>Product title</label>
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          type="text"
          placeholder="product name..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Product description</label>
        <textarea
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          placeholder="description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Product image URL</label>
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          type="text"
          placeholder="set image URL..."
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <label>Product prices (in USD):</label>
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          type="number"
          placeholder="Small price..."
          value={prices[0] || ''}
          onChange={(e) => changePrice(e, 0)}
        />
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          type="number"
          placeholder="Medium price..."
          value={prices[1] || ''}
          onChange={(e) => changePrice(e, 1)}
        />
        <input
          className="focus:border-yellow-600 focus:border-1 focus:ring-0"
          type="number"
          placeholder="Large price..."
          value={prices[2] || ''}
          onChange={(e) => changePrice(e, 2)}
        />
        <label>Extra options:</label>
        <input
          type="text"
          placeholder="Item"
          name="text"
          onChange={handleExtraInput}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleExtraInput}
        />
        <div
          className="bg-yellow-400 text-white p-1 px-2 text-base font-semibold hover:bg-yellow-500 duration-300 text-center"
          onClick={handleExtra}
        >
          Add Extra Option
        </div>
        <div>
          {extraOptions?.map((option, index) => (
            <span className="text-yellow-950 font-semibold mr-2" key={index}>
              {option?.text}
            </span>
          ))}
        </div>
        <button
          className="bg-yellow-400 text-white p-1 px-2 text-base font-semibold hover:bg-yellow-500 duration-300 mt-2"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default ProductForm;