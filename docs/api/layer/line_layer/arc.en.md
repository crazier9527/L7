---
title: 弧线图
order: 1
---
将两个点的连线绘制成弧形，绘制的弧线可以是贝塞尔曲线，大圆航线，通常用来表示两种地理事物关系和联系，或者人口迁移，物流起点目的地等

## 使用

### 数据
绘制弧线只需提供起止点坐标即可

```javascript
 source(data, {
        parser: {
          type: 'csv',
          x: 'lng1',
          y: 'lat1',
          x1: 'lng2',
          y1: 'lat2'
        }
      })
```

### shape

弧线支持三种弧线算法

- arc 绘制弧线 通过贝塞尔曲线算法技术弧线
- greatcircle 大圆航线，地图两个点的最近距离不是两个点连线，而是大圆航线
- arc3d 3d 弧线地图 3D 视角



### animate

#### 开启关闭动画

```javascript
layer.animate(true)
layer.animate(false)
```

#### 设置动画参数

- duration 动画时间 单位(s)秒
- interval 轨迹间隔, 取值区间 0 - 1
- trailLength 轨迹长度 取值区间 0 - 1

```javascript
layer.animate({
  duration: 4,
  interval: 0.2,
  trailLength: 0.1
  
})
```
### 示例代码

```javascript
const layer = new LineLayer({})
      .source(data, {
        parser: {
          type: 'csv',
          x: 'lng1',
          y: 'lat1',
          x1: 'lng2',
          y1: 'lat2'
        }
      })
      .size(1)
      .shape('arc')
      .color('#8C1EB2')
      .style({
        opacity: 0.8,
      });
```
