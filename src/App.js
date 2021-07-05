import Detatil from './Pages/Detatil';
import Main from './Pages/Main';
import Save from './Pages/Save';
import Update from './Pages/Update';
import { Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={Main} />
      <Route path="/post" exact={true} component={Save} />
      <Route path="/post/:id" exact={true} component={Detatil} />
      <Route path="/post/:id/update" exact={true} component={Update} />
    </div>
  );
}

export default App;
