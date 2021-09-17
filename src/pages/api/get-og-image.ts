
import type { NextApiRequest, NextApiResponse } from 'next'
import getImage from 'utlis/get-image';

export default async function handler(res: NextApiResponse, req: NextApiRequest) {
  const { body: { path, slug } } = req;
  console.log({ path })

  try {

    const publicPath = await getImage(path, slug)

    res.send(publicPath);
  } catch (e) {
    res.send({
      status: 500,
      message: `Error in serverless function: ${e.message}`,
    })
  }
}

