// import Image from "next/image";
// import storage from "local-storage-fallback";
// import { useRouter } from "next/router";
// import { BsSearch } from "react-icons/bs";
// import { IoMdNotificationsOutline } from "react-icons/io";

// export async function getServerSideProps(req: any, res: any) {
//   const response = await fetch("http://localhost:3000/api/auth");
//   const tokenStore = await response.json();
//   return {
//     props: {
//       tokenStore,
//     },
//   };
// }

// export default function NavTop(tokenStore: any) {
//   const router = useRouter();

//   return (
//     <div className="flex justify-between items-center px-6 w-full">
//       <div className="flex items-center w-1/3">
//         <button>
//           <BsSearch size={25} />
//         </button>
//         <input
//           type="search"
//           name=""
//           id=""
//           className="bg-[#f0eee3] p-4 w-full text-base outline-none border-none ml-2"
//           placeholder="Tìm sách, tác giả, ..."
//         />
//       </div>
//       <div className="flex space-x-12">
//         {tokenStore.length > 10 ? (
//           <div
//             onClick={() => {
//               storage.setItem("token", "none");
//               router.reload();
//             }}
//             className="flex items-center justify-center hover:bg-[#C9C39F] cursor-pointer px-4 py-2 rounded-full"
//           >
//             <Image
//               src="/BlankAvatar.jpg"
//               height={30}
//               width={30}
//               alt={"Avatar"}
//               priority={true}
//               className="rounded-full"
//             />
//             <span className="ml-3 text-base font-semibold">Username</span>
//           </div>
//         ) : (
//           <div className="flex items-center bg-[#C9C39F] rounded-full">
//             <button
//               onClick={() => {
//                 router.push("/login");
//               }}
//               className="px-4"
//             >
//               Đăng nhập
//             </button>
//           </div>
//         )}
//         <button className="p-2 hover:bg-[#C9C39F] rounded-full">
//           <IoMdNotificationsOutline size={30} />
//         </button>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";

type Props = {
  tokenStore: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ req }) => {
  const tokenStore = Cookies.get("token") || "";
  const cookie = req.headers.cookie;
  console.log(cookie);

  return {
    props: {
      tokenStore,
    },
  };
};

export default function NavTop({ tokenStore }: { tokenStore: string }) {
  const router = useRouter();
  console.log(Cookies.get("token"));
  return (
    <div className="flex justify-between items-center px-6 w-full">
      <div className="flex items-center w-1/3">
        <button>
          <BsSearch size={25} />
        </button>
        <input
          type="search"
          name=""
          id=""
          className="bg-[#f0eee3] p-4 w-full text-base outline-none border-none ml-2"
          placeholder="Tìm sách, tác giả, ..."
        />
      </div>
      <div className="flex space-x-12">
        {tokenStore && tokenStore.length > 10 ? (
          <div
            onClick={() => {
              Cookies.remove("token");
              router.reload();
            }}
            className="flex items-center justify-center hover:bg-[#C9C39F] cursor-pointer px-4 py-2 rounded-full"
          >
            <Image
              src="/BlankAvatar.jpg"
              height={30}
              width={30}
              alt={"Avatar"}
              priority={true}
              className="rounded-full"
            />
            <span className="ml-3 text-base font-semibold">Username</span>
          </div>
        ) : (
          <div className="flex items-center bg-[#C9C39F] rounded-full">
            <button
              onClick={() => {
                router.push("/login");
              }}
              className="px-4"
            >
              Đăng nhập
            </button>
          </div>
        )}
        <button className="p-2 hover:bg-[#C9C39F] rounded-full">
          <IoMdNotificationsOutline size={30} />
        </button>
      </div>
    </div>
  );
}
