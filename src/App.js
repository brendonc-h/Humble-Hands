import logo from './logo.svg';
import './App.css';
import "./components/About";
import "./components/Contact";
import "./components/Prework";

export default function App() {
  return (
    <main className="">
      <Navbar/>
      <About/>
      <Prework/>
      <Contact/>
    </main>
  );
}




export default App;
