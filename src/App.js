
import Header from './components/Header'
import Background from './components/Background'
import Card from './components/Card'
import img4 from "./img/pro.jpg"
import Footer from './components/Footer';
function App() {
  return (<div>
    <Header/>
    < Background/>
    <Card   imgsrc={img4}  title="Programming" description=" Challenge your programming knowledge" />
   <Footer/>
  </div>
  );
}

export default App;
