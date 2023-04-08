// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {pizza1} from '../../assets/index';

type Data = {
  _id: number,
  title: string,
  description: string,
  price: number[],
  img: string,
}

const productData = [
  {
  _id: 1,
  title: "GORGONZOLA",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Accusamus corporis sequi 
  nesciunt ab pariatur maiores quo aliquam quis, officiis, 
  consequuntur eius rerum adipisci? Nemo suscipit aliquid rerum deserunt eveniet veniam?`,
  price: [19.99, 22.99, 27.99],
  img: pizza1
  },
  {
    _id: 2,
    title: "GORGONZOLA",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Accusamus corporis sequi 
    nesciunt ab pariatur maiores quo aliquam quis, officiis, 
    consequuntur eius rerum adipisci? Nemo suscipit aliquid rerum deserunt eveniet veniam?`,
    price: [19.99, 22.99, 27.99],
    img: pizza1
    },
    {
      _id: 3,
      title: "GORGONZOLA",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Accusamus corporis sequi 
      nesciunt ab pariatur maiores quo aliquam quis, officiis, 
      consequuntur eius rerum adipisci? Nemo suscipit aliquid rerum deserunt eveniet veniam?`,
      price: [19.99, 22.99, 27.99],
      img: pizza1
      },
      {
        _id: 4,
        title: "GORGONZOLA",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Accusamus corporis sequi 
        nesciunt ab pariatur maiores quo aliquam quis, officiis, 
        consequuntur eius rerum adipisci? Nemo suscipit aliquid rerum deserunt eveniet veniam?`,
        price: [19.99, 22.99, 27.99],
        img: pizza1
        },
        {
          _id: 5,
          title: "GORGONZOLA",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Accusamus corporis sequi 
          nesciunt ab pariatur maiores quo aliquam quis, officiis, 
          consequuntur eius rerum adipisci? Nemo suscipit aliquid rerum deserunt eveniet veniam?`,
          price: [19.99, 22.99, 27.99],
          img: pizza1
          },
          {
            _id: 6,
            title: "GORGONZOLA",
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Accusamus corporis sequi 
            nesciunt ab pariatur maiores quo aliquam quis, officiis, 
            consequuntur eius rerum adipisci? Nemo suscipit aliquid rerum deserunt eveniet veniam?`,
            price: [19.99, 22.99, 27.99],
            img: pizza1
            },
            {
              _id: 7,
              title: "GORGONZOLA",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Accusamus corporis sequi 
              nesciunt ab pariatur maiores quo aliquam quis, officiis, 
              consequuntur eius rerum adipisci? Nemo suscipit aliquid rerum deserunt eveniet veniam?`,
              price: [19.99, 22.99, 27.99],
              img: pizza1
              },
              {
                _id: 8,
                title: "GORGONZOLA",
                description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Accusamus corporis sequi 
                nesciunt ab pariatur maiores quo aliquam quis, officiis, 
                consequuntur eius rerum adipisci? Nemo suscipit aliquid rerum deserunt eveniet veniam?`,
                price: [19.99, 22.99, 27.99],
                img: pizza1
                },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(productData)
}