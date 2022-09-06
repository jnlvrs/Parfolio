function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal bg1 bxs">
      <p className="p-box hl1">Head to Github?</p>
      <div className="btn-box ">
        <button
          className="pop-btn btn--alt bg5 hl2 bxs"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button className="pop-btn bg3 hl2 bxs" onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Modal;
