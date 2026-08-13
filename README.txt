APTIS LISTENING PART 2 PRACTICE — V4

V4 fixes the V3 Chrome local-audio error.

DO NOT use C:\... or file:///C:/... paths.

Put your 12 MP3 files in the "audio" folder next to index.html:

Aptis_Listening_Part2_Practice_V4/
  index.html
  style.css
  app.js
  data.js       <- 12 topics: text + answers + KEY
  audio/
    01.mp3
    02.mp3
    03.mp3
    04.mp3
    05.mp3
    06.mp3
    07.mp3
    08.mp3
    09.mp3
    10.mp3
    11.mp3
    12.mp3

Mapping:
01 = Protect the environment
02 = Online shopping
03 = Prefer to study
04 = Listening to music
05 = Enviroment problem
06 = Outdoor activities
07 = Place to run
08 = Doing exercise
09 = Using the internet
10 = Does art
11 = They journey to work
12 = A place for studying

The app automatically uses:
audio/01.mp3 ... audio/12.mp3

How to run:
1. Extract the ZIP.
2. Put the 12 MP3 files in the audio folder.
3. Rename them exactly 01.mp3 through 12.mp3.
4. Open the folder in VS Code.
5. Run index.html with Live Server.
6. Press Play.

This means Chrome loads audio from the same website, e.g.
http://127.0.0.1:5500/audio/01.mp3

This fixes:
"Not allowed to load local resource: file:///C:/..."
and the resulting:
"NotSupportedError: The element has no supported sources."

V4 keeps the V3 learning behavior:
- 12 supplied topics
- 4 supplied answers per topic
- 2 synthetic distractors because the source does not provide official distractors
- Play maximum 2 times
- KEY training hidden until Check answers
- KEY training hidden after Reset and when changing topic
- Collapsible source transcript for each KEY
- Yellow listening-cue highlights
- Saved answers/bookmarks in the browser

DATA FILE
---------
The 12 topics are now separated from the application logic.
- data.js = topic titles, Speaker A-D transcripts, supplied answers, KEY highlights, and distractors.
- app.js = application behavior only (audio, scoring, Check answers, KEY training, navigation, etc.).
- index.html loads data.js BEFORE app.js.

To edit a transcript, answer, or KEY later, edit data.js only.
Do not remove the outer `const TOPICS = ...;` declaration.
