import './button.scss';

const Button = ({
  text,
  onClick = () => {
    alert('onClick not set')
  },
}) => {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;