
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Products } from "./pages/Products";
import { Testimonials } from "./pages/Testimonials";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col bg-white text-gray-900 min-h-screen w-full overflow-x-hidden">
        <Navigation />
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="products"><Products /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="team"><Team /></div>
        <div id="contact"><Contact /></div>
      </main>
    </>
  );
}

export default App;
