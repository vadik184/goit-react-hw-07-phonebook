import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filtersReducer,
};
