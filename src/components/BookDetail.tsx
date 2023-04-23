import Image from "next/image";
import { Book } from "@/models/Book";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";
import { Bookmark, Share2, Download, User, Star, Send } from "lucide-react";

interface Comment {
  id: number;
  user: {
    id: number;
    username: string;
  };
  content: string;
  rating: number;
  createdDate: string;
}

function getStoreId() {
  const id = getCookie("userId");
  return id as unknown as number;
}

function printStar(_num: number) {
  const list = [];

  for (let index = 0; index < _num; index++) {
    list.push(
      <span key={index} className="list-none">
        <Star fill="#67E541" strokeWidth={0} size={20} />
      </span>
    );
  }

  return list;
}

export default function BookDetail(data: Book) {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    setUserId(getStoreId());
  }, []);

  return (
    <div className="w-full overflow-auto text-gray-900 mt-4 mb-2">
      <div className="px-12 flex justify-around items-center">
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src={data.imageUr1}
            width={350}
            height={350}
            priority={true}
            quality={100}
            alt={`Bìa sách ${data.title}`}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-bold text-4xl mb-8">{data.title}</h2>
          <h4 className="font-normal text-2xl text-zinc-500">{data.author}</h4>
        </div>
      </div>

      <div className="bg-[#fdfcf8] rounded-2xl shadow-lg mx-12 overflow-auto pb-12 px-16 -mt-12 space-y-8 mb-2">
        <div className="ml-auto mr-0 border-b-2 py-4 w-1/2 border-gray-300 flex justify-between items-center">
          <div className="px-4 py-2 bg-[#C9C39F] rounded-full text-sm">
            {data.category}
          </div>

          <div className="space-x-4 flex justify-end">
            <button className="rounded-full p-3 bg-[#f0eee3] cursor-pointer">
              <Bookmark size={15} />
            </button>
            <button className="rounded-full p-3 bg-[#f0eee3] cursor-pointer">
              <Share2 size={15} />
            </button>
            <button className="rounded-full p-3 bg-[#f0eee3] cursor-pointer">
              <Download size={15} />
            </button>
          </div>
        </div>

        <div className="gap-24 grid grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <h5 className="font-semibold text-xl">Giới thiệu</h5>
              <p className="text-base text-justify">{data.description}</p>
            </div>
          </div>

          {data.tags ? (
            <div className="space-y-2">
              <h5 className="font-semibold text-xl">Hashtag</h5>
              <p>{data.tags}</p>
            </div>
          ) : null}
        </div>

        <div className="w-full">
          <h3 className="font-semibold text-xl mb-4">Thêm nhận xét</h3>
          <form
            action="http://localhost:3000/api/addReview"
            method="POST"
            className="overflow-hidden flex bg-slate-200 rounded-xl shadow-lg p-2 border-2 border-gray-800"
          >
            <div className="w-full flex items-center">
              <input
                type="number"
                name="userId"
                id="userId"
                value={userId}
                readOnly={true}
                className="hidden"
              />
              <input
                type="number"
                name="bookId"
                id="bookId"
                value={data.id}
                readOnly={true}
                className="hidden"
              />
              <input
                type="text"
                name="content"
                id="content"
                placeholder="Nhận xét"
                className="bg-slate-200 text-sm text-gray-900 outline-none w-full h-auto min-h-[3rem]"
              />
              <div className="flex flex-col items-center justify-center">
                <label htmlFor="rating" className="text-base font-semibold">
                  Rating
                </label>
                <div className="flex items-center p-2">
                  <input
                    type="number"
                    name="rating"
                    id="rating"
                    placeholder="5"
                    className="bg-slate-200 w-12 outline-none text-base text-right"
                  />
                  <span className="text-base tracking-widest">/5</span>
                </div>
              </div>
            </div>
            <button type="submit" className="ml-20 p-2 mr-4 cursor-pointer">
              <Send size={30} />
            </button>
          </form>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Nhận xét người dùng</h3>
          {data.reviews && data.reviews.length > 0 ? (
            data.reviews.map((value: Comment, _index) => {
              return (
                <div
                  key={_index}
                  className="flex flex-col mb-4 bg-slate-200 p-2 rounded-xl shadow-lg"
                >
                  <div className="h-6 flex items-center mb-1">
                    <div className="w-12 flex items-center justify-center">
                      <User size={20} />
                    </div>
                    <span className="text-base text-gray-900 ml-2 font-semibold">
                      {value.user.username}
                      <span className="text-xs ml-2 text-zinc-500">
                        {value.createdDate}
                      </span>
                    </span>
                  </div>

                  <div className="ml-14 text-gray-900 font-normal text-sm flex flex-col gap-y-2">
                    <span>{value.content}</span>
                    <div className="flex gap-x-2">
                      {printStar(value.rating)}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <span className="font-normal text-lg">Trống</span>
          )}
        </div>
      </div>
    </div>
  );
}
