import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';
import { LiveTour } from 'live-tour-lab';

export default class MyLiveTour extends React.Component {
  render() {
    return (
      <LiveTour tourURI='shopping-experience.json' />
    );
  }
};

AppRegistry.registerComponent('react_vr_shopping', () => MyLiveTour);
