import './App.css'
import './Components/Header.jsx'
import Header from './Components/Header.jsx';

function App() {
	const headerContent = ["The Beginning", "This paragraph is meant for demonstration purposes. Nothing more, nothing less. Let this be ther start of your learning journey, at least learning from me..."];

	return (
		<>
			<Header content={headerContent}/>
		</>
	)
}

export default App
