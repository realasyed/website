import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Armaan's Cool Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
