import { RatesType } from 'core/types'

import { btcRates } from './conversion.textures'
import * as Conversion from './index'

describe('convertFiatToCoin', () => {
  it('should return correct value', () => {
    const expectedOutput = '0.00015174'
    const result = Conversion.convertFiatToCoin({
      coin: 'BTC',
      currency: 'USD',
      rates: btcRates as RatesType,
      value: 1,
    })
    expect(result).toEqual(expectedOutput)
  })

  it('should return value 0 if value is undefined', () => {
    const expectedOutput = '0'
    const result = Conversion.convertFiatToCoin({
      coin: 'BTC',

      currency: 'USD',

      rates: btcRates as RatesType,
      // @ts-ignore
      value: undefined,
    })
    expect(result).toEqual(expectedOutput)
  })

  it('should return default if currency is undefined', () => {
    const result = Conversion.convertFiatToCoin({
      coin: 'BTC',
      // @ts-ignore
      currency: undefined,

      rates: btcRates as RatesType,
      value: 1,
    })
    expect(result).toEqual('0')
  })
})
