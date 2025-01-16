import type { Server } from "bun";

declare global {
	type BunServer = Server;

	type ExtendedRequest = Request & {
		startPerf: number;
	};
}
