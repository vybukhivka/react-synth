# React Synth

(temporary name)

[![Initial synth design] (/public/initial-design.png "Synth image")]

There is a short feature list I will use during development phase.

## Features:

### General:

- Main page with introduction
- About page with brief description of the concepts
- Explore page with library of published user projects
- Contact page, I don't really think it's necessary

### Synth:

#### Sound Engines:

- 4 tracks
- Each track contains 4 knobs to design a sound

#### Sequencer Tab:

- 8 step sequencer for each of the tracks
- Ratio control. Each track can have 1:2 and 2:1 of the main Tempo (default is 1:1)
- Offset control. Each track can have unique number of step, as well as sequencer direction (forward, backward, forward-backward)

#### Modulations Tab:

- Global LFO with various waveforms for whole project
- Random generator (probably with Slope and Step options)
- 4 x 4 modulation matrix for each track
- Mod. sources: LFO, RND, MOD SEQ, VEL
- Mod. destinations: All 4 parameters of active synth track

#### Project Tab:

- User can provide a title for current project
- User can share project to public
- User can export project as audio
