import Footer from './Components/General/Footer/Footer';
import AddClient from './Components/Modules/Admin/AddClient';
import {Row,Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
       <Row>
         <Col sm={4}>
         </Col>
         <Col sm={4}>
           <AddClient/>
         </Col>
       </Row>
      <Footer/>
    </div>
  );
}

export default App;
