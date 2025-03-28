export const environment: Environment = {
	port: parseInt(process.env.PORT || "8080", 10),
	host: process.env.HOST || "0.0.0.0",
	development:
		process.env.NODE_ENV === "development" ||
		process.argv.includes("--dev"),
};
