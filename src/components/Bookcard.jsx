import React, { useState } from "react";
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from "reactstrap";

const BookCard = (
  props
  //   thumbnail,
  //   title,
  //   pageCount,
  //   language,
  //   authors,
  //   description,
  //   previewLink,
  //   infoLink,
) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  let data = props.data;
  let thumbnail = data.volumeInfo.imageLinks.thumbnail;

  return (
    <Card style={{ width: "175px" }} className="m-auto">
      <CardImg
        className="card"
        top
        style={{ width: "100%", height: "175px" }}
        src={thumbnail}
        alt={data.volumeInfo.title}
      />
      {/* IF THEY CLICK THIS ITLL BE ALL THE INFO  */}
      <CardBody>
        <CardTitle className="card-title">{data.volumeInfo.title}</CardTitle>
        <Button onClick={toggle}>More Info</Button>
      </CardBody>
      {/* THIS IS WHERE THEY SHOULD BE ABLE TO ADD IT TO THE WISHLIST / FUNCITONALITY NOT WORKING YET */}

      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-header d-flex justify-content-center">
          <h5 className="modal-title text-center" id="label">
            {data.volumeInfo.title}
          </h5>
          <button
            aria-label="Close"
            className="close-butotn"
            type="button"
            onClick={toggle}
          >
            <span aria-hidden={true}>X</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex justify-content-between ml-3">
            <img
              src={thumbnail}
              alt={data.volumeInfo.title}
              style={{ height: "200px" }}
            />
            <div>
              <p>Page Count: {data.volumeInfo.pageCount}</p>
              <p>Language: {data.volumeInfo.language}</p>
              <p>Authors: {data.volumeInfo.authors}</p>
            </div>
          </div>
          <div className="mt-3">{data.volumeInfo.description} </div>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <a
              href={data.volumeInfo.previewLink}
              className="btn-link"
              color="default"
              type="button"
              target="_blank"
              rel="noopenor"
            >
              Preview
            </a>
          </div>
          <div className="divider"></div>
          <div className="right-side">
            <a
              href={data.volumeInfo.infoLink}
              className="btn-link"
              color="default"
              type="button"
              target="_blank"
              rel="noopenor"
            >
              Info
            </a>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default BookCard;
