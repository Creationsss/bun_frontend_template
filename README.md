# Bun Frontend Template

A minimal, fast, and type-safe web server template built with [Bun](https://bun.sh) and TypeScript. Features file-system based routing, static file serving, WebSocket support, and structured logging.

## Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `HOST` | Server host address | `0.0.0.0` | ✅ |
| `PORT` | Server port | `8080` | ✅ |
| `NODE_ENV` | Environment mode | `production` | ❌ |

### Creating Routes

Routes are automatically generated from files in `src/routes/`. Each route file exports:

```typescript
// src/routes/example.ts
const routeDef: RouteDef = {
  method: "GET",                    // HTTP method(s)
  accepts: "application/json",      // Content-Type validation
  returns: "application/json",      // Response Content-Type
  needsBody?: "json" | "multipart"  // Optional body parsing, dont include if neither are required
};

async function handler(
  request: ExtendedRequest,
  requestBody: unknown,
  server: BunServer
): Promise<Response> {
  return Response.json({ message: "Hello World" });
}

export { handler, routeDef };
```

### Route Features

- **Method Validation** - Automatic HTTP method checking
- **Content-Type Validation** - Request/response content type enforcement
- **Body Parsing** - Automatic JSON/FormData parsing
- **Query Parameters** - Automatic query string parsing
- **URL Parameters** - Next.js-style dynamic routes (`[id].ts`)

## Static Files

Place files in `public/` directory

### Custom Public Files

Files in `public/custom/` are served with security checks:
- Path traversal protection
- Content-type detection
- Direct file serving

## License

This project is licensed under the BSD-3-Clause - see the [LICENSE](LICENSE) file for details.

## Dependencies

- **[@atums/echo](https://www.npmjs.com/package/@atums/echo)** - Structured logging with daily rotation
- **[Bun](https://bun.sh)** - Fast JavaScript runtime and bundler
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Biome](https://biomejs.dev/)** - Fast formatter and linter
