import { User } from "@/models/User";
import { cookies } from "next/dist/client/components/headers";

export default async function handler(req: any, res: any) {
  const baseURL = "https://localhost:7021/api/Auth";
  const cookiesStore = cookies();

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

        res.setHeader(
          "Set-Cookie",
          `token=${AuthToken.token}; HttpOnly; Path=/`
        );
        res.redirect(307, "/");
      } catch (err) {
        console.log(err);
        res.status(405).json({ msg: "Auth POST Method had error" });
      } finally {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
      }
      break;

    default:
      break;
  }
}
