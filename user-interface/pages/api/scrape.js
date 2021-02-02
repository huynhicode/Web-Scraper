// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const { urls } = req.body;
    const urlArray = urls.split(",").map((url) => url.trim());
    const results = await Promise.all(urlArray.map((url) => axios(url)));
    const formattedResponse = results.map((response, index) => ({
      url: urlArray[index],
      html: response.data,
    }));
    res.status(200).json(formattedResponse);
  }
};
