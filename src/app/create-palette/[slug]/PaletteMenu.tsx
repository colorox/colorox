'use client'

import React from 'react'
import { Share2 } from 'react-feather'

type Props = {}

function PaletteMenu({}: Props) {
  return (
    <div>
        {/* item 1 */}
       <div>
         <Share2 size={20} strokeWidth={1.5} />
       </div>
       {/* item 2 */}
    </div>
  )
}

export default PaletteMenu