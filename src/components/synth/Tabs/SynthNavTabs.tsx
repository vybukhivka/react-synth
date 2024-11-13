import ButtonMedium from '../../ui/ButtomMedium.tsx/ButtonMedium';
import { SynthTabs } from '../../../types/synthTabs';

type SynthNavTabsProps = {
  onTabChange: (tabName: SynthTabs) => void;
};

const SynthNavTabs: React.FC<SynthNavTabsProps> = props => {
  return (
    <div className="col-span-2 col-start-5 flex h-[34px] w-full flex-grow-0 items-center justify-between">
      <ButtonMedium text="main" onClick={() => props.onTabChange('main')} />
      <ButtonMedium text="seq" onClick={() => props.onTabChange('seq')} />
      <ButtonMedium text="mod" onClick={() => props.onTabChange('mod')} />
      <ButtonMedium text="proj" onClick={() => props.onTabChange('proj')} />
    </div>
  );
};

export default SynthNavTabs;
