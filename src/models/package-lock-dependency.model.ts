export interface PackageLockDependencyModel {
    version: string;
    dev?: boolean;
    requires?: {
        [key: string]: string
    };
    dependencies?: {
        [key: string]: PackageLockDependencyModel;
    };
}
