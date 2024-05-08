/* 
export function removeClosed(currentBugs) {
  const bugsToRetain = currentBugs.filter((bug) => !bug.isClosed);
  const action = { type: "BUGS_INIT", payload: bugsToRetain };
  return action;
} 
*/

import { remove } from './remove';

export function removeClosed() {
  return function(dispatch, getState){
    const currentBugs = getState().bugsState;
    const bugsToRemove = currentBugs.filter(bug => bug.isClosed);
    bugsToRemove.forEach(async bugToRemove => {
      const action = await remove(bugToRemove)
      dispatch(action);
    })
  }
} 