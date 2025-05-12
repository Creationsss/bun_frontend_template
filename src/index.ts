import { logger } from "@creations.works/logger";

import { serverHandler } from "@/server";
import { verifyRequiredVariables } from "@config/environment";

async function main(): Promise<void> {
	verifyRequiredVariables();

	serverHandler.initialize();
}

main().catch((error: Error) => {
	logger.error(["Error initializing the server:", error]);
	process.exit(1);
});
