import { createSelector } from 'reselect'

const selectCollection = (state) => state.collection

export const selectCollectionSections = createSelector([selectCollection], (collection) => collection.sections)
