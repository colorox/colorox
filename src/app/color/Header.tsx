import ColorPicker from './ColorPicker'
import css from './style.module.css'
type Props = {}

function Header({ }: Props) {
    return (
        <div className={css.header}>
            <ColorPicker />
        </div>
    )
}

export default Header