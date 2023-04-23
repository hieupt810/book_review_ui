interface Review {
  userId: number;
  content: string;
  rating: number;
  bookId: number;
}

export default async function handler(req: any, res: any) {
  const baseURL = "https://localhost:7021/api/review/postReview";

  switch (req.method) {
    case "POST":
      try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const input: Review = req.body;
        const response = await fetch(baseURL, {
          method: "POST",
          headers: {
            Accept: "text/json",
            Authorization: "Bearer " + req.cookies.token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: input.userId,
            content: input.content,
            rating: input.rating,
            bookId: input.bookId,
          }),
        });
        //console.log(await response.json());
        res.status(200).redirect(`/detail/${input.bookId}`);
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
