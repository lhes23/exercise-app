import { Link } from "react-router-dom";

type Props = {};
const NavBar = (props: Props) => {
  return (
    <div className="flex">
      <Link to="/">
        <h2>Workout Buddy</h2>
      </Link>
      <Link to="/workouts/add">Workout Form</Link>
    </div>
  );
};
export default NavBar;
