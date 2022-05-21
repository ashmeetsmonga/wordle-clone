module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				bgGreen: "rgb(82, 176, 94)",
				bgYellow: "rgb(200, 180, 68)",
				bgGray: "rgb(119, 124, 126)",
			},

			keyframes: {
				flip: {
					"0%": { transform: "rotateX(0)" },
					"45%": { transform: "rotateX(90deg)" },
					"55%": { transform: "rotateX(90deg)" },
					"100%": { transform: "rotateX(0)" },
				},
			},

			animation: {
				flip: "flip .5s linear forwards",
			},
		},
	},
	plugins: [],
};
