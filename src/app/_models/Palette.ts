import { Schema, model } from "mongoose";

type Color = string;

interface IPalette {
    colors: Array<Color>;
    categories: Array<string>
    likes: Number,
    date: Date;
}

const PaletteSchema = new Schema<IPalette>({
    colors: Array,
    categories: Array,
    likes: { type: Number, default: 0 },
    date: { type: Date, required: true },
});

const Palette = model<IPalette>("palette", PaletteSchema);

export { Palette };
