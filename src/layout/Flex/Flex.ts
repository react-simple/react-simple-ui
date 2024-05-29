import * as React from "react";
import { CSSProperties, HTMLAttributes } from "react";
import { styled } from "styled-components";
import { REACT_SIMPLE_UI } from "data";

export type FlexProps =
	& HTMLAttributes<HTMLDivElement>
	& Partial<Pick<CSSProperties, "justifyContent" | "alignItems" | "alignContent">>
	& {
		direction: CSSProperties["flexDirection"];
		gap?: CSSProperties["gap"]; // default is REACT_SIMPLE_UI.FLEX.DEFAULT_GAP
		distributeEvenly?: boolean;
		nowrap?: boolean;
	};

export const Flex = styled.div<FlexProps>`
	display: flex;
	flex-direction: ${({ direction }) => direction};

	${({ nowrap }) => !nowrap && "flex-wrap: wrap;"}
	${({ gap }) => `gap: ${gap || REACT_SIMPLE_UI.FLEX.DEFAULT_GAP};`}
	${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
	${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
	${({ alignContent }) => alignContent && `align-content: ${alignContent};`}
	${({ distributeEvenly }) => distributeEvenly && "> * { flex: 1; }"}
`;
