import { Request, Response } from 'express';

export const getHello = (req: Request, res: Response): void => {
  res.send('Hello, World!');
};

export const postData = (req: Request, res: Response): void => {
  const data = req.body;
  res.json({
    message: 'Data received successfully!',
    receivedData: data
  });
};
