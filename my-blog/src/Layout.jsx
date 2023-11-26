import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { DataProvider } from "./context/DataContext";

const Layout = () => {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <DataProvider>
        <Header />
        <Outlet />
      </DataProvider>
      <Footer />
    </div>
  );
};

export default Layout;
