import './button.scss';

const Button = ({
  text,
  classname,
  onClick = () => {
    alert('onClick not set')
  },
}) => {
  classname = classname ? classname : ''
  return (
    <button className={'button ' + classname} onClick={onClick}>
      {text}
    </button>
  )
}


export default Button;
