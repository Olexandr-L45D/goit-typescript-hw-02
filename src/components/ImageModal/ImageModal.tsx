import React from 'react';
import css from "./ImageModal.module.css"
import Modal from 'react-modal';
import { FiUser } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { ModalBigPicture, ModalPicture } from '../../types';

Modal.setAppElement("#root");

export interface ImageModalProps {
  data: ModalBigPicture | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ImageModal({ data, isOpen, onClose }: ImageModalProps) {
  if (!data) {
    return null;
  }
  const {
    regular,
    first_name, instagram_username, name,
    likes,
    tags,
    alt_description,
    description,
  } = data;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.modalCart}>
          <img src={regular} alt={alt_description || undefined} className={css.image} />
          <div className={css.cardCommant}>
            <div className={css.comItem}>
              <p className={css.commant}>
                <strong>Author: <FiUser className={css.icon} /> </strong> {name}
              </p>
            </div>
            {instagram_username && (
              <div className={css.comItem}>
                <p className={css.commant}>
                  <strong>Instagram: <FiInstagram className={css.icon} /> </strong> @{instagram_username}
                </p>
              </div>
            )}
            {description && (
              <div className={css.comDescript}>
                <p className={css.commant}>
                  <strong>Description:</strong> {description}
                </p>
              </div>
            )}
            <div className={css.comIte}>
              <p className={css.commant}>
                <strong>Likes: <FiThumbsUp className={css.icon} />  </strong> {likes}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}





