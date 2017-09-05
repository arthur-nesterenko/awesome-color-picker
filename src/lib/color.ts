export interface RgbObject {
    R : number,
    G : number,
    B : number
}

const errMessage = (color : string) : string => `for ${color} is not supported format should be hex or css Name , all color names Supported by All Browsers (https://www.w3schools.com/colors/colors_names.asp)`;

/**
 *
 */
const Color = {

    /**
     *
     */
    _toColorObject: function (color : string): object {

        return {
            [this.getColorName(color)]: this.getHexColor(color)
        }
    },
    /**
     *
     */
    get listOfColors(): object {
        return {
            "aliceblue": "#f0f8ff",
            "antiquewhite": "#faebd7",
            "aqua": "#00ffff",
            "aquamarine": "#7fffd4",
            "azure": "#f0ffff",
            "beige": "#f5f5dc",
            "bisque": "#ffe4c4",
            "black": "#000000",
            "blanchedalmond": "#ffebcd",
            "blue": "#0000ff",
            "blueviolet": "#8a2be2",
            "brown": "#a52a2a",
            "burlywood": "#deb887",
            "cadetblue": "#5f9ea0",
            "chartreuse": "#7fff00",
            "chocolate": "#d2691e",
            "coral": "#ff7f50",
            "cornflowerblue": "#6495ed",
            "cornsilk": "#fff8dc",
            "crimson": "#dc143c",
            "cyan": "#00ffff",
            "darkblue": "#00008b",
            "darkcyan": "#008b8b",
            "darkgolrdenrod": "#b8860b",
            "darkgray": "#a9a9a9",
            "darkgreen": "#006400",
            "darkkhaki": "#bdb76b",
            "darkmagenta": "#8b008b",
            "darkolivegreen": "#556b2f",
            "darkorange": "#ff8c00",
            "darkorchid": "#9932cc",
            "darkred": "#8b0000",
            "darksalmon": "#e9967a",
            "darkseagreen": "#8fbc8f",
            "darkslateblue": "#483d8b",
            "darkslategray": "#2f4f4f",
            "darkturquoise": "#00ced1",
            "darkviolet": "#9400d3",
            "deeppink": "#ff1493",
            "deepskyblue": "#00bfff",
            "dimgray": "#696969",
            "dodgerblue": "#1e90ff",
            "firebrick": "#b22222",
            "floralwhite": "#fffaf0",
            "forestgreen": "#228b22",
            "fuchsia": "#ff00ff",
            "gainsboro": "#dcdcdc",
            "ghostwhite": "#f8f8ff",
            "gold": "#ffd700",
            "goldenrod": "#daa520",
            "gray": "#808080",
            "green": "#008000",
            "greenyellow": "#adff2f",
            "honeydew": "#f0fff0",
            "hotpink": "#ff69b4",
            "indianred ": "#cd5c5c",
            "indigo": "#4b0082",
            "ivory": "#fffff0",
            "khaki": "#f0e68c",
            "lavender": "#e6e6fa",
            "lavenderblush": "#fff0f5",
            "lawngreen": "#7cfc00",
            "lemonchiffon": "#fffacd",
            "lightblue": "#add8e6",
            "lightcoral": "#f08080",
            "lightcyan": "#e0ffff",
            "lightgoldenrodyellow": "#fafad2",
            "lightgrey": "#d3d3d3",
            "lightgreen": "#90ee90",
            "lightpink": "#ffb6c1",
            "lightsalmon": "#ffa07a",
            "lightseagreen": "#20b2aa",
            "lightskyblue": "#87cefa",
            "lightslategray": "#778899",
            "lightsteelblue": "#b0c4de",
            "lightyellow": "#ffffe0",
            "lime": "#00ff00",
            "limegreen": "#32cd32",
            "linen": "#faf0e6",
            "magenta": "#ff00ff",
            "maroon": "#800000",
            "mediumaquamarine": "#66cdaa",
            "mediumblue": "#0000cd",
            "mediumorchid": "#ba55d3",
            "mediumpurple": "#9370d8",
            "mediumseagreen": "#3cb371",
            "mediumslateblue": "#7b68ee",
            "mediumspringgreen": "#00fa9a",
            "mediumturquoise": "#48d1cc",
            "mediumvioletred": "#c71585",
            "midnightblue": "#191970",
            "mintcream": "#f5fffa",
            "mistyrose": "#ffe4e1",
            "moccasin": "#ffe4b5",
            "navajowhite": "#ffdead",
            "navy": "#000080",
            "oldlace": "#fdf5e6",
            "olive": "#808000",
            "olivedrab": "#6b8e23",
            "orange": "#ffa500",
            "orangered": "#ff4500",
            "orchid": "#da70d6",
            "palegoldenrod": "#eee8aa",
            "palegreen": "#98fb98",
            "paleturquoise": "#afeeee",
            "palevioletred": "#d87093",
            "papayawhip": "#ffefd5",
            "peachpuff": "#ffdab9",
            "peru": "#cd853f",
            "pink": "#ffc0cb",
            "plum": "#dda0dd",
            "powderblue": "#b0e0e6",
            "purple": "#800080",
            "rebeccapurple": "#663399",
            "red": "#ff0000",
            "rosybrown": "#bc8f8f",
            "royalblue": "#4169e1",
            "saddlebrown": "#8b4513",
            "salmon": "#fa8072",
            "sandybrown": "#f4a460",
            "seagreen": "#2e8b57",
            "seashell": "#fff5ee",
            "sienna": "#a0522d",
            "silver": "#c0c0c0",
            "skyblue": "#87ceeb",
            "slateblue": "#6a5acd",
            "slategray": "#708090",
            "snow": "#fffafa",
            "springgreen": "#00ff7f",
            "steelblue": "#4682b4",
            "tan": "#d2b48c",
            "teal": "#008080",
            "thistle": "#d8bfd8",
            "tomato": "#ff6347",
            "turquoise": "#40e0d0",
            "violet": "#ee82ee",
            "wheat": "#f5deb3",
            "white": "#ffffff",
            "whitesmoke": "#f5f5f5",
            "yellow": "#ffff00",
            "yellowgreen": "#9acd32"
        };
    },
    /**
 *
 */
    get colors(): Array < string > {

        return Object.keys(this.listOfColors);
    },
    /**
 *
 */
    get hexColors(): Array < string > {

        return Object
            .keys(this.listOfColors)
            .map((key : string) => this.listOfColors[key]);

    },

    /**
     * check if hex has 3 sybmol e.g #222 or #fff
     * @param hex
     */
    noramlizeHex: function (hex : string): string {

        const normalizedHex = hex.slice(1);

        return normalizedHex.length === 3
            ? `#${normalizedHex.repeat(2)}`
            : hex

    },

    /**
     *
     */
    getHexColor: function (color : string, validate : boolean = false): string {

        color = color.toLowerCase();

        if (validate && !this.exist(color)) 
            throw errMessage(color);
        
        if (color.indexOf('#') === -1) 
            return this.listOfColors[color];
        else 
            return this.noramlizeHex(color)

        /**
         *
         */

    },

    getColorName: function (color : string): string {
        color = color.toLowerCase();

        if (color.indexOf('#') === -1) {

            return color;
        } else 
            return this.toCssNameFromHex(this.noramlizeHex(color.toLowerCase()));
        }
    ,

    toCssNameFromHex: function (color : string) {

        return Object
            .keys(this.listOfColors)
            .find(key => this.listOfColors[key] === color);
    },

    toRgb: function (color : string): RgbObject {

        color = color.toLowerCase();

        const HexColor = this
            .getHexColor(color)
            .replace('#', '');

        return {
            R: parseInt(HexColor.substring(0, 2), 16),
            G: parseInt(HexColor.substring(2, 4), 16),
            B: parseInt(HexColor.substring(4, 6), 16)
        }
    },

    /**
     *
     * @param param0
     */
    toHexFromRgb: function ({R, G, B} : RgbObject) {

        let r = R.toString(16);
        let g = G.toString(16);
        let b = B.toString(16);

        if (r.length == 1) 
            r = '0' + r;
        if (g.length == 1) 
            g = '0' + g;
        if (b.length == 1) 
            b = '0' + b;
        
        return `#${ (r + g + b).toUpperCase()}`;

    },
    /**
     *
     */
    _uniq: function (colors : Array < string >) {

        let hexColors = colors.map(color => this.getHexColor(color, true));
        return hexColors.filter((item, index) => hexColors.indexOf(item) === index);

    },

    normalize: function (data : Array < string >| string): object {

        if(Array.isArray(data)) {
            return this._uniq(data) // remove duplicates
                .map(color => {
                color = color.toLowerCase();
                if (this.exist(color)) {
                    return this._toColorObject(color)

                } else {
                    console.warn(errMessage(color))
                    }
                })
                .filter(Boolean)
                .reduce((obj, item, s, r) => {
                    const key = Object.keys(item)[0];
                    obj[key] = item[key]
                    return obj
                }, {})

        } else {

            data = data.toLowerCase();
            if (this.exist(data)) 
                return this._toColorObject(data)
            else 
                throw errMessage(data);

            }
        
    },

    isHex: (color : string): boolean => {
        return color.indexOf('#') !== -1;
    },
    /**
     *
     * @param color
     */
    exist: function (color : string): boolean {

        color = color.toLowerCase();

        const existHex = Color
            .hexColors
            .indexOf(this.noramlizeHex(color)) !== -1;

        const existName = Color
            .colors
            .indexOf(color) !== -1;

        return existHex || existName
},

validate: function (color : string): string {

    if(this.exist(color)) 
        return this.getHexColor(color);
    else {
        throw errMessage(color)
    }

}

}

export default Color;