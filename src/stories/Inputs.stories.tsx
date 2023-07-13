import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input } from "components";

export default {
  title: "edtech/Input",
  component: Input,
};

export const SampleInput: Story<any> = (args) => <Input {...args} />;
SampleInput.args = {
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
