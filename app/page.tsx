import Nav from "./components/header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-100 flex">
      <Nav />
      <Main />
    </div>
  );
}
