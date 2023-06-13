import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import Order from '../../../../models/Order';

type Data = {
    _id: any;
    customer: string;
    address: string;
    total: number;
    status: number;
    method: number;
  }[];

  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const {method} = req;

    await dbConnect();

    if (method === 'GET') {
        if (req.query?.id) {
            res.json(await Order.findOne({_id: req.query.id}));
        } else {
            res.json(await Order.find());
        }
    }

    if (method === 'POST') {
        try {
            const order = await Order.create(req.body);
            res.status(201).json(order);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    if (method === 'PUT') {

    }
  }