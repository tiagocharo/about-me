import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App';
import Contact from '../components/Contact';
import { ApolloProvider } from 'react-apollo';
import apolloClient from '../services/apollo';

export default class Routes extends Component {

	render() {
		return (
			<ApolloProvider client={apolloClient}>
				<Router>
					<div>
						<Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
						<Route exact={true} path={`${process.env.PUBLIC_URL}/contato`} component={Contact} />
					</div>
				</Router>
			</ApolloProvider>
		)
	}
}