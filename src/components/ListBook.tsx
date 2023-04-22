import useSWR from "swr";
import { Book } from "@/models/Book";
import { FC } from "react";

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

interface ListBookProps {}

const ListBook: FC<ListBookProps> = ({}) => {
  const { data, error } = useSWR("http://localhost:3000/api/booklist", fetcher);
  console.log(data);
  return (
    <div>
      <h3 className="text-2xl text-gray-900 leading-6 my-4">Kho sách</h3>
      {}
    </div>
  );
};

export default ListBook;
