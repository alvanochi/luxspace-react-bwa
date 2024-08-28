import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 text-center">
      <h1 className="text-4xl text-slate-700">Page Not Found</h1>
      <p className="text-lg text-slate-500">
        Sorry, but the page you were trying to <br /> view does not exist.
      </p>
      <Link to={"/"} className="flex items-center justify-center w-32 px-4 py-2 mt-2 text-center text-black bg-pink-200 rounded-3xl">
        Back to shop
      </Link>
    </div>
  );
}
