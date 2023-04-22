import { Book } from "@/models/Book";

export default async function handler(req: any, res: any) {
  const baseURL = "https://localhost:7021/book/all";
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        Accept: "text/json",
        Authorization: "Bearer " + req.cookies.token,
        "Content-Type": "text/json",
      },
    });
    return res.status(200).json(await response.json());
  } catch (error) {
    console.log(error);
    res.status(405).json({ msg: "Review GET Method had error" });
  } finally {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
  }
}
