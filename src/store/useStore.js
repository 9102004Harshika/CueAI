import { create } from 'zustand';
import { createAuthSlice } from './slices/createAuthSlice.js';
import { createCartSlice } from './slices/createCartSlice.js';
import { createUISlice } from './slices/createUISlice.js';

export const useStore = create((...a) => ({
  ...createAuthSlice(...a),
  ...createCartSlice(...a),
  ...createUISlice(...a),
}));
