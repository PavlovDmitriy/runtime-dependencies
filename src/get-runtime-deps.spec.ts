import {getRuntimeDeps} from "./get-runtime-deps";

describe('get-runtime-deps', () => {
    it('should be empty result if all dev deps', () => {
        expect(getRuntimeDeps({
            dep1: {
                dev: true,
                version: '0.1',
                dependencies: {
                    dep2: {
                        version: '0.2'
                    }
                }
            }
        })).toEqual([])
    });
    it('should be only non-dev deps', () => {
        expect(getRuntimeDeps({
            dep1: {
                dev: false,
                version: '0.1',
                dependencies: {
                    dep2: {
                        version: '0.2',
                        dev: true
                    }
                }
            }
        })).toEqual([{
            common: true,
            dependencies: ['dep2@0.2'],
            dev: false,
            name: 'dep1',
            parents: [],
            version: '0.1'
        }])
    });
})
