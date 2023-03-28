// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Auth } from 'aws-amplify'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await Auth.signOut()
    res.status(200).json('Signed out.')
  } catch (err) {
    console.error(err)
    res.status(500).json('Failed to signout.')
  }
}
