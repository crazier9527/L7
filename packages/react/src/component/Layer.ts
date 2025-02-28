import * as React from 'react';
import { ILayerProps } from './LayerAttribute';
import BaseLayer from './LayerAttribute/Layer';

const PolygonLayer = React.memo(function Layer(
  props: ILayerProps & { children?: any },
) {
  return BaseLayer('polygonLayer', props);
});

const LineLayer = React.memo(function Layer(props: ILayerProps) {
  return BaseLayer('lineLayer', props);
});

const PointLayer = React.memo(function Layer(
  props: ILayerProps & { children?: any },
) {
  return BaseLayer('pointLayer', props);
});

export { PolygonLayer, LineLayer, PointLayer };
