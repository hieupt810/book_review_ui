// import BookDetail from "@/components/BookDetail";
import NavLeft from "@/components/NavLeft";
import NavTop from "@/components/NavTop";

export default function Home() {
  return (
    <main className="bg-[#c7c4bd] rounded-3xl p-4 h-middleHeight w-middleWidth">
      <div className="bg-[#f0eee3] rounded-2xl py-4 h-full flex items-start">
        <NavLeft />
        <NavTop />
      </div>
    </main>
  );
}
