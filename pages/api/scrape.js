// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

function scrape(req, res) {
  if (req.method === "POST") {
    const { urls } = req.body;

    const cleanedUrls = urls.split(",").map((rawUrl) => {
      const url = rawUrl.trim();
      if (url.startsWith("http")) {
        return url;
      }
      return "https://".concat(url);
    });

    const promiseArray = cleanedUrls.map((url) => axios(url));

    const combinedPromise = Promise.allSettled(promiseArray);

    combinedPromise.then((allResults) => {
      const formattedResponse = allResults.map((result, index) => ({
        url: cleanedUrls[index],
        html: result.value?.data,
        error: result.reason?.message,
      }));
      res.status(200).json(formattedResponse);
    });
  }
}

export default scrape;
