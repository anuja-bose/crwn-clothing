import { createSelector } from 'reselect';
// type 1 of selector : input selector 

const selectUser = state =>state.user;
 
export const selectCurrentUser = createSelector (
    [selectUser],
    (user) => user.currentUser
);
