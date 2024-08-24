import Contacts from "./component/Contacts";
import Hero from "./component/Hero";
import Who from "./component/Who";
import bg from "../assets/image/bg.jpeg";
import Works from "./component/Works";

function App() {
  return (
    <div
      style={{ background: `url('${bg}')` }}
      className="h-[100dvh] bg-cover snap-mandatory snap-y snap scroll-smooth overflow-auto text-white"
    >
      <Hero />
      <Who />
      <Works />
      <Contacts />
    </div>
  );
}

export default App;
