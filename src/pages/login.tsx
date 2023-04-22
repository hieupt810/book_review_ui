import Login from "@/components/Login";
import NavLeft from "@/components/NavLeft";

export default function login() {
  return (
    <div className="bg-[#898680] w-screen h-screen p-8">
      <div className="bg-[#c7c4bd] w-full h-full p-4 rounded-lg">
        <div className="bg-[#f0eee3] w-full h-full p-4 rounded-lg flex items-start">
          <NavLeft />
          <Login />
        </div>
      </div>
    </div>
  );
}
