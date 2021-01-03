import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import login from './pages/login';
<<<<<<< HEAD
=======
import signup from './pages/signup';
import home from './pages/home';
>>>>>>> d6f48fc382d570104805611ac2f8587ad847fbd9

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#33c9dc',
			main: '#FF5722',
			dark: '#d50000',
			contrastText: '#fff'
		}
  }
});

<<<<<<< HEAD
function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<div>
					<Switch>
						<Route exact path="/login" component={login} />
					</Switch>
				</div>
			</Router>
		</MuiThemeProvider>
	);
}

=======


function App() {
  return (
    
    <MuiThemeProvider theme={theme}>
    <Router>
        <div>
          <Switch>
              <Route exact path="/login" component={login}/>
              <Route exact path="/signup" component={signup}/>
              <Route exact path="/" component={home}/>
          </Switch>
        </div>
    </Router>
    </MuiThemeProvider>
  );

}
>>>>>>> d6f48fc382d570104805611ac2f8587ad847fbd9
export default App;