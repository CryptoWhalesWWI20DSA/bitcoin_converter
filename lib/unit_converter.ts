
let units: { [key: string]: number } = {};
units = {
    satoshi   :   0.00000001,
    bit       :   0.000001,
    ubtc     :   0.000001,
    mbtc      :   0.001,
    btc       :   1
  }

let factor

export class UnitConverter {
    async getConvertedValue(value: number, from: String, to: String) {

        factor = await units.from * units.to
        return value * factor
    }


}