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
						<Route exact path="/" component={App} />
						<Route exact={true} path="/contato" component={Contact} />
					</div>
				</Router>
			</ApolloProvider>
		)
	}
}