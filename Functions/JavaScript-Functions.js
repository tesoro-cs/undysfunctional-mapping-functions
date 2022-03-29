//* Functions for use in JavaScript
//* Use the VSCode "Better Comments" extension for better viewing

/////////////////////////////////////////////////////////////////

//* Notes / Bloqs

// duplicates notes and makes them not real - useful for hitboxing
// fakeNotes("fake", 20, 30);
function fakeNotes(track, p1, p2) {
    let realNotes = _notes.filter(n => n._time >= p1 && n._time <= p2);
    realNotes.forEach(note => {
        let fake = JSON.parse(JSON.stringify(note));
        fake._customData = {
            _track: track,
            _interactable: false,
            _fake: true
        };
        //? might want to add something like "fake._time = note._time + 0.01;" to prevent weird jump animations
        _notes.push(fake);
    });
};

//* Walls / Obstacles

// generates a regular polygon
// genPolygon("octagon", 0, 2, 20, 3, 8, 0.2); - creates an octagon at (0, 2) at beat 20 with radius 3 and thickness 0.2
function genPolygon(track, xPos, yPos, time, radius, sides, thic) {
    if (typeof thic == "undefined") {
        thic = 0.3;
    };
    let angle = -90;
    let length = round((2 * radius * Math.tan(Math.PI / sides)), 4);
    // pay attention in geometry class
    for (let side = 0; side < sides; side++) {
        _obstacles.push({
            _time: time,
            _lineIndex: 0,
            _type: 0,
            _duration: 0,
            _width: 0,
            _customData: {
                _scale: [
                    length,
                    thic,
                    thic
                ],
                _position: [
                    radius * Math.cos(angle * Math.PI / 180) + xPos - length / 2,
                    radius * Math.sin(angle * Math.PI / 180) + yPos
                ],
                _animation: {
                    _localRotation: [
                        [0, 0.01, angle + 90, 0]
                    ]
                },
                _track: track
            }
        });
        angle += 360 / sides;
    };
};

//* Other Stuff

// finds the duration of something after a BPM change
// dur(170,1); - the new BPM is 170, and this gives what a duration of 1 should be
const bpm = 150; //? if you're using a template, you could have this defined already
const dur = (newBPM, duration) => bpm / newBPM * duration;

// gets a random color for ya
const randomColor = () => [Math.random(), Math.random(), Math.random()];

// chance out of 1 that something will happen
// percentChance(0.75); - 75% chance of returning true
const percentChance = (percent) => Math.random() <= percent;