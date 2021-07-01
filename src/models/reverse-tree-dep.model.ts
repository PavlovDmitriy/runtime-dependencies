export interface ReverseTreeDepModel {
    dev: boolean;
    common: boolean;
    name: string;
    version: string;
    dependencies: string[];
    parents: ReverseTreeDepModel[]
}
