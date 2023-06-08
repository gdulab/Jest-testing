import { convertPLNToUSD } from "../convertPLNToUSD";

describe('ConvertPLNtoUSD', () => {
    it('should return proper value when good input', () => {
        expect(convertPLNToUSD(1)).toBe('$0.29');
        expect(convertPLNToUSD(2)).toBe('$0.57');
        expect(convertPLNToUSD(20)).toBe('$5.71');
        expect(convertPLNToUSD(12)).toBe('$3.43');
    });
    it('should return NaN when input is text', () => {
        expect(convertPLNToUSD('6s2')).toBeNaN();
        expect(convertPLNToUSD('asdf')).toBeNaN();
        expect(convertPLNToUSD('y6a3')).toBeNaN();
    });
    it('should return NaN when input is empty', () => {
        expect(convertPLNToUSD()).toBeNaN();
    })
    it('should return "Error" when input is not a NaN or String', () => {
        expect(convertPLNToUSD({})).toBe('Error');
        expect(convertPLNToUSD([])).toBe('Error');
        expect(convertPLNToUSD(null)).toBe('Error');
        expect(convertPLNToUSD(function() {})).toBe('Error');
      });
    it('should return $0.00 when value is < 0', () => {
        expect(convertPLNToUSD(-23)).toBe('$0.00');
        expect(convertPLNToUSD(-8423)).toBe('$0.00');
    })
});