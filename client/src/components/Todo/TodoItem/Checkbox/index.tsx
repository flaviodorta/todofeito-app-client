import './styles.css';

interface Props {
  isChecked: () => void;
}

export function Checkbox(props: Props): JSX.Element {
  return (
    <label className='custom-checkbox' tab-index='0' aria-label='checkbox'>
      <input type='checkbox' onChange={props.isChecked} />
      <span className='checkmark' aria-hidden='true' />
    </label>
  );
}
