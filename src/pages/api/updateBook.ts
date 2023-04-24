import { Book } from "@/models/Book";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest) {
  const baseURL = "https://localhost:7021/book";

  switch (req.method) {
    case "PUT":
      try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const inputBook: Book = req.body;
        const response = await fetch(baseURL, {
          method: "PUT",
          headers: {
            Accept: "text/json",
            Authorization: "Bearer " + req.cookies.token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: inputBook.id,
            title: inputBook.title,
            price: inputBook.price,
            description: inputBook.description,
            category: inputBook.category,
            amount: inputBook.amount,
            imageUr1: inputBook.imageUr1,
            tags: inputBook.tags,
            author: inputBook.author,
            reviews: [],
          }),
        });
        console.log("Success");
        // res.status(200).json(await response.json());
      } catch (err) {
        console.log(err);
        res.status(405).json({ msg: "AddBook PUT method had error(s)." });
      } finally {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
      }
      break;

    default:
      break;
  }
}
