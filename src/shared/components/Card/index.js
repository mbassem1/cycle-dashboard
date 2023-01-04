import { LocaleContext } from 'context/locale';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CODE, ID, VIEW } from 'translations/translations';
import Icon from '../Icon';
import './styles.scss';

const Card = ({ name, id, code, specialization, email, phone, image }) => {
  const { translate } = useContext(LocaleContext);

  return (
    <div className="card-wrapper">
      <div className="card-content">
        <img src={image} alt="Card" />
        <p className="name">{name}</p>
        <div className="code">
          <p>{`${translate(ID)}: ${id}`}</p>
          <p>{`${translate(CODE)}: ${code}`}</p>
        </div>
        <p className="specialization">{specialization}</p>
        <p className="email">{email}</p>
        <p className="phone">{phone}</p>
      </div>

      <div className="card-footer">
        <span className="btn">
          <Icon icon="la-eye" color="#5E81F4" />
          <span>{translate(VIEW)}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  code: PropTypes.string,
  specialization: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  image: PropTypes.string,
};
