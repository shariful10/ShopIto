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
				box: "0 5px 15px rgba(0, 0, 0, 0.1);",
			},
			fontSize: {
				h1: "4rem",
				h2: "3rem",
				h3: "2.5rem",
				h4: "2rem",
				textSm: "1.2rem",
				textMd: "3rem",
				textLg: "4rem",
				textXl: "4.5rem",
			},
			fontWeight: {
				fontSm: "300",
			},
			margin: {
				m1: "1rem",
			},
		},
	},
	plugins: [],
};
