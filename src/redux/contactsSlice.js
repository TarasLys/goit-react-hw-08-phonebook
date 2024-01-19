import {
  requestAddContact,
  requestDeleteContact,
  requestAllContacts,
} from '../api/auth';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const items = await requestAllContacts();

      return items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (newContact, thunkAPI) => {
    try {
      const items = await requestAddContact(newContact);

      return items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      const items = await requestDeleteContact(contactId);

      return items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],

    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;

        state.items.unshift(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const tasksReducer = contactsSlice.reducer;
