import { HTMLAttributes } from 'react';
import { isPrimitiveType, isFunction, isEmptyObject, isArray, isString } from "@react-simple/react-simple-util";
import { Cluster, Stack } from 'layout/Flex';

export interface ObjectRendererProps extends HTMLAttributes<HTMLDivElement> {
	obj: unknown;
}

const renderContent = (
	obj: unknown,
	objRefIndex: string = "0",
	history: { objRefIndex: string, obj: unknown }[] = []
) => {
	if (obj === undefined) {
		return "(undefined)";
	}
	else if (obj === null) {
		return "(null)";
	}
	else if (obj === "") {
		return "";
	}
	else if (isString(obj)) {
		return `"${obj}"`;
	}
	else if (isPrimitiveType(obj)) {
		return obj.toString();
	}
	else if (isFunction(obj)) {
		return "(func)";
	}
	else if (isEmptyObject(obj)) {
		return "{}";
	}
	else {
		// avoid infinite loops
		const prevRef = history.find(t => t.obj === obj);

		if (prevRef) {
			return <em>{"->"} reference to {isArray(prevRef.objRefIndex) ? "array" : "object"} #{prevRef.objRefIndex}</em>;
		}
		else {
			history.push({ obj, objRefIndex });

			if (isArray(obj)) {
				return (
					<Cluster>
						<Stack>
							<div><strong>array #{objRefIndex}</strong></div>

							{obj.map((value, index) => (
								<Cluster key={index} style={{ borderBottom: "1px solid lightgray" }}>
									<div style={{ minWidth: "8em" }}>[{index}]:</div>
									<div>{renderContent(value, `${objRefIndex}.${index}`, history)}</div>
								</Cluster>
							))}
						</Stack>
					</Cluster>
				);
			}
			else {
				return (
					<Cluster>
						<Stack>
							<div><strong>object #{objRefIndex}</strong></div>

							{Object.entries(obj || {}).map(([key, value], index) => (
								<Cluster key={key} style={{ borderBottom: "1px solid lightgray" }}>
									<div style={{ minWidth: "8em" }}>[{key}]</div>
									<div>{renderContent(value, `${objRefIndex}.${index}`, history)}</div>
								</Cluster>
							))}
						</Stack>
					</Cluster>
				);
			}
		}
	}
};

export const ObjectRenderer = ({ obj, ...rest }: ObjectRendererProps) => {
	return (
		<div {...rest}>{renderContent(obj)}</div>
	);
};
