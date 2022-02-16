import { UnitConverter } from '../lib/unit_converter.ts'




let test 

//test 1
test = new UnitConverter();
console.log(await test.getConvertedValue(10,"btc","satoshi"));