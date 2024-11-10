type ButtonMediumProps = {
  onClick: (param: string) => void;
};

function ButtonMedium({ onClick }: ButtonMediumProps) {
  return <button onClick={() => onClick()}></button>;
}

export default ButtonMedium;
