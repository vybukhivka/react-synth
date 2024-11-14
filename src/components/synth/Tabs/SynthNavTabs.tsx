import ButtonMedium from '../../ui/ButtomMedium.tsx/ButtonMedium';
import { SynthTabs } from '../../../types/synthTabs';

type SynthNavTabsProps = {
  onTabChange: (tabName: SynthTabs) => void;
};

const SynthNavTabs: React.FC<SynthNavTabsProps> = props => {
  return (
    <div className="top-0 col-start-5 row-start-1 flex h-[34px] w-full flex-grow-0 items-center justify-around gap-0">
      <ButtonMedium text="main" onClick={() => props.onTabChange('main')} />
      <ButtonMedium text="seq" onClick={() => props.onTabChange('seq')} />
      <ButtonMedium text="mod" onClick={() => props.onTabChange('mod')} />
      <ButtonMedium text="proj" onClick={() => props.onTabChange('proj')} />
    </div>
  );
};

export default SynthNavTabs;
