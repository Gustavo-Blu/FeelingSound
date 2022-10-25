import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import SketchUp from './components/sketchUp/SketchUp';
import Conclusion from './components/conclusion/Conclusion';
import Process from './components/process/Process';
import ExternalLinks from './components/externalLinks/ExternalLinks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Process />
      <SketchUp />
      <Conclusion />
      <ExternalLinks />

      <Footer />
    </div>
  );
}

export default App;
