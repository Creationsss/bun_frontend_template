import { renderFile } from "ejs";
import { join } from "path";

export async function renderEjsTemplate(
	viewName: string | string[],
	data: EjsTemplateData,
	headers?: Record<string, string | number | boolean>,
): Promise<Response> {
	let templatePath: string;

	if (Array.isArray(viewName)) {
		templatePath = join(__dirname, "..", "views", ...viewName);
	} else {
		templatePath = join(__dirname, "..", "views", `${viewName}`);
	}

	if (!templatePath.endsWith(".ejs")) {
		templatePath += ".ejs";
	}

	const html: string = await renderFile(templatePath, data);

	return new Response(html, {
		headers: { "Content-Type": "text/html", ...headers },
	});
}
