import { PropsWithChildren } from "react";
import { Header } from "./Header";

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    <div style={{ margin: "1rem 2rem" }}>{children}</div>
  </>
);
