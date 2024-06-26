import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* <h3>process.env.EMAIL_ALUNO</h3> */}
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "black"}
          text={showAdd ? "Fechar" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "BIA RONNE/2024 E.BV6 com script",
};

export default Header;
