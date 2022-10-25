import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import SketchUp from './components/sketchUp/SketchUp';
import Conclusion from './components/conclusion/Conclusion';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <SketchUp />
      <Conclusion />

      <Footer />
    </div>
  );
}

export default App;
