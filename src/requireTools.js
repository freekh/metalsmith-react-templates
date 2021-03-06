import {transformFileSync as babelTransform} from 'babel-core';

// Extensions for `require` to accept jsx
// Runs babel transform
export const requireBabelCore = (tooling = {}) => (module, filename) => {
    let compiled = babelTransform(filename, tooling).code;
    return module._compile(compiled, filename);
}

// Ignoring Files
export const requireIgnore = () => {
    return null;
}
