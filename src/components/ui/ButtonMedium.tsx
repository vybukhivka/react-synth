type ButtonMediumProps = {
  onClick: (tabName: string) => void;
  text: string;
};

function ButtonMedium({ onClick, text }: ButtonMediumProps) {
  return <button onClick={() => onClick(text)}>{text}</button>;
}

export default ButtonMedium;
