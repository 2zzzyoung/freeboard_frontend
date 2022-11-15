import { Modal } from "antd";

// success modal
export const successModal = (successMsg: string) => {
  Modal.success({
    content: successMsg,
  });
};

// error modal
export const errorModal = (errorMsg: string) => {
  Modal.error({
    content: errorMsg,
  });
};
