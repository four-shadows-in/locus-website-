import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/index.js";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
