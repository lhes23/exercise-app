import { Link } from "react-router-dom";

type Props = {};
const NavBar = (props: Props) => {
  const navContent = (
    <>
      <li className="flex">
        <Link
          to="/"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Workout Buddy
        </Link>
      </li>
      <li className="flex">
        <Link
          to="/workouts/add"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
        >
          Add Workout
        </Link>
      </li>
    </>
  );
  return (
    <div className="flex">
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <ul className="items-stretch hidden space-x-3 md:flex">
            {navContent}
          </ul>
          <button className="flex justify-end p-4 md:hidden"></button>
        </div>
      </header>
    </div>
  );
};
export default NavBar;
