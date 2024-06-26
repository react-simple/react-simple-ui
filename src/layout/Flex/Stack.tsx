import * as React from "react";
import { Flex, FlexProps } from "./Flex";

export type StackProps = Omit<FlexProps, "direction">;

export const Stack = (props: StackProps) => {
	return (
		<Flex {...props} direction="column" />
	);
};
