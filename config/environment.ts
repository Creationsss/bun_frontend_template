import { resolve } from "node:path";
import { logger } from "@creations.works/logger";

const environment: Environment = {
	port: Number.parseInt(process.env.PORT || "8080", 10),
	host: process.env.HOST || "0.0.0.0",
	development:
		process.env.NODE_ENV === "development" || process.argv.includes("--dev"),
};

const robotstxtPath: string | null = process.env.ROBOTS_FILE
	? resolve(process.env.ROBOTS_FILE)
	: null;

function verifyRequiredVariables(): void {
	const requiredVariables = ["HOST", "PORT"];

	let hasError = false;

	for (const key of requiredVariables) {
		const value = process.env[key];
		if (value === undefined || value.trim() === "") {
			logger.error(`Missing or empty environment variable: ${key}`);
			hasError = true;
		}
	}

	if (hasError) {
		process.exit(1);
	}
}

export { environment, robotstxtPath, verifyRequiredVariables };
