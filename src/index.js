import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { PopupProvider } from "./popupcontext/PopupContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<PopupProvider>
			<App />
		</PopupProvider>
	</Provider>
);
