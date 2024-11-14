type ButtonThinProps = {
  text: string;
};

function ButtonThin({ text }: ButtonThinProps) {
  return (
    <button className="h-[20px] w-[68px] rounded-[5px] border text-xs">
      {text}
    </button>
  );
}

export default ButtonThin;
