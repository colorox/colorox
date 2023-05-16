import ColorPicker from './ColorPicker'
import OptionsDropdown from './OptionsDropdown'
import css from './style.module.css'
type Props = {}

function Header({ }: Props) {
    return (
        <div className={css.header}>
            <OptionsDropdown />
            <ColorPicker urlSuffix={'/tints'} />
        </div>
    )
}

export default Header