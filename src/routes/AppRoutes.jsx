import {Routes, Route} from "react-router-dom";
import App from "../App.jsx";

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<App />} />
		<Route path="/example" element={<div>Example Page</div>} />
	</Routes>
);

export default AppRoutes;

