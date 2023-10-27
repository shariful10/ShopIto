import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="font-popins">
			<Header />
			<div className="min-h-[calc(100vh-160px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;
