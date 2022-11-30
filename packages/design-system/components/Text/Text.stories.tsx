import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from ".";

export default {
  title: "Components/Text",
  args: {
    children: "Label",
  },
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
