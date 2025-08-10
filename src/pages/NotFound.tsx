import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6">
            <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                404
            </h1>
            <p className="mt-4 text-xl text-gray-300">صفحه مورد نظر پیدا نشد!</p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
                بازگشت به صفحه اصلی
            </Link>
        </div>
    );
}