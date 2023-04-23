import Image from "next/image";
import { Book } from "@/models/Book";
import { Bookmark, Share2, Download, User, Star } from "lucide-react";

interface Comment {
  id: number;
  user: string;
  content: string;
  rating: number;
  createdDate: string;
}

function printStar(_num: number) {
  const list = [];

  for (let index = 0; index < _num; index++) {
    list.push(
      <li className="list-none">
        <Star fill="#67E541" strokeWidth={0} size={20} />
      </li>
    );
  }

  return list;
}

export default function BookDetail(data: Book) {
  console.log(data)
  return (
    <div className="w-full overflow-auto text-gray-900 mt-4 mb-2">
      <div className="px-12 flex justify-around items-center">
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src={data.imageUr1}
            width={400}
            height={400}
            priority={true}
            alt={`Bìa sách ${data.title}`}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-4xl mb-8">{data.title}</h2>
          <h4 className="font-semibold text-2xl text-zinc-500">
            {data.author}
          </h4>
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
              <h5 className="font-semibold text-xl">Danh mục</h5>
              <p>{data.tags}</p>
            </div>
          ) : null}
        </div>
        <div>
          {data.reviews && data.reviews.length > 0
            ? data.reviews.map((value: Comment, _index) => {
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
                        User {value.user}
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
            : null}
        </div>
      </div>
    </div>
  );
}
