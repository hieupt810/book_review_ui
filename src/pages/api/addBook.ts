import { Book } from "@/models/Book";
import { getCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseURL = "https://localhost:7021/api/book/addBook";

  switch (req.method) {
    case "POST":
      try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const inputBook: Book = req.body;
        const response = await fetch(baseURL, {
          method: "POST",
          headers: {
            Accept: "text/json",
            Authorization: "Bearer " + getCookie("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: inputBook.id,
            title: inputBook.title,
            price: inputBook.price,
            description: inputBook.description,
            category: inputBook.category,
            amount: inputBook.amount,
            imageUr1: inputBook.imageURL,
            tags: inputBook.tags,
            author: inputBook.author,
            reviews: [],
          }),
        });
        const data = response.status;
        console.log(data);
      } catch (err) {
        console.log(err);
        res.status(405).json({ msg: "AddBook POST method had error(s)." });
      } finally {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
      }
      break;

    default:
      break;
  }
}
