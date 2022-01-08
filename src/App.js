
import './App.css';
import { BrowserRouter } from 'react-router-dom';
//import QueryStringApp from './QueryString/QuerystringApp';
//import MainNestedRoutingApp from './NestedRouting/NestedRoutingApp'
import Authentication from './authentication/QuerystringApp' ; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>

          <Authentication />

          {
            //<QueryStringApp /> 
            //<MainNestedRoutingApp />
          }
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
