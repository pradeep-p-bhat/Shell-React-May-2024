export function removeClosed(currentBugs /* to be fixed */) {
  const bugsToRetain = currentBugs.filter((bug) => !bug.isClosed);
  const action = { type: "BUGS_INIT", payload: bugsToRetain };
  return action;
}