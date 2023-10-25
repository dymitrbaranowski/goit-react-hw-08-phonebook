import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div``;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2efef7;
  font-size: 20px;

  &:hover {
    color: #ffffff;
  }
`;
