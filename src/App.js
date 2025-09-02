import React from 'react';
import './App.css';
import logo from './logo.svg';

const date = new Date().getFullYear().toString();

function App() {
	const codeElement = React.createElement('code', null, 'src/App.js');
	const editParagraph = React.createElement(
		'p',
		null,
		'Edit ',
		codeElement,
		' and save to reload.'
	);

	const linkElement = React.createElement(
		'a',
		{
			className: 'App-link',
			href: 'https://reactjs.org',
			target: '_blank',
			rel: 'noopener noreferrer'
		},
		'Learn React'
	);

	const dateParagraph = React.createElement('p', null, date);

	const logoImage = React.createElement('img', {
		src: logo,
		className: 'App-logo',
		alt: 'logo'
	});

	const header = React.createElement(
		'header',
		{ className: 'App-header' },
		logoImage,
		editParagraph,
		linkElement,
		dateParagraph
	);

	return React.createElement('div', { className: 'App' }, header);
}

export default App;
