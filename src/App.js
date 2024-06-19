import { Route, Switch } from 'react-router-dom';
import PolicySteps from './components/Policy detail page/PolicySteps';
import { PlanLayout } from './components/plansPage/planPageLayout';
import { Home } from './components/Home Page/Home';

function App() {
  return (
    <>

  <Switch>
  
  <Route path="/" exact>
  <Home />
  </Route>

  <Route path="/policystep" exact>
  <PolicySteps />
  </Route>
     <Route path="/planlayout" exact>
        <PlanLayout/>
      </Route>

  </Switch>
  </>
  );
}

export default App;
