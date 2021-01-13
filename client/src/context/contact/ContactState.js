import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Alfie',
        email: 'alfie@gmail.com',
        phone: '123-456-7890',
        notes: 'small dog',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Juni',
        email: 'juni@aol.com',
        phone: '123-456-7890',
        notes: 'bigger dog',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Lux',
        email: 'lux@gmail.com',
        phone: '123-456-7890',
        notes: 'another small dog',
        type: 'professional',
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //delete contact

  //set current contact

  //clear current contact

  //update contact

  //filter contacts

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
