// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default (req, res) => {
  if (req.method === "POST") {
    const { url } = req.body;
    axios(url)
    .then((response) => {
      res.status(200).json({ html: response.data });
    })
    .catch(console.error);
  }
}
