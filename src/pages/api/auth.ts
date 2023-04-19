import { User } from "@/models/User";
import storage from "local-storage-fallback";

export default async function handler(req: any, res: any) {
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
        const AuthToken = await response.json();
        // storage.setItem("token", AuthToken.token);
        localStorage.setItem("token", AuthToken.token);
        res.redirect(307, "/");
      } catch (err) {
        console.log(err);
        res.status(405).json({ msg: "Auth POST Method had error" });
      } finally {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
      }
      break;

    case "GET":
      const tokenStore = localStorage.getItem("token");
      res.json({ token: tokenStore });
      break;

    default:
      break;
  }
}
