import React from "react";
import ColorList from "./ColorList";

type Props = {
  params: any,
};

function page({ }: Props) {
  return (
    <div>
      <ColorList />
    </div>
  );
}

export default page;
