import React from "react";
import { useForm } from "react-hook-form";
import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import SelectUser from "./SelectUser";

const PostModal = ({ toggle, isOpen, save,changeUser,loading }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>Add post</ModalHeader>
      <ModalBody>
        <form id="post-form" onSubmit={handleSubmit(save)}>
          <input
            {...register("title")}
            placeholder="Title"
            className="form-control my-3"
            type="text"
          />
          <SelectUser onChange={changeUser} name={"user"} />
          <textarea
            {...register("body")}
            placeholder="Body ..."
            className="form-control my-3"
            type="textarea"
            name={"body"}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button disabled={loading} className="btn btn-dark" form="post-form" type="submit">
          save
        </button>
        <button className="btn btn-danger" onClick={toggle}>
          cancel
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default PostModal;
