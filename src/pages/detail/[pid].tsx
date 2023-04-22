import axios from "axios";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import NavTop from "@/components/NavTop";
import NavLeft from "@/components/NavLeft";
import { use, useEffect, useState } from "react";
import BookDetail from "@/components/BookDetail";

function getStoreUsername() {
  const username = getCookie("username");
  return username as string;
}

function getStoreToken() {
  const token = getCookie("token");
  return token as string;
}

export default function Detail() {
  const router = useRouter();
  const pid = router.query;

  const [username, setUsername] = useState<string>("");
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    setToken(getStoreToken());
    setUsername(getStoreUsername());
  }, []);

  useEffect(() => {
    try {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      axios
        .get(`https://localhost:7021/book/id/${pid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error);
    } finally {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
    }
  }, [pid, token]);

  return (
    <div className="bg-[#898680] w-screen h-screen p-6">
      <div className="bg-[#c7c4bd] w-full h-full p-4 rounded-lg">
        <div className="bg-[#f0eee3] w-full h-full p-4 rounded-lg flex items-start">
          <NavLeft />
          <div className="w-full h-full px-6 overflow-auto">
            <NavTop user={username} />
            {/* <BookDetail
              id={data.id}
              title={data.title}
              price={data.price}
              description={data.description}
              category={data.category}
              amount={data.amount}
              imageUr1={data.imageUr1}
              tags={data.tags}
              author={data.author}
              reviews={data.reviews}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
