import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Q3Front from './CI-Questions/Q3Front';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Q3Front />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
