// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

async function scrape(req, res) {
  if (req.method === "POST") {
    const { urls } = req.body;

    const urlArray = urls.split(",").map((rawUrl) => {
      const url = rawUrl.trim();
      if (url.startsWith("http")) {
        return url;
      }
      return "https://".concat(url);
    });

    const results = await Promise.allSettled(urlArray.map((url) => axios(url)));

    const formattedResponse = results.map((response, index) => ({
      url: urlArray[index],
      html: response.value?.data,
      error: response.reason?.message,
    }));
    res.status(200).json(formattedResponse);
  }
}

export default scrape;
