import React from 'react'
import NewPalette from './NewPalette'

type Props = {
  params: any
}

function page({params}: Props) {
  const slug = {params};
  console.log(slug)

  return (
    <div>
      <NewPalette />
    </div>
  )
}

export default page