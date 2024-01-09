/**
 * Reference Manager Class
 */
export default class RefManager { }

/**
 * References Variable
 */
var objRefs = {};

/**
 * Set Reference
 * @param {string} refName Reference Name
 * @param {*} ref Reference
 */
RefManager.SetRef = function (refName, ref) {
    objRefs[refName] = ref;
}

/**
 * Get Reference
 * @param {string} refName Reference Name
 * @returns {*} Reference
 */
RefManager.GetRef = function (refName) {
    return objRefs[refName];
}

/**
 * Delete Reference
 * @param {string} refName Reference Name
 */
RefManager.DelRef = function (refName) {
    delete objRefs[refName];
}

/**
 * Get References List
 * @returns {string[]} 
 */
RefManager.GetRefsList = function () {
    return Object.getOwnPropertyNames(objRefs);
}