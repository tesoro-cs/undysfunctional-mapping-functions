//* You're gonna have to figure out how to use these yourself

_pointDefinitions.push({
    _name: "white", // used with _color
    _points: [
        [1, 1, 1, 0]
    ]
}, {
    _name: "black", // used with _color
    _points: [
        [0, 0, 0, 0]
    ]
}, {
    _name: "beatBump", // used with _scale to go with the beat (figure it out lol)
    _points: [
        [0.7, 1.3, 1, 0],
        [1, 1, 1, 0.125],
        [1, 1, 1, 0.499],
        [1.3, 0.7, 1, 0.5],
        [1, 1, 1, 0.625]
    ]
}, {
    _name: "goneBack2", // used with _dissolve to make things flash
    _points: [
        [0, 0],
        [0, 0.249],
        [1, 0.25],
        [1, 0.499],
        [0, 0.5],
        [0, 0.749],
        [1, 0.75],
        [1, 1],
    ]
}, {
    _name: "gone", // used with _dissolve
    _points: [
        [0, 0]
    ]
}, {
    _name: "half", // used with _dissolve
    _points: [
        [0.5, 0]
    ]
}, {
    _name: "back", // used with _dissolve
    _points: [
        [1, 0]
    ]
}, {
    _name: "appear", // used with _dissolve
    _points: [
        [0, 0],
        [1, 1]
    ]
}, {
    _name: "disappear", // used with _dissolve
    _points: [
        [1, 0],
        [0, 1]
    ]
}, {
    _name: "andGone", // used with _dissolve
    _points: [
        [1, 0],
        [1, 0.999],
        [0, 1]
    ]
}, {
    _name: "outtaHere", // used with _time
    _points: [
        [1.1, 0]
    ]
}, {
    _name: "stay", // used with _time
    _points: [
        [0.5, 0],
        [0.5, 1],
        [1.1, 1]
    ]
}, {
    _name: "hold", // used with _time
    _points: [
        [0.5, 0]
    ]
}, {
    _name: "origin", // used with _position and _rotation
    _points: [
        [0, 0, 0, 0]
    ]
}, {
    _name: "inAndOut", // used with _dissolve
    _points: [
        [0, 0],
        [1, 0.1],
        [1, 0.9],
        [0, 1]
    ]
}, {
    _name: "upThenDown", // used with _position
    _points: [
        [0, 0, 0, 0],
        [0, 1, 0, 0.1, "easeOutCubic"],
        [0, 1, 0, 0.5],
        [0, 0, 0, 0.6, "easeOutCubic"],
        [0, 0, 0, 1]
    ],
}, {
    _name: "roll", // used with _rotation
    _points: [
        [0, 0, 0, 0],
        [0, 0, -90, 0.25],
        [0, 0, -180, 0.5],
        [0, 0, -270, 0.75],
        [0, 0, -360, 1]
    ]
}, {
    _name: "rollCC", // used with _rotation
    _points: [
        [0, 0, 0, 0],
        [0, 0, 90, 0.25],
        [0, 0, 180, 0.5],
        [0, 0, 270, 0.75],
        [0, 0, 360, 1]
    ]
}, {
    _name: "unrollCC", // used with _rotation
    _points: [
        [0, 0, -180, 0],
        [0, 0, -90, 0.25],
        [0, 0, 0, 0.5],
        [0, 0, 90, 0.75],
        [0, 0, 180, 1]
    ]
}, {
    _name: "pitch", // used with _rotation
    _points: [
        [0, 0, 0, 0],
        [90, 0, 0, 0.25],
        [180, 0, 0, 0.5],
        [270, 0, 0, 0.75],
        [360, 0, 0, 1]
    ]
}, {
    _name: "pitchRev", // used with _rotation
    _points: [
        [0, 0, 0, 0],
        [-90, 0, 0, 0.25],
        [-180, 0, 0, 0.5],
        [-270, 0, 0, 0.75],
        [-360, 0, 0, 1]
    ]
}, {
    _name: "yaw", // used with _rotation
    _points: [
        [0, 0, 0, 0],
        [0, 90, 0, 0.25],
        [0, 180, 0, 0.5],
        [0, 270, 0, 0.75],
        [0, 360, 0, 1]
    ]
}, {
    _name: "yawRev", // used with _rotation
    _points: [
        [0, 0, 0, 0],
        [0, -90, 0, 0.25],
        [0, -180, 0, 0.5],
        [0, -270, 0, 0.75],
        [0, -360, 0, 1]
    ]
}, {
    _name: "hiThere", // used with _dissolve
    _points: [
        [0, 0],
        [0, 0.75],
        [1, 1]
    ]
}, {
    _name: "doubleRainbow", // used with _color
    _points: [
        [1, 0, 0, 1, 0],
        [1, 0.5, 0, 1, 0.1],
        [1, 1, 0, 1, 0.2],
        [0, 1, 0, 1, 0.3],
        [0, 0, 1, 1, 0.4],
        [1, 0, 1, 1, 0.5],
        [1, 0, 0, 1, 0.6],
        [1, 0.5, 0, 1, 0.7],
        [1, 1, 0, 1, 0.8],
        [0, 1, 0, 1, 0.9],
        [0, 0, 1, 1, 1]
    ]
});