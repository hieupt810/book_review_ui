export default async function handler(req: any, res: any) {
  const baseURL = "https://localhost:7021/book/delete/";

  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const pid = req.body;
    const response = await fetch(baseURL + pid, {
      method: "DELETE",
      headers: {
        Accept: "text/json",
        Authorization: "Bearer " + req.cookies.token,
        "Content-Type": "application/json",
      },
    });
    // return res.status(200).json(await response.json());
  } catch (error) {
    console.log(error);
    res.status(405).json({ msg: "deleteBook DELETE method had error(s)." });
  } finally {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
  }
}
