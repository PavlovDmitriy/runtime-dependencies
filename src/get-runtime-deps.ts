import {PackageLockDependencyModel} from "./models/package-lock-dependency.model";
import {getFlatDepsMap} from "./get-flat-deps-map";
import {getReverseTreeDepsByFlatMap} from "./get-reverse-tree-deps-by-flat-map";
import {isDevDependency} from "./is-dev-dependency";
import {ReverseTreeDepModel} from "./models/reverse-tree-dep.model";

export function getRuntimeDeps(deps: PackageLockDependencyModel['dependencies']): ReverseTreeDepModel[] {
    const flatMap = getFlatDepsMap(deps);
    const children = getReverseTreeDepsByFlatMap(flatMap);
    return children.filter(dep => !isDevDependency(dep));
}
