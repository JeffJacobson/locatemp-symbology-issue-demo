import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MilepostOffsetLineRenderer from "./MilepostOffsetLineRenderer";
import { lineSegmentLabelClass } from "./label";
import waExtent from "../WAExtent";
import { fields } from "./fields";

/**
 * Creates a new feature layer that displays mileposts as lines.
 * @param spatialReference - The spatial reference of the layer.
 * @returns A new feature layer that displays mileposts as lines.
 */
export function createMilepostLineLayer(
	spatialReference = waExtent.spatialReference,
) {
	// Make a clone of the milepost point layer, as most of the properties
	// will be the same aside from the geometry type and renderer.
	const lineLayerProperties: __esri.FeatureLayerProperties = {
		geometryType: "polyline",
		title: "Near Mileposts",
		fields,
		objectIdField: fields.filter((f) => f.type === "oid")[0].name,
		id: "nearMileposts",
		listMode: "hide",
		fullExtent: waExtent,
		spatialReference,
		// Since there are no features at the beginning,
		// need to add an empty array as the source.
		renderer: MilepostOffsetLineRenderer,
		source: [],
		popupEnabled: true,
		hasM: true,
		labelingInfo: [lineSegmentLabelClass],
	};
	const lineLayer = new FeatureLayer(lineLayerProperties);
	return lineLayer;
}
