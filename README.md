# QuickDrum

![Synth Image](https://github.com/vybukhivka/react-synth/blob/main/public/initial-design.png?raw=true)

QuickDrum is a user-friendly 4-track drum synthesizer with extensive sequencer and modulation capabilities.
It is a straightforward and fun tool for crafting drum patterns and sounds.

This project is currently in development and will be deployed once the feature list is complete.
In the meantime, you can follow the build guide below

## Tech Stack
- TypeScript
- React
- Redux
- React Router
- Tailwind CSS
- Vite
- Tone.js: For audio synthesis and sequencing

## Features

### General:

- ✅ Home page with introduction.                          
- ❌ About page with brief description of the concepts.
- ❌ Projects page with library of published user projects.

### Synth:

#### Sound Engines:
- ✅ Bass Drum Engine.  
- ✅ Snare/Clap Engine.
- ✅ Hi-Hat Engine.     
- ✅ FM Engine.         

#### Sequencer Tab:

- ✅ 8 step sequencer for each of the tracks.                                 
- ❌ Independent ratio control for each track (1:2 or 2:1 of the main tempo). 
- ❌ Offset control for unique step numbers.                                  

#### Modulations Tab:

- ❌ Global LFO with various waveforms.                                   
- ❌ Random generator with hold option.                                   
- ❌ 4 x 4 modulation matrix for each track.                              
- ❌ Modulation sources: LFO, RND, modulation sequencer, velocity.        
- ❌ Modulation destinations: All 4 parameters of the active synth track. 

#### Project Tab:

- ❌ Title project for identification.      
- ❌ Share project with the public library. 
- ❌ Export project as audio.               

## Installation

1. Clone the repo:
```bash
git clone https://github.com/vybukhivka/react-synth.git
```

2. Navigate to the project directory and install dependencies:
```bash
cd QuickDrum && npm i
```

3. Start the development server:
```bash
npm run dev
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests with improvements or new features.
