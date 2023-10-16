import React from 'react';

import { ContactListItemBtn } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContacts } from '../../redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <ContactListItemBtn
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              delete
            </ContactListItemBtn>
          }
        </li>
      ))}
    </ul>
  );
};
