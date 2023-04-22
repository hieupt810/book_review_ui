import { User } from "@/models/User";
import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const baseURL = "https://localhost:7021/api/Auth";

  switch (req.method) {
    case "POST":
      try {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        const usr: User = req.body;
        const response = await fetch(baseURL + "/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: " text/json",
          },
          body: JSON.stringify({
            username: usr.username,
            password: usr.password,
          }),
        });
        const authToken = await response.json();
        setCookie("token", authToken.token, { req, res, maxAge: 60 * 60 * 24 });
        setCookie("username", authToken.refreshToken.user.username, {
          req,
          res,
          maxAge: 60 * 60 * 24,
        });
        res.redirect(307, "/");
      } catch (err) {
        console.log(err);
        res.status(405).json({ msg: "Auth POST method had error(s)." });
      } finally {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
      }
      break;

    default:
      break;
  }
}
