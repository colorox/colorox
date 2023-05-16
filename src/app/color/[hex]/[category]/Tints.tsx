'use client'

import React from 'react'
import css from './style.module.css'
import { useColorContext } from '../colorContext'

import { extend } from "colord";
import mixPlugin from "colord/plugins/mix";
extend([mixPlugin]);

type Props = {}

function ColorShadows({ }: Props) {
    const { state } = useColorContext();
    const { color } = state;
    const tints = color.tints(7).map((c) => c.toHex());
    return (
        <div className={css.shades}>
            {tints.map((color, index) => (
                <div className={css.shade} style={{ backgroundColor: color }} key={index}>
                </div>
            ))}
        </div>
    )
}

export default ColorShadows