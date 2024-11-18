import ButtonThin from '../../../../ui/ButtonThin/ButtonThin';

const SequencerControls: React.FC = () => {
  return (
    <div className="col-start-1 col-end-5 row-start-4 flex items-end justify-between">
      <div className="flex gap-x-[20px]">
        <ButtonThin text="1:2" />
        <ButtonThin text="1:1" />
        <ButtonThin text="2:1" />
      </div>
      <div className="flex w-[328px] justify-between">
        <ButtonThin text="PITCH" />
        <ButtonThin text="VEL" />
        <ButtonThin text="PROB" />
        <ButtonThin text="MOD" />
      </div>
    </div>
  );
};

export default SequencerControls;
