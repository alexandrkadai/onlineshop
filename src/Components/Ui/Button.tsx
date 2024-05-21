import classes from './Button.module.scss';
type Props = {
  text: string;
  onClick: () => void;
};

const Button = (props: Props) => {
  return <button className={classes.button}>{props.text}</button>;
};

export default Button;
