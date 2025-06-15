type QueryParams = Record<string, string>;

interface ExtendedRequest extends Request {
	startPerf: number;
	query: Query;
	params: Params;
	requestBody: unknown;
}

type RouteDef = {
	method: string | string[];
	accepts: string | null | string[];
	returns: string;
	needsBody?:
		| "multipart"
		| "json"
		| "urlencoded"
		| "text"
		| "raw"
		| "buffer"
		| "blob";
};

type Handler = (
	request: ExtendedRequest,
	server: Server,
) => Promise<Response> | Response;

type RouteModule = {
	handler: Handler;
	routeDef: RouteDef;
};
