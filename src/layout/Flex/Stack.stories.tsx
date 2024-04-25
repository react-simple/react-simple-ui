import type { Meta } from '@storybook/react';
import { StorybookComponent, range } from '@react-simple/react-simple-util';
import { Stack, StackProps } from './Stack';

const meta: Meta<typeof Stack> = {
	component: Stack,
	title: "Flex layout/Stack",
	args: {
		id: "test_flex"
	},
	argTypes: {
		id: {
			title: "Id of element"
		},
		className: {
			title: "Class names",
			control: { type: "text" }
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

type SC = StorybookComponent<StackProps>;
const Template: SC = args => <Stack {...args} />;

export const Default: SC = Template.bind({});
Default.args = {
	children: range(1, 10).map(t => <div key={t}>Item {t}</div>)
};
