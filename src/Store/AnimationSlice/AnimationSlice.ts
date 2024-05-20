import { createSlice } from '@reduxjs/toolkit';

interface Animtaion {
  animate: boolean;
}

const initialState: Animtaion = {
  animate: true,
};

const animSlice = createSlice({
  name: 'animating',
  initialState,
  reducers: {
    setAnimate: (state) => {
      state.animate = false;
    },
  },
});

export const { setAnimate } = animSlice.actions;

export default animSlice.reducer;
