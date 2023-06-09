import namedColors from "color-name-list/dist/colornames.json";
import nearestColor from "nearest-color";
import chroma from "chroma-js";


const colors = namedColors.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});

export const getColorName = nearestColor.from(colors);

export const getIconColor = (color: string) => (chroma(color).luminance() < 0.05 ? "#000" : "#fff");
