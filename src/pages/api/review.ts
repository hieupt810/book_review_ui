export default async function handler(req: any, res: any) {
  const baseURL = "https://localhost:7021/bookId";
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        "Content-Type": "text/json",
        Accept: " text/json",
        Authorization:
          "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQURNSU4iLCJleHAiOjE2ODE0NzIzNjB9.-0n6Nh1eZo8o-xklG6swp1zCXVBPJM8iUOJIFaltutHxnL6Ki_E-5xdzaF9V8uiZFQiEEfe30U7Fj0wuWbkFwQ",
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
