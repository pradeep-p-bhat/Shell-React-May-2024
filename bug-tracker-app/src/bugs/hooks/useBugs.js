import { useSelector } from "react-redux";

function useBugs() {
  // extract data from the store
  const bugsData = useSelector((storeState) => {
    return {
      bugs: storeState.bugsState,
      closedCount: storeState.bugsState.reduce(
        (prevResult, bug) => (bug.isClosed ? prevResult + 1 : prevResult),
        0
      ),
    };
  });
  return bugsData;
}

export default useBugs;