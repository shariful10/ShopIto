/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				popins: "'Poppins', sans-serif",
			},
			colors: {
				dark: "#333",
				grey: "#eee",
				purple: "#9d0191",
				orange: "#ff7722",
				danger: "#ff4500",
				primary: "#007bff",
				success: "#28a745",
				darkBlue: "#0a1930",
				lightBlue: "#1f93ff",
			},
			boxShadow: {
				shadowBox: "0 5px 15px rgba(0, 0, 0, 0.1);",
			},
		},
	},
	plugins: [],
};
