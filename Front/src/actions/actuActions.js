// ACTIONS TYPES

export const LOAD_ALL_ACTU = 'LOAD_ALL_ACTU';
export const SAVE_ALL_ACTU = 'SAVE_ALL_ACTU';
export const LOAD_THE_ACTU = 'LOAD_THE_ACTU';
export const SAVE_THE_ACTU = 'SAVE_THE_ACTU';
export const LOAD_LAST = 'LOAD_LAST';
export const SAVE_LAST = 'SAVE_LAST';

// ACTIONS CREATORS

export const loadAllActu = () => ({
  type: LOAD_ALL_ACTU,
});

export const saveAllActu = (actus) => ({
  type: SAVE_ALL_ACTU,
  actus,
});

export const loadTheActu = (id) => ({
  type: LOAD_THE_ACTU,
  id,
});

export const saveTheActu = (actu) => ({
  type: SAVE_THE_ACTU,
  actu,
});

export const loadLast = () => ({
  type: LOAD_LAST,
});

export const saveLast = (lastNews) => ({
  type: SAVE_LAST,
  lastNews,
});
