import useSWR from "swr";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { Book } from "@/models/Book";
import Detail from "@/pages/detail/[pid]";

interface ListBookProps {}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ListBook: FC<ListBookProps> = ({}) => {
  const { data, error } = useSWR("http://localhost:3000/api/booklist", fetcher);

  if (error) {
    return <div>Failed to load data.</div>;
  }

  if (!data) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="text-gray-900">
      <div className="grid grid-cols-2 gap-x-2 cursor-pointer">
        {data.data.map((item: Book, index: any) => (
          <Link href={`http://localhost:3000/detail/${item.id}`} key={index}>
            <div className="flex gap-x-4 items-center my-2 p-4 rounded-lg hover:bg-slate-200 shadow-md">
              {item.imageUr1 && (
                <Image
                  src={item.imageUr1}
                  width={200}
                  height={300}
                  alt={`Bìa ${item.title}`}
                  className="rounded-lg shadow-lg"
                />
              )}
              <div className="flex flex-col justify-center h-full gap-y-8">
                <div className="flex flex-col gap-y-2">
                  <span className="text-2xl uppercase leading-10">
                    {item.title}
                  </span>
                  <div className="flex gap-x-2">
                    <User />
                    <span className="text-base text-zinc-500">
                      {item.author}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="bg-[#C9C39F] text-sm px-4 py-2 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListBook;
