import ButtonMedium from '../../ui/ButtomMedium/ButtonMedium';
import { SynthTabs } from '../../../types/synthTabs';

type SynthNavTabsProps = {
  onTabChange: (tabName: SynthTabs) => void;
  activeTab: string;
};

const tabs: SynthTabs[] = ['main', 'seq', 'mod', 'proj'];

const SynthNavTabs: React.FC<SynthNavTabsProps> = props => {
  return (
    <div className="top-0 col-start-5 row-start-1 flex h-[34px] w-full flex-grow-0 items-center justify-around gap-0">
      {tabs.map(tab => (
        <ButtonMedium
          key={tab}
          text={tab}
          onClick={() => props.onTabChange(tab)}
          isActive={props.activeTab === tab}
        />
      ))}
    </div>
  );
};

export default SynthNavTabs;
