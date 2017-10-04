import React from 'react'
import fp from 'lodash/fp'

import {
  compose,
  toClass,
  setStatic,
  setDisplayName,
  setPropTypes,
  withStateHandlers,
  withHandlers,
  lifecycle
} from 'recompose'

export const withCamera = compose(
  withStateHandlers(
    ({
      devicesInfo = [],
      selectedDevice = '',
      rawMediaStream = null,
      mediaStreamSrc = '',
      imageCapture = null,
      imageSrc = []
    }) => ({
      devicesInfo,
      selectedDevice,
      rawMediaStream,
      mediaStreamSrc,
      imageCapture,
      imageSrc
    }),
    {
      setDevice: () => selectedDevice => ({
        selectedDevice
      }),
      setAllNeededState: () => (
        devicesInfo,
        selectedDevice,
        rawMediaStream,
        mediaStreamSrc,
        imageCapture
      ) => ({
        devicesInfo,
        selectedDevice,
        rawMediaStream,
        mediaStreamSrc,
        imageCapture
      }),
      setImageSrc: ({ imageSrc }) => newImageSrc => ({
        imageSrc: [...imageSrc, newImageSrc]
      })
    }
  ),
  withHandlers({
    getDevices: props => () =>
      navigator.mediaDevices
        .enumerateDevices()
        .then(devicesInfo => devicesInfo.filter(({ kind }) => kind === 'videoinput'))
        .catch(error => {
          console.log('enumerateDevices() error: ', error)
        }),
    getStream: ({ setAllNeededState, devicesInfo, rawMediaStream }) => (
      newDevicesInfo,
      selectedDevice
    ) => {
      const _devicesInfo = newDevicesInfo ? newDevicesInfo : devicesInfo

      const _selectedDevice = fp.thru(
        (selectedDevice, _devicesInfo) =>
          selectedDevice
            ? selectedDevice
            : fp.flow(
                fp.find(({ label }) => label.toLowerCase().includes('back')),
                fp.thru(() => _devicesInfo),
                fp.getOr('', '0.deviceId')
              )(_devicesInfo)
      )(selectedDevice, _devicesInfo)

      if (rawMediaStream) {
        rawMediaStream.getTracks().forEach(track => {
          track.stop()
        })
      }
      const constraints = {
        video: { optional: [{ sourceId: _selectedDevice }] }
      }
      return navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          const imageCapture = new ImageCapture(stream.getVideoTracks()[0])
          setAllNeededState(
            _devicesInfo,
            _selectedDevice,
            stream,
            window.URL.createObjectURL(stream),
            imageCapture
          )
        })
        .catch(error => {
          console.log('getUserMedia() error: ', error)
        })
    },
    takePhoto: ({ imageCapture, setImageSrc }) => () => {
      imageCapture
        .takePhoto()
        .then(URL.createObjectURL)
        .then(setImageSrc)
        .catch(error => {
          console.log('takePhoto() error: ', error)
        })
    }
  }),
  lifecycle({
    componentWillMount() {
      const { getDevices, getStream, gotStream, setInitial } = this.props
      getDevices().then(getStream)
    },
    componentWillUnmount() {
      const { rawMediaStream, mediaStreamSrc } = this.props
      if (rawMediaStream) {
        rawMediaStream.getTracks().forEach(track => track.stop())
      }
      window.URL.revokeObjectURL(mediaStreamSrc)
    }
  })
)
