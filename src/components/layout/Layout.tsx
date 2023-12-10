import { FunctionComponent, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <div className="h-screen bg-[#1F2124]">{children}</div>;
};

export default Layout;
