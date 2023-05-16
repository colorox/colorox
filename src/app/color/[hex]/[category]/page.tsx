import React from "react";
import ColorProvider from "../colorContext";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import ColorShadows from "./ColorShadows";
import Header from "./Header";
import ColorTints from "./ColorTints";
import ColorTones from "./ColorTones";
extend([mixPlugin]);

type Props = {
  params: any;
};

const categories = [
  'tints',
  'shades',
  'tones',
]


function page({ params }: Props) {
  const { hex, category } = params;

  if (!categories.includes(category)) {
    throw new Error('Page Not Found')
  }

  let content = null;

  if (category === 'tints') {
    content = <ColorTints />
  }
  else if (category === 'shades') {
    content = <ColorShadows />
  }
  else {
    content = <ColorTones />
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default page;
