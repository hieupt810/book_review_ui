import Login from "@/components/Login";
import NavLeft from "@/components/NavLeft";

export default function Home() {
  return (
    <main className="bg-[#c7c4bd] rounded-3xl p-4 h-middleHeight w-middleWidth">
      <div className="bg-[#f0eee3] rounded-2xl py-4 h-full flex items-start">
        <NavLeft />
        <Login />
      </div>
    </main>
  );
}
