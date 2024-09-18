import React from 'react';

function Card({ title, text, buttonText }) {
  return (
    <div className="card">
      <img src="https://cdn.pixabay.com/photo/2019/03/18/17/58/waves-4063684_640.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div className="card">
        <a href="#" className="btn btn-primary">{buttonText}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
