import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from './contactsActions';

axios.defaults.baseURL = 'http://192.168.31.66:4040';

export const getContacts = () => dispatch => {
  dispatch(getContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(getContactSuccess(data)))
    .catch(error => dispatch(getContactError(error)));
};

export const addContact = ({ name, phone }) => dispatch => {
  const item = {
    name,
    phone,
  };

  dispatch(addContactRequest());
  axios
    .post('/contacts', item)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

//export default { addContact, deleteContact };
