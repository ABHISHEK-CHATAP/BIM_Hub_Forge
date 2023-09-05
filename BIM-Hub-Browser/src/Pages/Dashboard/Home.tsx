import Sidebar from "./Sidebar/Sidebar";
import Viewer from "./Viewer/Viewer";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Sidebar />
      <Viewer />
    </div>
  );
};

export default Home;
