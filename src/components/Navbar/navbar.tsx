import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { BsCalendar3, BsPerson } from "react-icons/bs";
import { MdPersonRemoveAlt1 } from "react-icons/md";
import { StyledNavbar } from "./styleNavbar";

export const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <StyledNavbar>
      {user?.isSyndic ? (
        <nav>
          <Link to={"/syndic_dash"}>
            <GrHomeRounded strokeOpacity={0.5} />
          </Link>
          <Link to={"/syndic_dash/reservas"}>
            <BsCalendar3 />
          </Link>
          <Link to={"/syndic_dash/resident_delete"}>
            <MdPersonRemoveAlt1 />
          </Link>
          <Link to={"/syndic_dash/profile"}>
            <BsPerson />
          </Link>
        </nav>
      ) : (
        <nav>
          <Link to={"/resident_dash"}>
            <GrHomeRounded strokeOpacity={0.5} />
          </Link>
          <Link to={"/resident_dash/reservas"}>
            <BsCalendar3 />
          </Link>
          <Link to={"/resident_dash/profile"}>
            <BsPerson />
          </Link>
        </nav>
      )}
    </StyledNavbar>
  );
};
