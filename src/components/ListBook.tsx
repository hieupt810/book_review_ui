import useSWR from "swr";
import { FC } from "react";
import Image from "next/image";
import { Book } from "@/models/Book";

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
  console.log(data);
  return (
    <div>
      <h3 className="text-2xl text-gray-900 leading-6 my-4">Kho sách</h3>
      {data.data.map((item: Book, index: any) => (
        <li key={index}>
        <p>Book Name: {item.title}</p>
        <p>Author: {item.author}</p>
        {/* {item.reviews.map((review, index) => (
            <div key={index}>
              <p>Review Content: {review.content}</p>
              <p>Rating: {review.rating}</p>
              <p>Created Date: {review.createdDate}</p>
              {review.user && <p>Username: {review.user.username}</p>}
            </div>
          ))} */}
      </li>
      ))}
    </div>
  );
};

export default ListBook;