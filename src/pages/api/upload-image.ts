import { NextApiRequest, NextApiResponse } from 'next'
import AWS from 'aws-sdk'
import { IncomingForm } from 'formidable'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = new IncomingForm()

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors du traitement du fichier' })
      }

      const file = files.file as any
      const fileContent = fs.readFileSync(file.path)

      const params = {
        Bucket: process.env.AWS_S3_BUCKET_NAME!,
        Key: `uploads/${Date.now()}-${file.name}`,
        Body: fileContent,
        ContentType: file.type,
        ACL: 'public-read',
      }

      try {
        const uploadResult = await s3.upload(params).promise()
        res.status(200).json({ url: uploadResult.Location })
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors du téléchargement sur S3' })
      }
    })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}