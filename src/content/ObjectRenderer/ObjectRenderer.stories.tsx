import type { Meta } from '@storybook/react';
import { ObjectRenderer, ObjectRendererProps } from './ObjectRenderer';
import { StorybookComponent } from '@react-simple/react-simple-util';

const meta: Meta<typeof ObjectRenderer> = {
	component: ObjectRenderer,
	title: "Content/ObjectRenderer",
	args: {
		id: "object_renderer"
	},
	argTypes: {
		id: {
			title: "Id of element"
		},
		className: {
			title: "Class names",
			control: { type: "text" }
		},
		obj: {
			title: "The object to render with all members and values"
		}
	},
	parameters: {
		controls: {
			exclude: ["children"]
		}
	}
};

export default meta;

type SC = StorybookComponent<ObjectRendererProps>;
const Template: SC = args => <ObjectRenderer {...args} />;

export const Default: SC = Template.bind({});
Default.args = {
	obj: {
		number: 1,
		string: "test string",
		array: ["A", "B", "C"],
		object: {
			member1: 1,
			member2: "Two"
		}
	}
};
