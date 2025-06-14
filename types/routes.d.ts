type RouteDef = {
	method: string | string[];
	accepts: string | null | string[];
	returns: string;
	needsBody?: "multipart" | "json";
};

type handler = (
	request: Request | ExtendedRequest,
	server: Server,
) => Promise<Response> | Response;

type RouteModule = {
	handler: handler;
	routeDef: RouteDef;
};
