export default function Login() {
  return (
    <div className="flex items-center justify-center w-full h-full flex-col">
      <h3 className="uppercase text-3xl mb-8">Đăng nhập</h3>
      <form
        action="http://localhost:3000/api/auth"
        method="POST"
        className="flex flex-col gap-4 items-center"
      >
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Tên đăng nhập"
          required
          className="p-4 rounded-xl w-80 outline-none"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mật khẩu"
          required
          className="p-4 rounded-xl w-80 outline-none"
        />
        <button
          type="submit"
          className="w-1/2 mt-6 p-2 bg-[#d3cfc6] rounded-xl"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
