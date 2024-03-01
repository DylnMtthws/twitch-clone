import { NavBar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="flex h-full pt-20">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default BrowseLayout;
