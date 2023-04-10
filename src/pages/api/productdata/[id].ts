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
  const { method, query: { id } } = req;

  dbConnect();

  switch (method) {
    case "GET": {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    break;

    case "PUT": {
        try {
            const productdata = await Product.create(req.body); 
            res.status(201).json(productdata);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    break;

    case "DELETE": {
        try {
            const productdata = await Product.create(req.body); 
            res.status(201).json(productdata);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    break;
}
}