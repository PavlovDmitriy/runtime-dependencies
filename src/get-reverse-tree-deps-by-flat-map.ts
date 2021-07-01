import {ReverseTreeDepModel} from "./models/reverse-tree-dep.model";
import {FlatDepModel} from "./models/flat-dep.model";

export function getReverseTreeDepsByFlatMap(map: ReadonlyMap<string, FlatDepModel>): ReverseTreeDepModel[] {
    const depsWithParentsMap = new Map<string, ReverseTreeDepModel>()

    for (const [depKey, dep] of map) {
        depsWithParentsMap.set(depKey, {
            name: dep.name,
            version: dep.version,
            dependencies: dep.dependencies,
            parents: [],
            dev: dep.dev,
            common: dep.common
        });
    }

    for (const [depKey, dep] of depsWithParentsMap) {
        for (const childDepKey of dep.dependencies) {
            const childDep = depsWithParentsMap.get(childDepKey);

            if (!childDep) {
                console.log('not found', childDepKey)
                continue;
            }

            childDep.parents.push(dep);
        }
    }

    return [...depsWithParentsMap.values()];
}
