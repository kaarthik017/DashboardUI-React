
import './App.css';
import Dashboard from './dashboard';
import Navigation from './navigation';
import Sidebar from './sidebar';

function App() {
  return <>
  <div id="wrapper">
  <Sidebar></Sidebar>
  <div id="content-wrapper" class="d-flex flex-column">
  <div id="content">
     <Navigation></Navigation>
     <Dashboard></Dashboard>
  </div>
  </div>
  </div>
  </>
}

export default App;
