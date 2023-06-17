import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../../lib/dbConnect';
import Event from '../../../../models/Event';

type Data = {
  _id: any;
  img: string;
  title: string;
  subtitle: string;
  eventDate: string;
  description: string;
  
}[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  await dbConnect();

  if (method === 'GET') {
    if (req.query?.id) {
      const event = await Event.findOne({ _id: req.query.id });
      res.json(event);
    } else {
      const events = await Event.find();
      res.json(events);
    }
  }

  if (method === 'POST') {
    const { title, subtitle, eventDate, description, img } = req.body;
    const eventDoc = await Event.create({
      title,
      subtitle,
      eventDate,
      description,
      img,
    });
    res.json(eventDoc);
  }

  if (method === 'PUT') {
    const { title, subtitle, eventDate, description, img, _id } = req.body;
    await Event.updateOne({ _id }, { title, subtitle, eventDate, description, img });
    res.json(true);
  }

  if (method === 'DELETE') {
    if (req.query?.id) {
      await Event.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}