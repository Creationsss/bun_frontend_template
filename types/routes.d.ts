type RouteDef = {
	method: string | string[];
	accepts: string | null | string[];
	returns: string;
	needsBody?: "multipart" | "json";
};

type RouteModule = {
	handler: (
		request: Request | ExtendedRequest,
		requestBody: unknown,
		server: Server,
	) => Promise<Response> | Response;
	routeDef: RouteDef;
};
