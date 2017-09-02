class Color {

    red : number;
    blue : number;
    green : number;

    constructor(color?: string) {

        this.red = 0;
        this.green = 0,
        this.blue = 0

    }

    static get colors() : Array < string > {
        return [
            "AliceBlue",
            "AntiqueWhite",
            "Aqua",
            "Aquamarine",
            "Azure",
            "Beige",
            "Bisque",
            "Black",
            "BlanchedAlmond",
            "Blue",
            "BlueViolet",
            "Brown",
            "BurlyWood",
            "CadetBlue",
            "Chartreuse",
            "Chocolate",
            "Coral",
            "CornflowerBlue",
            "Cornsilk",
            "Crimson",
            "Cyan",
            "DarkBlue",
            "DarkCyan",
            "DarkGoldenRod",
            "DarkGray",
            "DarkGrey",
            "DarkGreen",
            "DarkKhaki",
            "DarkMagenta",
            "DarkOliveGreen",
            "Darkorange",
            "DarkOrchid",
            "DarkRed",
            "DarkSalmon",
            "DarkSlateGrey",
            "DarkTurquoise",
            "DarkViolet",
            "DeepPink",
            "DeepSkyBlue",
            "DimGray",
            "DimGrey",
            "DodgerBlue",
            "FireBrick",
            "FloralWhite",
            "ForestGreen",
            "Fuchsia",
            "Gainsboro",
            "GhostWhite",
            "Gold",
            "GoldenRod",
            "Gray",
            "Grey",
            "Green",
            "GreenYellow",
            "HoneyDew",
            "HotPink",
            "IndianRed",
            "Indigo",
            "Ivory",
            "Khaki",
            "Lavender",
            "LavenderBlush",
            "LawnGreen",
            "LemonChiffon",
            "LightBlue",
            "LightCoral",
            "LightCyan",
            "LightGoldenRodYellow",
            "LightGray",
            "LightGrey",
            "LightGreen",
            "LightPink",
            "LightSalmon",
            "LightSeaGreen",
            "LightSkyBlue",
            "LightSlateGray",
            "LightSlateGrey",
            "LightSteelBlue",
            "LightYellow",
            "Lime",
            "LimeGreen",
            "Linen",
            "Magenta",
            "Maroon",
            "MediumAquaMarine",
            "MediumBlue",
            "MediumOrchid",
            "MediumPurple",
            "MediumSeaGreen",
            "MediumSlateBlue",
            "MediumSpringGreen",
            "MediumTurquoise",
            "MediumVioletRed",
            "MidnightBlue",
            "MintCream",
            "MistyRose",
            "Moccasin",
            "NavajoWhite",
            "Navy",
            "OldLace",
            "Olive",
            "OliveDrab",
            "Orange",
            "OrangeRed",
            "Orchid",
            "PaleGoldenRod",
            "PaleGreen",
            "PaleTurquoise",
            "PaleVioletRed",
            "PapayaWhip",
            "PeachPuff",
            "Peru",
            "Pink",
            "Plum",
            "PowderBlue",
            "Purple",
            "Red",
            "RosyBrown",
            "RoyalBlue",
            "SaddleBrown",
            "Salmon",
            "SandyBrown",
            "SeaGreen",
            "SeaShell",
            "Sienna",
            "Silver",
            "SkyBlue",
            "SlateBlue",
            "SlateGray",
            "SlateGrey",
            "Snow",
            "SpringGreen",
            "SteelBlue",
            "Tan",
            "Teal",
            "Thistle",
            "Tomato",
            "Turquoise",
            "Violet",
            "Wheat",
            "White",
            "WhiteSmoke",
            "Yellow",
            "YellowGreen"
        ];
    }

    static get hexColors() : Array < string > {
        return [
            'f0f8ff',
            'faebd7',
            '00ffff',
            '7fffd4',
            'f0ffff',
            'f5f5dc',
            'ffe4c4',
            '000000',
            'ffebcd',
            '0000ff',
            '8a2be2',
            'a52a2a',
            'deb887',
            '5f9ea0',
            '7fff00',
            'd2691e',
            'ff7f50',
            '6495ed',
            'f0f8ff',
            'faebd7',
            '00ffff',
            '7fffd4',
            'f0ffff',
            'f5f5dc',
            'ff8c00',
            '9932cc',
            '8b0000',
            'e9967a',
            '8fbc8f',
            '483d8b',
            '2f4f4f',
            '2f4f4f',
            '00ced1',
            '9400d3',
            'ff1493',
            '00bfff',
            '696969',
            '696969',
            '1e90ff',
            'b22222',
            'fffaf0',
            '228b22',
            'ff00ff',
            'dcdcdc',
            'f8f8ff',
            'ffd700',
            'daa520',
            '808080',
            '808080',
            '008000',
            'adff2f',
            'f0fff0',
            'ff69b4',
            'cd5c5c',
            '4b0082',
            'fffff0',
            'f0e68c',
            'e6e6fa',
            'fff0f5',
            '7cfc00',
            'fffacd',
            'add8e6',
            'f08080',
            'e0ffff',
            'fafad2',
            'd3d3d3',
            'd3d3d3',
            '90ee90',
            'ffb6c1',
            'ffa07a',
            '20b2aa',
            '87cefa',
            '778899',
            '778899',
            'b0c4de',
            'ffffe0',
            '00ff00',
            '32cd32',
            'faf0e6',
            'ff00ff',
            '800000',
            '66cdaa',
            '0000cd',
            'ba55d3',
            '9370db',
            '3cb371',
            '7b68ee',
            '00fa9a',
            '48d1cc',
            'c71585',
            '191970',
            'f5fffa',
            'ffe4e1',
            'ffe4b5',
            'ffdead',
            '000080',
            'fdf5e6',
            '808000',
            '6b8e23',
            'ffa500',
            'ff4500',
            'da70d6',
            'eee8aa',
            '98fb98',
            'afeeee',
            'db7093',
            'ffefd5',
            'ffdab9',
            'cd853f',
            'ffc0cb',
            'dda0dd',
            'b0e0e6',
            '800080',
            '663399',
            'ff0000',
            'bc8f8f',
            '4169e1',
            '8b4513',
            'fa8072',
            'f4a460',
            '2e8b57',
            'fff5ee',
            'a0522d',
            'c0c0c0',
            '87ceeb',
            '6a5acd',
            '708090',
            '708090',
            'fffafa',
            '00ff7f',
            '4682b4',
            'd2b48c',
            '008080',
            'd8bfd8',
            'ff6347',
            '40e0d0',
            'ee82ee',
            'f5deb3',
            'ffffff',
            'f5f5f5',
            'ffff00',
            '9acd32'
        ]

    }

    toHex(n : number) {
        let hex = n.toString(16);

        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    }

    toHexString() : string {
        var r = this.toHex(this.red);
        var g = this.toHex(this.green);
        var b = this.toHex(this.blue);
        return "#" + r + g + b;
    }

    toName() : string {
            let r,
            g,
            b,
            colorhexs = Color.hexColors;
        for (let i = colorhexs.length; --i;) {
            r = parseInt(colorhexs[i].substr(0, 2), 16);
            g = parseInt(colorhexs[i].substr(2, 2), 16);
            b = parseInt(colorhexs[i].substr(4, 2), 16);
            if (this.red == r && this.green == g && this.blue == b) {
                return Color.colors[i];
            }
        }
        return "";

    }

    toRgbString() : string {
        return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";

    }

    /**
     *
     * @param color
     */
    static exist(color : string) : boolean {

        const existHex = Color
            .hexColors
            .indexOf(color) !== -1;
        const existName = Color
            .colors
            .indexOf(color) !== -1;

        return existHex || existName
}

}

export default Color;