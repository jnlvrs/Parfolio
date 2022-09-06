import { useState } from "react";
import Modal from "./Projects/Modal";
import Backdrop from "./Backdrop";

function Card({ text, Link }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function viewHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
    window.location.href = Link;
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div className="card bg1 hl2 bxs">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn bg4 hl2" onClick={viewHandler}>
          View
        </button>
      </div>
      {/* if modal is open true then render if false dont render */}
      {modalIsOpen && (
        <Modal onCancel={closeModal} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModal} />}
    </div>
  );
}

export default Card;
