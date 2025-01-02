import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kid's Wear", link: "/#" },
  { id: 4, name: "Men's Wear", link: "/#" },
  { id: 5, name: "Women's Wear", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showLoginCard, setShowLoginCard] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Login Successful!");
        setShowLoginCard(false); // Close the card after login
      })
      .catch((error) => {
        alert("Error logging in: " + error.message);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert("Sign-Out Successful!");
      })
      .catch((error) => {
        alert("Error signing out: " + error.message);
      });
  };

  return (
    <div className="shadow-md bg-white text-black duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              CHITTAGONG MART
            </a>
          </div>

          {/* Search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Login/Logout button */}
            {user ? (
              <button
                onClick={handleLogout}
                className="border border-primary text-primary py-1 px-4 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => setShowLoginCard(true)}
                className="border border-primary text-primary py-1 px-4 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Login Modal */}
      {showLoginCard && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleLogin(email, password)}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
              >
                Login
              </button>
              <button
                onClick={() => setShowLoginCard(false)}
                className="text-gray-500 hover:text-primary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
