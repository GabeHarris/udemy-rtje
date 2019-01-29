/** 
 * Get the ShallowWrapper node(s)
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - The parent wrapper.
 * @param {string} val - The data-test value to search.
 * @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);