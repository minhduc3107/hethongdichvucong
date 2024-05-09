import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Test1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal closeButton> </Modal>
       <div class="w-full  px-8 py-10  rounded-lg ">
    <h1 class="text-2xl font-semibold text-center mb-6">Nhập mã OTP để xác nhận đăng ký tài khoản</h1>
    <p class="text-gray-600 text-center mb-4"> Mã OTP đã được gửi tin nhắn về số điện thoại 09XXXXX123</p>
    <div class="grid grid-cols-5 gap-x-4 my-2">
      <div contenteditable="true"  class="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700 dark:text-gray-400">1</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700 dark:text-gray-400">9</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700 dark:text-gray-400">6</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700 dark:text-gray-400">4</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700 dark:text-gray-400">3</span>
      </div>
    </div>
    <div class="flex items-center flex-col justify-between mb-6">
      <p class="text-gray-600 text-sm">Bạn chưa nhận được mã?</p>
      <div class="flex items-center space-x-2">
        <button class="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">
           Yêu cầu cuộc gọi </button>
        <button class="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-blue-500">
            Yêu cầu lại sau  (00:00:36)</button>
      </div>
    </div>
    <button class="w-full px-4 py-2 text-lg font-medium text-white bg-red-600 rounded-md hover:bg-red-500">
        Xác thực</button>
  </div>
      </Modal>
    </>
  );
}

export default Test1;