export const set = text => ({
  type: 'SET_NOTIFY',
  payload: {text}
});

export const close = () => ({
  type: 'CLOSE_NOTIFY'
});