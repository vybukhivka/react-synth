type PlaybackButtonProps = {
  text: string;
};

function PlaybackButton({ text }: PlaybackButtonProps) {
  return (
    <button className="h-[76px] w-[76px] rounded-lg border">{text}</button>
  );
}

export default PlaybackButton;
