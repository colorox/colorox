'use client'

import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

type Props = {}

function OptionsDropdown({ }: Props) {
  const options = [
    { value: 'tints', label: 'Tints' },
    { value: 'shades', label: 'Shades' },
    { value: 'tones', label: 'Tones' },
    {
      type: 'group', name: 'Color Harmonies', items: [
        { value: 'analogous', label: 'Analogous' },
        { value: 'complementary', label: 'Complementary' },
        { value: 'split-complementary', label: 'Split Complementary' },
        { value: 'triadic', label: 'Triadic' },
        { value: 'tetradic', label: 'Tetradic' },
        { value: 'square', label: 'Square' }
      ]
    },
  ];

  const defaultOption = options[0];

  const handleSelect = () => {
    console.log("selected")
  }

  return (
    <div>
      <Dropdown options={options} onChange={handleSelect} value={defaultOption} placeholder="Select an option" />
    </div>
  )
}

export default OptionsDropdown