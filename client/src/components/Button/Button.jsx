import './button.scss';

const Button = ({
  type,
  text,
  classname,
  onClick = () => {
    alert('onClick not set')
  },
}) => {
  classname = classname ? classname : ''
  return (
    <button type='submit' className={'button ' + classname} onClick={onClick}>
      {text}
    </button>
  )
}


export default Button;
