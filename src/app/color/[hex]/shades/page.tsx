import React from "react";
import ColorPicker from "../ColorPicker";
import ColorProvider from "../colorContext";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import ColorShadows from "./ColorShadows";
extend([mixPlugin]);

type Props = {
  params: any;
};

function page({ params }: Props) {
  const { hex } = params;
  const color = colord("#" + hex);
  if (!color.isValid()) {
    throw new Error("Invalid Color");
  }


  return (
    <div>
      <ColorProvider hex={"#" + hex}>
        <ColorPicker urlSuffix={'/shades'} />
        <ColorShadows />
      </ColorProvider>
    </div>
  );
}

export default page;
