import React from "react";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <header className="bg-slate-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">
          Armaan&apos;s Cool Placeholder
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/philosophy">Philosophy</Link>
            </li>
            <li>
              <Link href="/csds">Computer/Data Science</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-4">{}</main>
    </div>
  );
};

export default Page;
