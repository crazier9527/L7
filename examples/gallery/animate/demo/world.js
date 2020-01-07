/* eslint-disable no-eval */
import { Scene, PolygonLayer, LineLayer, PointLayer } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';

const scene = new Scene({
  id: 'map',
  map: new Mapbox({
    pitch: 40,
    style: 'blank',
    center: [ 3.438, 40.16797 ],
    zoom: 0.51329
  })
});
Promise.all([
  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/world.geo.json').then(d => d.json()),
  fetch('https://gw.alipayobjects.com/os/basement_prod/4472780b-fea1-4fc2-9e4b-3ca716933dc7.json').then(d => d.text()),
  fetch('https://gw.alipayobjects.com/os/basement_prod/a5ac7bce-181b-40d1-8a16-271356264ad8.json').then(d => d.text())
]).then(function onLoad([ world, dot, flyline ]) {
  const dotData = eval(dot);
  const flydata = eval(flyline).map(item => {
    const latlng1 = item.from.split(',').map(e => { return e * 1; });
    const latlng2 = item.to.split(',').map(e => { return e * 1; });
    return { coord: [ latlng1, latlng2 ] };
  });
  const worldFill = new PolygonLayer()
    .source(world)
    .color('#98E3FA')
    .shape('fill')
    .style({
      opacity: 1
    });

  const worldLine = new LineLayer()
    .source(world)
    .color('#fff')
    .size(0.6)
    .style({
      opacity: 1
    });
  const dotPoint = new PointLayer()
    .source(dotData, {
      parser: {
        type: 'json',
        x: 'lng',
        y: 'lat'
      }
    })
    .shape('circle')
    .color('red')
    .animate(true)
    .size(40)
    .style({
      opacity: 1.0
    });
  const flyLine = new LineLayer()
    .source(flydata, {
      parser: {
        type: 'json',
        coordinates: 'coord'
      }
    })
    .color('#faad14')
    .shape('arc3d')
    .size(2.0)
    .animate({
      interval: 0.1,
      trailLength: 1.0,
      duration: 2
    })
    .style({
      opacity: 1
    });
  scene.addLayer(worldFill);
  scene.addLayer(worldLine);
  scene.addLayer(dotPoint);
  scene.addLayer(flyLine);
});

