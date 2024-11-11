import ButtonMedium from '../ui/ButtonMedium';
import { SynthTabs } from '../../types/synthTabs';

type SynthNavTabsProps = {
  onTabChange: (tabName: SynthTabs) => void;
};

function SynthNavTabs({ onTabChange }: SynthNavTabsProps) {
  return (
    <div className="flex h-[34px] w-[308px] flex-grow-0 items-center justify-between">
      <ButtonMedium text="main" onClick={() => onTabChange('main')} />
      <ButtonMedium text="seq" onClick={() => onTabChange('seq')} />
      <ButtonMedium text="mod" onClick={() => onTabChange('mod')} />
      <ButtonMedium text="proj" onClick={() => onTabChange('proj')} />
    </div>
  );
}

export default SynthNavTabs;
