'use client'

import React from 'react'
import css from './style.module.css'
import { useColorContext } from '../../colorContext'

import { extend } from "colord";
import mixPlugin from "colord/plugins/mix";
extend([mixPlugin]);

type Props = {}

function ColorTones({ }: Props) {
    const { state } = useColorContext();
    const { color } = state;
    const tones = color.tones(7).map((c) => c.toHex());
    return (
        <div className={css.shades}>
            {tones.map((color, index) => (
                <div className={css.shade} style={{ backgroundColor: color }} key={index}>
                </div>
            ))}
        </div>
    )
}

export default ColorTones