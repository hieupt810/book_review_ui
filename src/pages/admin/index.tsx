import { getCookie } from "cookies-next";
import NavTop from "@/components/NavTop";
import NavLeft from "@/components/NavLeft";
import { useEffect, useState } from "react";

function getStoreUsername() {
  const username = getCookie("username");
  return username as string;
}

function getStoreRole() {
  const role = getCookie("role");
  return role as string;
}

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    setRole(getStoreRole());
    setUsername(getStoreUsername());
  }, []);

  return (
    <div className="bg-[#898680] w-screen h-screen p-6">
      <div className="bg-[#c7c4bd] w-full h-full p-4 rounded-lg">
        <div className="bg-[#f0eee3] w-full h-full p-4 rounded-lg flex items-start">
          <NavLeft />
          <div className="w-full h-full mx-6">
            <NavTop user={username} />
            <div className="grid grid-cols-2 w-full h-full">
              <form
                action="http://localhost:3000/api/addBook"
                method="POST"
                className="flex flex-col gap-y-4 text-sm text-gray-900 m-auto items-center justify-center w-full h-full"
              >
                <h3 className="font-semibold text-xl mb-4">
                  Thêm sách mới vào hệ thống
                </h3>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Tiêu đề sách"
                  className="bg-slate-100 outline-none p-2 w-64 rounded-lg"
                />
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Giá sách"
                  className="bg-slate-100 outline-none p-2 w-64 rounded-lg"
                />
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Miêu tả"
                  className="bg-slate-100 outline-none p-2 w-64 rounded-lg"
                />
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Thể loại"
                  className="bg-slate-100 outline-none p-2 w-64 rounded-lg"
                />
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  placeholder="Số lượng sách"
                  className="bg-slate-100 outline-none p-2 w-64 rounded-lg"
                />
                <input
                  type="text"
                  name="imageUr1"
                  id="imageUr1"
                  placeholder="Đường dẫn ảnh bìa sách"
                  className="bg-slate-100 outline-none p-2 w-64 rounded-lg"
                />
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  placeholder="Nhãn sách"
                  className="bg-slate-100 outline-none p-2 w-64 rounded-lg"
                />
                <input
                  type="text"
                  name="author"
                  id="author"
                  placeholder="Tác giả"
                  className="bg-slate-100 outline-none p-2 w-64 rounded-lg"
                />
                <button
                  type="submit"
                  className="p-2 bg-[#C9C39F] w-36 rounded-lg mt-4"
                >
                  Thêm sách
                </button>
              </form>

              <div className="flex items-center justify-between w-full h-full">
                <form
                  action="http://localhost:3000/api/deleteBook"
                  method="DELETE"
                  className="flex flex-col gap-y-4 text-sm text-gray-900 m-auto items-center justify-center w-full h-full"
                >
                  <h3 className="font-semibold text-xl mb-4">
                    Xoá sách khỏi hệ thống
                  </h3>

                  <input
                    type="number"
                    name="id"
                    id="id"
                    placeholder="ID sách cần xoá"
                    className="bg-slate-100 outline-none p-2 w-64 rounded-lg"
                  />

                  <button
                    type="submit"
                    className="p-2 bg-[#C9C39F] w-36 rounded-lg mt-4"
                  >
                    Tìm thông tin sách
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
