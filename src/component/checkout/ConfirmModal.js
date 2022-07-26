import React from 'react';

const ConfirmModal = ({
  isShowModal,
  handleCancelButton,
  handleAcceptButton,
  modalContent,
  setIsShowModal,
  isHandleCloseButton,
}) => {
  return (
    <div
      className={`${
        isShowModal ? '' : 'hidden'
      } flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 transition-opacity duration-[5000ms] bg-gray-400 bg-opacity-70`}
    >
      <div className="bg-white relative ease-in-out duration-[5000ms] w-1/3">
        <p>{modalContent.content}</p>
        <span
          className="absolute top-5 right-8 duration-200 text-3xl cursor-pointer"
          onClick={
            isHandleCloseButton
              ? () => handleCancelButton()
              : () => setIsShowModal(false)
          }
        >
          &times;
        </span>
        <div>
          <button onClick={() => handleAcceptButton()}>Yes</button>
          <button onClick={() => handleCancelButton()}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
