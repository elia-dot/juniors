import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEdu = ({
  education: { school, degree, filedofstudy, current, to, from, description },
}) => {
  return (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
        {!to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
      </p>
      <p>
          <strong>Degree: </strong>{degree}
      </p>
      <p>
          <strong>Filed Of Study: </strong>{filedofstudy}
      </p>
      <p>
          <strong>Description: </strong>{description}
      </p>
    </div>
  );
};

ProfileEdu.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileEdu;
