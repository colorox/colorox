'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Dropdown, { Option } from 'react-dropdown';

type Props = {}

const options = [
  { value: 'tints', label: 'Tints' },
  { value: 'shades', label: 'Shades' },
  { value: 'tones', label: 'Tones' },

  { value: 'analogous', label: 'Analogous' },
  { value: 'complementary', label: 'Complementary' },
  { value: 'split-complementary', label: 'Split Complementary' },
  { value: 'triadic', label: 'Triadic' },
  { value: 'tetradic', label: 'Tetradic' },
  { value: 'square', label: 'Square' }
];


function OptionsDropdown({ }: Props) {
  const [value, setValue] = useState(options[0].value)
  const router = useRouter();

  const handleSelect = (item: Option) => {
    setValue(item.value)
    router.push(`/color/fd12a3/${value}`)
  }

  return (
    <div>
      <Dropdown
        options={options}
        onChange={handleSelect}
        value={value}
        placeholder="Select an option"
        arrowClosed={<span className="arrow-closed" />}
        arrowOpen={<span className="arrow-open" />} />
    </div>
  )
}

export default OptionsDropdown