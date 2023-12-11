import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const HeaderView = () => {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <header>
      <h3>
        <img src="/coin-logo.png" />
        <span>Coinmania</span>
      </h3>

      {user && (
        <div>
          <p>{user.email}</p>
          <button onClick={logoutUser}>Log Out</button>
        </div>
      )}
    </header>
  );
};

export default HeaderView;
