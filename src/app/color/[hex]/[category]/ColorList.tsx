'use client'

import React, { useEffect } from 'react'
import css from './style.module.css'
import { useColorContext } from '../../colorContext'

import { Colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import { useParams } from 'next/navigation';
extend([mixPlugin]);

type Props = {}

function ColorList({ }: Props) {
    const { state } = useColorContext();
    const { color } = state;
    const category = useParams()?.category;

    let colors: string[] = [];

    if (category === 'tints') {
        colors = color.tints(7).map((c) => c.toHex());
    }
    else if (category === 'shades') {
        colors = color.shades(7).map((c) => c.toHex());
    }
    else if (category === 'tones') {
        colors = color.tones(7).map((c) => c.toHex());
    }

    return (
        <div className={css.shades}>
            {colors.map((color, index) => (
                <div className={css.shade} style={{ backgroundColor: color }} key={index}>
                </div>
            ))}
        </div>
    )
}

export default ColorList