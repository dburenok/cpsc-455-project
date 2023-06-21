import { configureStore } from '@reduxjs/toolkit';
import customizationReducer from './customizationReducer';

const store = configureStore({
  reducer: {
    customization: customizationReducer
  },
  devTools: true
});

export { store };
