const counter = require('../index');

describe('counter', () => {
    it('step 2', () => {
        let c1 = counter.next();

        let c2 = counter.next();
        let c2_value = '0000000002';
        expect(c2).toEqual(c2_value);
        expect(c2).toEqual(counter.current());
    });

    it('step 3', () => {
        let c3 = counter.next();
        let c3_value = '0000000003';
        expect(c3).toEqual(c3_value);
        expect(c3).toEqual(counter.current());
    });
});