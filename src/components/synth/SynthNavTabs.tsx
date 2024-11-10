import ButtonMedium from '../ui/SynthButtonThin';

type SynthNavTabsProps = {
  onActiveTab: (tab: string) => void;
};

function SynthNavTabs({ onActiveTab }: SynthNavTabsProps) {
  return (
    <div>
      <ButtonMedium onClick={() => onActiveTab('main')}>main</ButtonMedium>
      <ButtonMedium onClick={() => onActiveTab('seq')}>seq</ButtonMedium>
      <ButtonMedium onClick={() => onActiveTab('mod')}>mod</ButtonMedium>
      <ButtonMedium onClick={() => onActiveTab('proj')}>proj</ButtonMedium>
    </div>
  );
}

export default SynthNavTabs;
