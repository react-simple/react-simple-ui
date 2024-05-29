import * as React from "react";
import { Flex, FlexProps } from "./Flex";

export type ClusterProps = Omit<FlexProps, "direction">;

export const Cluster = (props: ClusterProps) => {
	return (
		<Flex {...props} direction="row" />
	);
};
