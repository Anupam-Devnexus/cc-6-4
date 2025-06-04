import { FaRegUserCircle } from "react-icons/fa";

export default function UserMenu({ setShowLogin, setShowSignup, setShowConfirm, isOpen, toggle }) {
  return (
    <div className="relative text-white z-40">
      {/* Avatar and Name */}
      <div
        className="flex items-center gap-2 py-2 rounded-lg shadow-md cursor-pointer"
        onClick={toggle}
      >
        <FaRegUserCircle className="text-2xl sm:text-3xl" />
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/5"
          onClick={toggle}
        />
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 text-white bg-[var(--var-red-col)] w-24 rounded-md shadow-lg z-50">
          <ul className="text-sm flex flex-col gap-1 items-center justify-between">
            <li
              onClick={() => {
                setShowLogin(true);
                toggle();
              }}
              className="px-2 py-1 w-full text-center rounded-md bg-[var(--var-red-col)] hover:bg-gray-100 hover:text-black cursor-pointer"
            >
              Log In
            </li>

            <li className="px-3 py-1 w-full text-center rounded-md bg-[var(--var-red-col)] hover:bg-gray-100 hover:text-black cursor-pointer">
              Guest
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
