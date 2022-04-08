// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}*/

const cors = require("micro-cors")();
import getRandom from "./helpers/quotesRepository";

const handler = (request, response) => {
  if (request.method === "OPTIONS") {
    return response.status(200).send("ok");
  }

  // http://localhost:3000/api/quotes?num=5
  const randomQuote = getRandom(request.query.num || 1);

  response.status(200).json({ data: randomQuote });
};

export default cors(handler);
