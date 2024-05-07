import React from 'react';

const BugEdit = ({ createNew }) => {
  const txtNewBugNameRef = React.createRef();
  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input type="text" ref={txtNewBugNameRef} />
      <button onClick={() => createNew(txtNewBugNameRef.current.value)}>
        Add New
      </button>
    </section>
  );
};
export default BugEdit;