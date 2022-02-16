
let units: any;
let convert: any;

units = {
    "satoshi"   :   0.00000001,
    "finney"       :   0.0000001,
    "microbit"     :   0.000001,
    "millibit"      :   0.001,
    "centibit"      :   0.01,
    "bitcoin"       :   1,
    "decabitcoin"       :   10,
    "kilobitcoin"       :   100,
    "megabitcoin"       :   1000
  }

export class UnitConverter {
    getConvertedValue(value: number, from: String) {
        for (var key in units) {
            if (key == from)
                convert = units[key]

        }
        return value * convert;
    }
}