import * as fs from 'fs';
import {PackageLockDependencyModel} from "./models/package-lock-dependency.model";
import {getRuntimeDeps} from "./get-runtime-deps";

const outputFileName = 'runtime-dependencies.csv';

if (fs.existsSync(outputFileName)) {
    console.log(`${outputFileName} is already exist!`);
    process.exit(0);
}

const buffer = fs.readFileSync('package-lock.json');
const json = JSON.parse(buffer.toString()) as PackageLockDependencyModel;
const runtimeDeps = getRuntimeDeps(json.dependencies);

fs.writeFileSync(outputFileName, 'LibraryName;LibraryVersion\n' + runtimeDeps.map(d => `${d.name};${d.version}`).sort().join('\n'), { flag: 'a' });
