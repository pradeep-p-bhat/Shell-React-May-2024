//to be fixed
let _max_bug_id = 0;
export function createNew(newBugName) {
  const newBug = {
    id: ++_max_bug_id,
    name: newBugName,
    isClosed: false,
    createdAt: new Date(),
  };
  const action = { type: "BUGS_ADD", payload: newBug };
  return action;
}
