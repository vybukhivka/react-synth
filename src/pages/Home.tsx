import NavBar from '../components/NavBar';

function Main() {
  return (
    <>
      <div className="flex h-[calc(100vh-4rem)] flex-col place-content-center items-center gap-y-8">
        <h1 className="text-7xl font-bold">4 Track Synthesizer</h1>
        <p className="text-xl">
          Design your pattern and share with others. Export the audio and use it
          with your expensive hardware, or favorite DAW.
        </p>
        <button className="h-12 w-32 rounded-3xl bg-slate-600 text-lg shadow-[0px_0px_5px_1px_#1f2937]">
          Play
        </button>
      </div>
    </>
  );
}

export default Main;
