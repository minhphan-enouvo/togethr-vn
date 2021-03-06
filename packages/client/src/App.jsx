import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import './components/page-loader';
import PrivateRoute from './components/PrivateRoute';
import './components/top-navigation';
import CreateProject from './pages/create-project';
import './pages/dapp';
import Home from './pages/home';
import ProjectDetail from './pages/project-detail';
import { ProjectsProvider } from './providers/ProjectProvider';
import { UserProvider } from './providers/UserProvider';
class App extends Component {
  render() {
    return (
      <UserProvider>
        <ProjectsProvider>
          <Router>
            <Switch>
              <div className="flex flex-col h-screen">
                <Header />
                <div className="flex-grow">
                  <Route path="/" component={Home} exact />
                  <Route path="/projects/:id" component={ProjectDetail} exact />
                  <PrivateRoute path="/create-project" component={CreateProject} exact />
                </div>
                <Footer />
              </div>
            </Switch>
          </Router>
        </ProjectsProvider>
      </UserProvider>
    );
  }
}

export default App;
