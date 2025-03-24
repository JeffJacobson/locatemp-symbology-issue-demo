import findNearestResponse from "./find_nearest.json";
import findResponse from "./find.json";
import Polyline from "@arcgis/core/geometry/Polyline";
import Graphic from "@arcgis/core/Graphic";

/**
 * Returns a sample Graphic object for the milepost layer.
 *
 * @returns A Graphic object with a Polyline geometry and attributes
 */
export function getGraphic(): Graphic {
	/* __PURE__ */
	const {
		EventPoint: { x: clickPointX, y: clickPointY },
		RouteGeometry: _unused_route_geometry,
		...findNearestAttributes
	} = findNearestResponse;
	const {
		RouteGeometry: { x: mpPointX, y: mpPointY, spatialReference },
		Back: isBack,
		...findAttributes
	} = findResponse;

	const polyline = new Polyline({
		paths: [
			[
				[clickPointX, clickPointY],
				[mpPointX, mpPointY],
			],
		],
		spatialReference,
	});

	const graphic = new Graphic({
		geometry: polyline,
		attributes: {
			...findNearestAttributes,
			...findAttributes,
			Back: isBack ? "B" : "",
			EndSrmp: null,
			EndBack: null,
		},
	});
	return graphic;
}
