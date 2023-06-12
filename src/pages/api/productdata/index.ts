import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import Product from '../../../../models/Product';

type Data = {
  _id: any;
  title: string;
  description: string;
  prices: number[];
  img: string;
  extraOptions: [{ text: string; price: number }];
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  await dbConnect();

  if (method === 'GET') {
    if (req.query?.id) {
      const product = await Product.findOne({ _id: req.query.id });
      res.json(product);
    } else {
      const products = await Product.find();
      res.json(products);
    }
  }

  if (method === 'POST') {
    const { title, description, prices, img, extraOptions } = req.body;

    const productDoc = await Product.create({
      title,
      description,
      prices,
      img,
      extraOptions,
    });
    res.json(productDoc);
  }

  if (method === 'PUT') {
    const { title, description, prices, img, extraOptions, _id } = req.body;
    await Product.updateOne({ _id }, { title, description, prices, img, extraOptions });
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Product.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}