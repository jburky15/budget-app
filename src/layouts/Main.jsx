/* eslint-disable react-refresh/only-export-components */
// Helper functions
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

// Assets
import wave from "../assets/wave.svg";

// Components
import { Nav } from "../components/Nav";

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={wave} alt="wave" />
    </div>
  );
};

export default Main;
