import {getFlatDepsMap} from "./get-flat-deps-map";

describe('get-flat-deps-map', () => {
    it('should correct map', () => {
        expect([...getFlatDepsMap({
            dep1: {
                version: "0.0.1",
                dependencies: {
                    dep2: {
                        version: "0.0.2"
                    }
                }
            }
        })]).toEqual([ [ 'dep1',
            { common: true,
                dependencies: [ 'dep2@0.0.2' ],
                dev: false,
                name: 'dep1',
                version: '0.0.1' } ],
            [ 'dep2@0.0.2',
                { common: false,
                    dependencies: [],
                    dev: false,
                    name: 'dep2',
                    version: '0.0.2' } ] ])
    });
})
