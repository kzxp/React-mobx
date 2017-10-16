import _fp from 'lodash/fp'
import { createSelector } from 'reselect'

const fp = _fp.convert({ cap: false })

// Code Code refactor soon..
export const getCode = state => state.code
export const getStatus = state => state.status
export const getImages = state => state.images
export const getComponents = state => state.Components
export const getTags = state => state.tags

export const getSequenceByKey = (state, key) => fp.get(`${key}.sequence`, state)
export const getDataByKey = (state, key) => fp.get(`${key}.data`, state)
export const getIsFetchingByKey = (state, key) => fp.get(`${key}.isFetching`, state)

export const getIsAllFetching = createSelector(
  state => getIsFetchingByKey(state, 'code'),
  state => getIsFetchingByKey(state, 'status'),
  state => getIsFetchingByKey(state, 'images'),
  state => getIsFetchingByKey(state, 'tags'),
  state => getIsFetchingByKey(state, 'Components'),
  (...isFetching) => isFetching
)

export const getIsSomeDataFetching = createSelector(getIsAllFetching, isFetching =>
  isFetching.some(val => val)
)

export const getMappedCodeData = createSelector(
  state => getDataByKey(state, 'code'),
  state => getDataByKey(state, 'status'),
  state => getDataByKey(state, 'images'),
  state => getDataByKey(state, 'tags'),
  state => getDataByKey(state, 'Components'),
  (dCode, dStatus, dImages, dTags, dComponents) => {
    const mapped = fp.reduce(
      (r1, { status, images, tags, ...props }, key1) =>
        fp.set(
          key1,
          {
            ...props,
            status: fp.get(status, dStatus),
            images: fp.reduce((r2, id2, key2) => fp.set(key2, fp.get(id2, dImages), r2), {})(
              images
            ),
            tags: fp.reduce((r3, id3, index) => fp.set(index, fp.get(id3, dTags), r3), [])(tags)
          },
          r1
        ),
      {}
    )(dCode)

    return mapped
  }
)

export const getMappedCodeDataWithoutComponent = createSelector(
  getMappedCodeData,
  fp.filter(({ Component }) => fp.isEmpty(Component))
)

export const getPerCodeData = (state, id) => fp.flow(getMappedCodeData, fp.get(id))(state)
