import React from "react";
import Link from "next/link";

const Philosophy: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">
          Armaan's Cool Placeholder
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="let-me-cook/src/app/philosophy/philosophy">
                Philosophy
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-4">{}</main>
    </div>
  );
};

export default Philosophy;
