import React from 'react'
import NewPalette from './NewPalette'
import PaletteMenu from './PaletteMenu'

type Props = {
  params: any
}

function page({params}: Props) {
  const slug = {params};
  console.log(slug)

  return (
    <div>
      <PaletteMenu />
      <NewPalette />
    </div>
  )
}

export default page