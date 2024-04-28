import { Link } from "@remix-run/react";

export const Header = () => {
  return (
    <nav style={{ margin: "2rem" }}>
      <Link to="/">
        <h1>
          <b>Journal</b>
        </h1>
      </Link>
    </nav>
  );
};
