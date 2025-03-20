import type { ArcgisMapCustomEvent } from "@arcgis/map-components";
import type { ArcgisMap } from "@arcgis/map-components/components/arcgis-map";

export async function addLayersToMap(
	this: ArcgisMap,
	event: ArcgisMapCustomEvent<void>,
) {
	const { map } = event.target;

	const { createMilepostLineLayer } = await import("./milepost-line-layer");

	const mpLineLayer = createMilepostLineLayer();

	

	map.add(mpLineLayer);
}
