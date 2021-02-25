import React from 'react';
import { Route, Switch } from 'react-router-dom';
import landing from '../pages/landing';
import projects from '../pages/projects';
import why from '../pages/why';


class Routes extends React.Component {
	render(){
		return (
		<Switch>
			<Route exact path="/" component={landing} />
			<Route exact path="/projects" component={projects} />
			<Route exact path="/why" component={why} />
		</Switch>
		);
	}
}
export default Routes;