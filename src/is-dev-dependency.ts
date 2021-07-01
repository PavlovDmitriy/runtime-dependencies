import {ReverseTreeDepModel} from "./models/reverse-tree-dep.model";

export function isDevDependency(dep: ReverseTreeDepModel): boolean {
    return dep.dev || (dep.parents.length && dep.parents.every(isDevDependency)) || false;
}
