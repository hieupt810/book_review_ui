import { FC } from "react";

const Login: FC = ({}) => {
  return (
    <form
      action="http://localhost:3000/api/auth"
      method="POST"
      className="flex flex-col gap-y-4 text-sm text-gray-900 m-auto items-center justify-center w-full"
    >
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Tài khoản"
        className="bg-slate-100 outline-none p-2 w-64 rounded-lg"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Mật khẩu"
        className="bg-slate-100 outline-none p-2 w-64 rounded-lg"
      />
      <button type="submit" className="p-2 bg-[#C9C39F] w-36 rounded-lg mt-2">
        Đăng nhập
      </button>
    </form>
  );
};

export default Login;
