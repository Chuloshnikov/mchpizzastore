// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import Product from "../../../../models/Product";

type Data = {
  _id: {};
  title: string;
  description: string;
  prices: number[];
  img: string;
  extraOptions: [{text: string, price: number}];
}[];


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {method} = req;

  await dbConnect();

  if (method === 'GET') {
    if (req.query?.id) {
        res.json(await Product.findOne({_id: req.query.id}));
    } else {
        res.json(await Product.find());
    }

    if (method === 'POST')  {
        try {
            const productdata = await Product.create(req.body); 
            res.status(201).json(productdata);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
}

}