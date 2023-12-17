import { FunctionComponent, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <div className="bg-[#1F2124]">{children}</div>;
};

export default Layout;
