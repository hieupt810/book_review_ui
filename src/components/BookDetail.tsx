import Image from "next/image";
import { Book } from "@/models/Book";
import { Bookmark, Share2, Download } from "lucide-react";

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

      <div className="bg-[#fdfcf8] rounded-2xl shadow-lg mx-12 overflow-auto pb-12 px-16 -mt-12 space-y-8 mb-6">
        <div className="ml-auto mr-0 border-b-2 py-4 w-1/2 border-gray-300">
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

        <div className="flex justify-between gap-24">
          <div className="w-1/2 space-y-4">
            <h5 className="font-semibold text-xl">Giới thiệu</h5>
            <p className="text-base text-justify">{data.description}</p>
          </div>

          <div className="w-1/2 space-y-6">
            <div className="space-y-4">
              <h5 className="font-semibold text-xl">Thể loại</h5>
              <p className="text-base text-justify">{data.category}</p>
            </div>
            <div className="space-y-4">
              <h5 className="font-semibold text-xl">Danh mục</h5>
              <p>{data.tags}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
