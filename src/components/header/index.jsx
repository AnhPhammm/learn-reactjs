import React from "react";
import './styles.scss'
import PropsType from 'prop-types'

Header.propTypes = {
color: PropsType.string.isRequired,
rounded: PropsType.bool,
};

function Header(props) {
    const { color } = props;
  return <div>
    Header
  </div>;
}
export default Header;
