/**
 * first mock module
 * @module module1
 */

import {sum,sub} from "./utils";

/**
 * Logs a message
 * @param {String} msg - message to log
 */
export function func1 (msg) {
    console.log(msg)
}
/**
 * Logs sum
 * @param {Number} a - a num
 * @param {Number} b - a num
 */
export function logSum(a,b){
    console.log(sum(a,b))
}

/**
 * Logs difference between 2 numbaasss
 * @param {Number} a - foo
 * @param {Number} b - bar
 */
export function logDiff(a,b){
    console.log(sub(a,b))
}

