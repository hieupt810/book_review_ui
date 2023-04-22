import { getCookie } from "cookies-next";
import NavTop from "@/components/NavTop";
import NavLeft from "@/components/NavLeft";
import { useEffect, useState } from "react";

function getData() {
  const data = getCookie("username");
  return data as string;
}

export default function Home() {
  const [storeData, setStoreData] = useState<string>("");
  useEffect(() => {
    setStoreData(getData());
  }, []);

  return (
    <div className="bg-[#898680] w-screen h-screen p-8">
      <div className="bg-[#c7c4bd] w-full h-full p-4 rounded-lg">
        <div className="bg-[#f0eee3] w-full h-full p-4 rounded-lg flex items-start">
          <NavLeft />
          <div className="w-full">
            <NavTop user={storeData} />
          </div>
        </div>
      </div>
    </div>
  );
}
