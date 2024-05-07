const BugStats = ({ count, closedCount }) => (
  <section className="stats">
    <span className="closed">{closedCount}</span>
    <span>/</span>
    <span>{count}</span>
  </section>
);

export default BugStats