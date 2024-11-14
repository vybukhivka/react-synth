<<<<<<< HEAD
import SequencerButton from '../../ui/SequencerButton/SequencerButton';
import SequencerControls from '../Tabs/Main/SequencerControls/SequencerControls';
=======
import SequencerRow from './SequencerRow';
>>>>>>> synth-mod-tab

function SequncerContainer() {
  return (
<<<<<<< HEAD
    <>
      {/* <SequencerControls />
      mainTab
       */}
      <div className="col-start-1 col-end-5 row-start-4 flex items-end justify-between">
        {steps.map(step => (
          <SequencerButton key={step} />
        ))}
      </div>
    </>
=======
    <div className="col-start-1 col-end-5 row-start-3 row-end-5 flex flex-col gap-y-[18px]">
      <SequencerRow />
      <SequencerRow />
      <SequencerRow />
      <SequencerRow />
    </div>
>>>>>>> synth-mod-tab
  );
}

export default SequncerContainer;
