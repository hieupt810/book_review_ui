import storage from "local-storage-fallback";

export default async function handler(req: any, res: any) {
  const baseURL = "https://localhost:7021/bookId";
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        "Content-Type": "text/json",
        Accept: " text/json",
        Authorization: "Bearer " + storage.getItem("token"),
      },
    });
    const ReviewData = await response.json();
    res.status(200).json(ReviewData);
  } catch (err) {
    console.log(err);
    res.status(405).json({ msg: "Review GET Method had error" });
  } finally {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
  }
}
