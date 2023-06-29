const special_moves = {
    1: {
        name: "God Hand", // IE 1
        TP: 21,
        element: "Earth",
        type: "Catch",
    },
    2: {
        name: "God Hand", // IE 1 (Blue), Element change.
        TP: 21,
        element: "Wood",
        type: "Catch",
    },
    3: {
        name: "Grenade Shot", // IE 1
        TP: 17,
        element: "Fire",
        type: "Shoot",
    },
    4: {
        name: "Majin The Hand", // IE 1
        TP: 46,
        element: "Earth",
        type: "Catch",
    },
    5: {
        name: "Triple Defense", // IE 1
        TP: 46,
        element: "Earth",
        type: "Catch",
    },
    6: {
        name: "The Wall", // IE 1
        TP: 25,
        element: "Earth",
        type: "Block",
    },
    7: {
        name: "Super Armadillo", // IE 1
        TP: 22,
        element: "Earth",
        type: "Dribble",
    },
    8: {
        name: "Mole Fake", // IE 1
        TP: 30,
        element: "Earth",
        type: "Dribble",
    },
    9: {
        name: "Mega Quake", // IE 1
        TP: 38,
        element: "Earth",
        type: "Block",
    },
    10: {
        name: "Coil Turn", // IE 1
        TP: 15,
        element: "Wind",
        type: "Block",
    },
    11: {
        name: "About Face", // IE 1
        TP: 17,
        element: "Earth",
        type: "Block",
    },
    12: {
        name: "Afterimage", // IE 1
        TP: 25,
        element: "Wood",
        type: "Dribble",
    },
    13: {
        name: "Shadow Stitch", // IE 1
        TP: 33,
        element: "Wood",
        type: "Block",
    },
    14: {
        name: "Flurry Dash", // IE 1
        TP: 15,
        element: "Wind",
        type: "Dribble",
    },
    15: {
        name: "Quick Draw", // IE 1
        TP: 15,
        element: "Wood",
        type: "Block",
    },
    16: {
        name: "Fire Rooster", // IE 1
        TP: 56,
        element: "Fire",
        type: "Shoot",
    },
    17: {
        name: "Clone Faker", // IE 1
        TP: 36,
        element: "Wood",
        type: "Dribble",
    },
    18: {
        name: "Rodeo Clown", // IE 1
        TP: 15,
        element: "Wind",
        type: "Dribble",
    },
    19: {
        name: "Comet Shot", // IE 1
        TP: 24,
        element: "Wind",
        type: "Shoot",
    },
    20: {
        name: "Monkey Turn", // IE 1
        TP: 17,
        element: "Earth",
        type: "Dribble",
    },
    21: {
        name: "Run Ball Run", // IE 1
        TP: 33,
        element: "Wood",
        type: "Shoot",
    },
    22: {
        name: "Whirlwind Twister", // IE 1
        TP: 17,
        element: "Wind",
        type: "Dribble",
    },
    23: {
        name: "Kung Fu Header", // IE 1
        TP: 35,
        element: "Wood",
        type: "Shoot",
    },
    24: {
        name: "Clone Shot", // IE 1
        TP: 51,
        element: "Wood",
        type: "Shoot",
    },
    25: {
        name: "Spiral Shot", // IE 1
        TP: 20,
        element: "Wind",
        type: "Shoot",
    },
    26: {
        name: "Illusion Ball", // IE 1
        TP: 23,
        element: "Wood",
        type: "Dribble",
    },
    27: {
        name: "Back Tornado", // IE 1
        TP: 35,
        element: "Wind",
        type: "Shoot",
    },
    28: {
        name: "Rolling Kick", // IE 1
        TP: 17,
        element: "Wood",
        type: "Shoot",
    },
    29: {
        name: "Zigzag Spark", // IE 1
        TP: 23,
        element: "Wind",
        type: "Dribble",
    },
    30: {
        name: "Cyclone", // IE 1
        TP: 32,
        element: "Wind",
        type: "Block",
    },
    31: {
        name: "Freeze Shot", // IE 1
        TP: 33,
        element: "Wood",
        type: "Shoot",
    },
    32: {
        name: "Bewildered", // IE 1
        TP: 23,
        element: "Earth",
        type: "Dribble",
    },
    33: {
        name: "Fake Ball", // IE 1
        TP: 25,
        element: "Wood",
        type: "Block",
    },
    34: {
        name: "Twin Boost", // IE 1
        TP: 44,
        element: "Fire",
        type: "Shoot",
    },
    35: {
        name: "Rolling Hell", // IE 1
        TP: 38,
        element: "Earth",
        type: "Dribble",
    },
    36: {
        name: "Dragon Crash", // IE 1
        TP: 33,
        element: "Wood",
        type: "Shoot",
    },
    37: {
        name: "Dragon Tornado", // IE 1
        TP: 51,
        element: "Fire",
        type: "Shoot",
    },
    38: {
        name: "Fire Tornado", // IE 1
        TP: 33,
        element: "Fire",
        type: "Shoot",
    },
    39: {
        name: "Inazuma Drop", // IE 1
        TP: 44,
        element: "Wind",
        type: "Shoot",
    },
    40: {
        name: "Heat Tackle", // IE 1
        TP: 23,
        element: "Fire",
        type: "Dribble",
    },
    41: {
        name: "Killer Slide", // IE 1
        TP: 10,
        element: "Wood",
        type: "Block",
    },
    42: {
        name: "Blade Attack", // IE 1
        TP: 23,
        element: "Wind",
        type: "Block",
    },
    43: {
        name: "Hurricane Arrow", // IE 1
        TP: 45,
        element: "Wind",
        type: "Block",
    },
    44: {
        name: "Spinning Shot", // IE 1
        TP: 15,
        element: "Wind",
        type: "Shoot",
    },
    45: {
        name: "Spinning Cut", // IE 1
        TP: 30,
        element: "Wind",
        type: "Block",
    },
    46: {
        name: "The Phoenix", // IE 1
        TP: 70,
        element: "Fire",
        type: "Shoot",
    },
    47: {
        name: "Defence Scan", // IE 1
        TP: 22,
        element: "Wood",
        type: "Block",
    },
    48: {
        name: "Attack Scan", // IE 1
        TP: 22,
        element: "Wood",
        type: "Dribble",
    },
    49: {
        name: "Divine Arrows", // IE 1
        TP: 56,
        element: "Wind",
        type: "Shoot",
    },
    50: {
        name: "Killer Blade", // IE 1
        TP: 17,
        element: "Wood",
        type: "Catch",
    },
    51: {
        name: "Warp Space", // IE 1
        TP: 17,
        element: "Wood",
        type: "Catch",
    },
    52: {
        name: "Whirlwind", // IE 1
        TP: 34,
        element: "Wind",
        type: "Catch",
    },
    53: {
        name: "Fireball Knuckle", // IE 1
        TP: 17,
        element: "Fire",
        type: "Catch",
    },
    54: {
        name: "Rocket Kobushi", // IE 1
        TP: 27,
        element: "Fire",
        type: "Catch",
    },
    55: {
        name: "Blazing Knuckle", // IE 1
        TP: 36,
        element: "Fire",
        type: "Catch",
    },
    56: {
        name: "Counter Strike", // IE 1
        TP: 43,
        element: "Fire",
        type: "Catch",
    },
    57: {
        name: "Ghost Pull", // IE 1
        TP: 17,
        element: "Wood",
        type: "Block",
    },
    58: {
        name: "Teleport Shot", // IE 1
        TP: 24,
        element: "Earth",
        type: "Shoot",
    },
    59: {
        name: "Black Magic", // IE 1
        TP: 17,
        element: "Wood",
        type: "Dribble",
    },
    60: {
        name: "Phantom Shot", // IE 1
        TP: 24,
        element: "Wood",
        type: "Shoot",
    },
    61: {
        name: "Doppelganger", // IE 1
        TP: 17,
        element: "Wood",
        type: "Block",
    },
    62: {
        name: "Magic", // IE 1
        TP: 17,
        element: "Wood",
        type: "Dribble",
    },
    63: {
        name: "Poison Fog", // IE 1
        TP: 17,
        element: "Wind",
        type: "Dribble",
    },
    64: {
        name: "Spider Web", // IE 1
        TP: 30,
        element: "Wood",
        type: "Block",
    },
    65: {
        name: "Whirlwind Cut", // IE 1
        TP: 30,
        element: "Wind",
        type: "Dribble",
    },
    // Add more special moves here
};