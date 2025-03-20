import Collection from "@arcgis/core/core/Collection";
import type Field from "@arcgis/core/layers/support/Field";
import ActionButton from "@arcgis/core/support/actions/ActionButton";

export type FieldProperties = Required<ConstructorParameters<typeof Field>>[0];

const actionButtonProperties: __esri.ActionButtonProperties[] = [
	{
		active: false,
		title: "Copy coordinates",
		visible: true,
		type: "button",
		icon: "copy-to-clipboard",
		id: "copy",
	},
];

function createActionButtons() {
	return new Collection<InstanceType<typeof ActionButton>>(
		actionButtonProperties.map((ap) => new ActionButton(ap)),
	);
}

// /**
//  * A function that creates and adds field information for an expression.
//  * @param milepostExpressionInfo - The expression information to create the field info for.
//  * @returns The created field info.
//  */
// function createAndAddFieldInfoForExpression(
// 	milepostExpressionInfo: MilepostExpressionInfo,
// ) {
// 	const fieldInfo = new FieldInfo({
// 		fieldName: `expression/${milepostExpressionInfo.name}`,
// 		visible: !["webMercatorToWgs1984", "milepostLabel"].includes(
// 			milepostExpressionInfo.name,
// 		),
// 	});
// 	return fieldInfo;
// }
