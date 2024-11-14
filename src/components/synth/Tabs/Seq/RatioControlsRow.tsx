import ButtonThin from '../../../ui/ButtonThin/ButtonThin';

const RatioControlsRow: React.FC = () => {
  return (
    <div className="flex items-center justify-around gap-x-2">
      <span>T1</span>
      <ButtonThin text="1:2" />
      <ButtonThin text="1:1" />
      <ButtonThin text="2:1" />
    </div>
  );
};

export default RatioControlsRow;
