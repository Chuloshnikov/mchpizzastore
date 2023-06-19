import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import Wine from '../../../../models/Wine';

type Data = {
  _id: any;
  title: string;
  origin: string;
  prices: number[];
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  await dbConnect();

  if (method === 'GET') {
    if (req.query?.id) {
      const wine = await Wine.findOne({ _id: req.query.id });
      res.json(wine);
    } else {
      const winecard = await Wine.find();
      res.json(winecard);
    }
  }

  if (method === 'POST') {
    const { title, origin, prices } = req.body;

    const wineDoc = await Wine.create({
      title,
      origin,
      prices,
    });
    res.json(wineDoc);
  }

  if (method === 'PUT') {
    const { title, origin, prices, _id } = req.body;
    await Wine.updateOne({ _id }, { title, origin, prices });
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Wine.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}