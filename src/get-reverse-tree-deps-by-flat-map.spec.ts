import {getReverseTreeDepsByFlatMap} from "./get-reverse-tree-deps-by-flat-map";
import {getFlatDepsMap} from "./get-flat-deps-map";
import {packageLockJson} from "./test/package-lock.json";

describe('get-flat-deps-with-parens-by-flat-map', () => {
    it('should 100500', () => {
        const map = getFlatDepsMap(packageLockJson.dependencies);
        const result = getReverseTreeDepsByFlatMap(map);
        console.log(result);
    })
})
