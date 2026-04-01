import './App.css'
import Footer from './Components/Footer.jsx';
import './Components/Header.jsx'
import Header from './Components/Header.jsx';

function App() {
	const headerContent = ["The Beginning", "This paragraph is meant for demonstration purposes. Nothing more, nothing less. Let this be ther start of your learning journey, at least learning from me..."];
	const footerContent = "Made by Marcus Laguerre © copyrights protected."

	return (
		<>
			<Header content={headerContent}/>
			<Footer content={footerContent}/>
		</>
	)
}

export default App
