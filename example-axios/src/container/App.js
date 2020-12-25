import React, { useEffect, useState } from "react";
import api from "../services/api";

function App() {
	const [forecast, setForecast] = useState({});

	useEffect(() => {
		api
			.get(
				"/api/v1/forecast/locale/7163/hours/72?token=bf6ab9c828302542a69c19d41b7a6516"
			)
			.then((res) => {
				console.log(res.data);
				setForecast(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="App">
			<h1>{forecast.name}</h1>
		</div>
	);
}

export default App;
