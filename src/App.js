import {Row,Col} from 'react-bootstrap';
import ViewClientList from './Components/Modules/Admin/ViewClientList';

function App() {
  return (
    <div className="App">
       <Row>
         <Col sm={3}>
         </Col>
         <Col sm={8}>
           <ViewClientList/>
         </Col>
       </Row>
    
    </div>
  );
}

export default App;
