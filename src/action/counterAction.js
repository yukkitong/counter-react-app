
export const ACTION_INC = 'INCREASE';
export const ACTION_DEC = 'DECREASE';

export const increase = (unit) => () => actionCreator(ACTION_INC, unit);
export const decrease = (unit) => () => actionCreator(ACTION_DEC, unit);

function actionCreator(type, unit = 1) {
  return { type, unit };
}
