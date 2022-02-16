# bitcoin_converter

## Installation

Import the unit_converter.ts file in your personal project

Type in the following code in your JavaScript-File:

```ruby
import { UnitConverter } from '../lib/unit_converter.ts'
```

## Usage

```ruby
let test 
//test 1
test = new UnitConverter();
console.log(await test.getConvertedValue(VALUE, "UNIT"));
```

VALUE = The value you want to convert into bitcoin.
UNIT = The unit you have the value in.

### All UNITS are:

"satoshi"           :   0.00000001,
"finney"            :   0.0000001,
"microbit"          :   0.000001,
"millibit"          :   0.001,
"centibit"          :   0.01,
"bitcoin"           :   1,
"decabitcoin"       :   10,
"kilobitcoin"       :   100,
"megabitcoin"       :   1000

All the units in comparison to bitcoin.
