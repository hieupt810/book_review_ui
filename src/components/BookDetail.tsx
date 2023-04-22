import Image from "next/image";
import { Book } from "@/models/Book";

export default function BookDetail(data: Book) {
  return (
    <div className="px-6 w-full overflow-auto">
      <div className="px-12 flex justify-around items-center h-1/2 box-border">
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src={data.imageUr1}
            width={300}
            height={300}
            priority={true}
            alt={"Book Cover"}
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold text-4xl tracking-wide mb-8">
            {data.title}
          </h2>
          <h4 className="font-semibold text-2xl">{data.author}</h4>
        </div>
      </div>

      <div className="bg-[#fdfcf8] rounded-2xl shadow-lg mx-12 overflow-auto pt-4 pb-12 px-20 -mt-20 space-y-8 mb-6">
        <div className="ml-auto mr-0 border-b-2 pb-4 w-96">
          <div className="space-x-4 flex justify-end">
            <button className="rounded-full p-4 bg-[#f0eee3]"></button>
            <button className="rounded-full p-4 bg-[#f0eee3]"></button>
            <button className="rounded-full p-4 bg-[#f0eee3]"></button>
          </div>
        </div>

        <div className="flex justify-between gap-24 h-1/3">
          <div className="w-1/2 space-y-6">
            <h5 className="font-semibold text-xl">Description</h5>
            <p className="text-lg text-justify">{data.description}</p>
          </div>

          <div className="w-1/2 space-y-8">
            <div className="space-y-6">
              <h5 className="font-semibold text-xl">Category</h5>
              <p className="text-lg text-justify">{data.category}</p>
            </div>
            <div className="space-y-6">
              <h5 className="font-semibold text-xl">Tags</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
