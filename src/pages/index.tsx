import { getCookie } from "cookies-next";
import NavTop from "@/components/NavTop";
import NavLeft from "@/components/NavLeft";
import { useEffect, useState } from "react";
import ListBook from "@/components/ListBook";

function getStoreUsername() {
  const username = getCookie("username");
  return username as string;
}

export default function Home() {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    setUsername(getStoreUsername());
  }, []);

  return (
    <div className="bg-[#898680] w-screen h-screen p-6">
      <div className="bg-[#c7c4bd] w-full h-full p-4 rounded-lg">
        <div className="bg-[#f0eee3] w-full h-full p-4 rounded-lg flex items-start">
          <NavLeft />
          <div className="w-full h-full px-6 overflow-auto">
            <NavTop user={username} />
            {username ? <ListBook /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
