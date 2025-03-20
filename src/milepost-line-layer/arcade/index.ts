import type LabelClass from "@arcgis/core/layers/support/LabelClass";
import routeSegmentLabelArcade from "./Route Segment Label.exp?raw";

export const routeSegmentLabelExpressionInfo: LabelClass["labelExpressionInfo"] =
	{
		title: "Route Segment Label",
		expression: routeSegmentLabelArcade,
	} as const;
