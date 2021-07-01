import {PackageLockDependencyModel} from "./models/package-lock-dependency.model";
import {FlatDepModel} from "./models/flat-dep.model";

export function getFlatDepsMap(deps: PackageLockDependencyModel['dependencies'], parent: FlatDepModel | null = null): ReadonlyMap<string, FlatDepModel> {
    const map = new Map<string, FlatDepModel>();

    for (const depName in deps) {
        const dep = deps[depName];

        const flatDep: FlatDepModel = {
            name: depName,
            dev: !!dep.dev,
            version: dep.version,
            common: !parent,
            dependencies: [],
        };

        const mapKey = flatDep.common ? depName : `${depName}@${dep.version}`;

        map.set(mapKey, flatDep);


        if ('dependencies' in dep) {
            const children = getFlatDepsMap(dep.dependencies, flatDep);
            for (const [dKey, cDep] of children) {
                flatDep.dependencies.push(dKey);

                if (map.has(dKey)) {
                    map.get(dKey)!.dependencies.push(...cDep.dependencies);
                } else {
                    map.set(dKey, cDep);
                }
            }
        }

        if ('requires' in dep) {
            for (const reqKey in dep.requires) {
                if (!(reqKey in (dep?.dependencies || {}))) {
                    flatDep.dependencies.push(reqKey);
                }
            }
        }

    }

    return map;
}
