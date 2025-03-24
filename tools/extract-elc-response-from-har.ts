import errorHar from "./error_har.json";
import { parse as parsePath, join as joinPath } from "node:path";

function hasEventPoint(elcResponse: unknown): elcResponse is Record<
	string,
	unknown
> & {
	EventPoint: {
		x: number;
		y: number;
	};
} {
	if (elcResponse == null || typeof elcResponse !== "object") {
		return false;
	}
	return Object.hasOwn(elcResponse, "EventPoint");
}

const rootDir = parsePath(import.meta.dir).dir;
const outDir = joinPath(rootDir, "src", "milepost-line-layer");

const writePromises: Promise<number>[] = [];

for (const [
	i,
	{
		response: {
			content: { text: responseText },
		},
	},
] of errorHar.log.entries.entries()) {
	const elcResponse = JSON.parse(responseText);
	const filename = `${i}.json`;
	const outPath = joinPath(outDir, filename);
	const p = Bun.write(outPath, JSON.stringify(elcResponse, null, 2));

	writePromises.push(p);
}

await Promise.all(writePromises);
