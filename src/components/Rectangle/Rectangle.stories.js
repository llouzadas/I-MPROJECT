import { Rectangle } from ".";

export default {
  title: "Components/Rectangle",
  component: Rectangle,
  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showRectangle8: true,
    property1: "variant-2",
    className: {},
  },
};
