import './App.css';
import logo from './logo.svg';

// Императивный стиль
const date = new Date().getFullYear().toString()

// Деклоративный стиль 
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>
					{date}
				</p>
			</header>
		</div>
	);
}

export default App;
