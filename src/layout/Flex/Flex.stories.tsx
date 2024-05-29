import * as React from "react";
import type { Meta } from '@storybook/react';
import { Flex, FlexProps } from './Flex';
import { StorybookComponent, range } from '@react-simple/react-simple-util';

const meta: Meta<typeof Flex> = {
	component: Flex,
	title: "Flex layout/Flex",
	args: {
		id: "test_flex",
		direction: "column"
	},
	argTypes: {
		id: {
			title: "Id of element"
		},
		className: {
			title: "Class names",
			control: { type: "text" }
		},
		direction: {
			title: "Flex direction",
			control: { type: "select" },
			options: ["row", "column", "row-reverse", "column-reverse"]
		},
		gap: {
			title: "Custom gap, default is 0.5em, which can be overriden in REACT_SIMPLE_UI.FLEX.DEFAULT_GAP.",
			control: { type: "text" }
		}
	},
	parameters: {
		controls: {
			exclude: ["children"]
		}
	}
};

export default meta;

type SC = StorybookComponent<FlexProps>;
const Template: SC = args => <Flex {...args} />;

export const Default: SC = Template.bind({});
Default.args = {
	children: range(1, 10).map(t => <div key={t}>Item {t}</div>)
};
