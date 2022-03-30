//* Functions for use in JavaScript
//* Use the VSCode "Better Comments" extension for enhanced viewing

///////////////////////////////////////////////////////////////////

//*** Notes / Bloqs ***

/**
 * Duplicates notes and makes them not real, useful for hitboxing
 * @param {string} track Track of the fake notes
 * @param {number} p1 Starting beat
 * @param {number} p2 Ending beat
 * @example fakeNotes("fakes", 20, 30);
 */
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

//*** Walls / Obstacles ***

/**
 * Generates a regular polygon
 * @param {string} track Track of the polygon
 * @param {number} xPos X offset of the polygon
 * @param {number} yPos Y offset of the polygon
 * @param {number} time Time of polygon
 * @param {number} radius Radius of polygon
 * @param {number} sides The number of sides the polygon has
 * @param {number} thic How thick the sides are
 * @example genPolygon("octagon", 0, 2, 20, 3, 8, 0.2); // Creates an octagon at (0, 2) at beat 20 with radius 3, thickness 0.2, and track "octagon"
 */
function genPolygon(track, xPos, yPos, time, radius, sides, thic) {
    if (typeof thic == "undefined") {thic = 0.3};
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

//*** General Use ***

/**
 * Returns an array of points to make something shake
 * @param {number} power How far the notes will move during shake
 * @param {number} speed Time between each point in the shake
 * @returns {Array} Array of points to shake things
 */
function shake(power, speed) {
    let shakePoints = [];
    for (let t = 0; t <= 1; t += quick * 4) {
        shakePoints.push(
            [power, power, 0, t], [-power, -power, 0, t + speed], [-power, power, 0, t + speed * 2], [power, -power, 0, t + speed * 3]
        )
    }
    return shakePoints;
}

/**
 * Gets a random color
 * @returns {Array} Array of three random 0-1 values
 */
const randomColor = () => [Math.random(), Math.random(), Math.random()];

//*** Other Stuff ***

const bpm = 150; //? if you're using a template, you could have this defined already
/**
 * Finds the duration of something after a BPM change
 * @param {number} newBPM The new BPM from a BPM change
 * @param {number} duration Duration of how long it *should* be
 * @returns {number} Duration for the starting BPM
 * @example dur(170,1); // The new BPM is 170, and this gives what a duration of 1 should be
 */
const dur = (newBPM, duration) => bpm / newBPM * duration;

/**
 * Chance that something will happen
 * @param {number} percent The percentange of returning true (0-1)
 * @returns {boolean} If the {@link percent} was hit
 * @example percentChance(0.75); // 75% chance of returning true
 */
const percentChance = (percent) => Math.random() <= percent;
