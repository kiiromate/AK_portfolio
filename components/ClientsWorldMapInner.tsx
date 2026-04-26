'use client';

import { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

type Row = { id: string; name: string; value: number };

const DATA: Row[] = [
  { id: "BI", name: "Burundi", value: 2 },
  { id: "CA", name: "Canada", value: 2 },
  { id: "CG", name: "Congo (Brazzaville)", value: 3 },
  { id: "CD", name: "Democratic Republic of the Congo", value: 14 },
  { id: "US", name: "United States of America", value: 3 },
  { id: "FR", name: "France", value: 17 },
  { id: "GA", name: "Gabon", value: 3 },
  { id: "KE", name: "Kenya", value: 3 },
  { id: "NG", name: "Nigeria", value: 1 },
  { id: "RW", name: "Rwanda", value: 100 },
  { id: "TG", name: "Togo", value: 1 },
  { id: "GB", name: "United Kingdom", value: 1 },
];

export default function ClientsWorldMapInner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const root = am5.Root.new(containerRef.current);
root._logo?.dispose();
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoNaturalEarth1(),
        wheelY: "zoom",
      }),
    );

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      }),
    );
    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xe8e8e8),
      stroke: am5.color(0xffffff),
      strokeWidth: 0.5,
    });
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0xd4d4d4),
    });

    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        polygonIdField: "id",
      }),
    );

    const minR = 10;
    const maxR = 46;
    const baseR = 12;
    const maxVal = Math.max(...DATA.map((d) => d.value));
    const minVal = Math.min(...DATA.map((d) => d.value));
    const trueRadiusFor = (v: number) => {
      const t =
        (Math.sqrt(v) - Math.sqrt(minVal)) /
        (Math.sqrt(maxVal) - Math.sqrt(minVal) || 1);
      return minR + t * (maxR - minR);
    };

    pointSeries.bullets.push((_root, _series, dataItem) => {
      const data = dataItem.dataContext as Row;
      const trueRadius = trueRadiusFor(data.value);
      const scaleOnHover = trueRadius / baseR;

      const container = am5.Container.new(root, {
        cursorOverStyle: "pointer",
        tooltipText: `[bold]{name}[/]\nClients satisfaits\n[bold]{value}[/]`,
        layer: 30,
      });

      const pulse = container.children.push(
        am5.Circle.new(root, {
          radius: baseR,
          fill: am5.color(0x333333),
          fillOpacity: 0.35,
          strokeOpacity: 0,
        }),
      );
      pulse.animate({
        key: "scale",
        from: 1,
        to: 1.6,
        duration: 1600,
        loops: Infinity,
        easing: am5.ease.out(am5.ease.cubic),
      });
      pulse.animate({
        key: "opacity",
        from: 0.6,
        to: 0,
        duration: 1600,
        loops: Infinity,
        easing: am5.ease.out(am5.ease.cubic),
      });

      container.children.push(
        am5.Circle.new(root, {
          radius: baseR,
          fill: am5.color(0x333333),
          fillOpacity: 0.95,
          stroke: am5.color(0xffffff),
          strokeWidth: 1.5,
          tooltipY: 0,
        }),
      );

      const valueLabel = am5.Label.new(root, {
        text: "{value}",
        populateText: true,
        fill: am5.color(0xffffff),
        fontWeight: "700",
        fontSize: Math.min(baseR * 0.85, 14),
        centerX: am5.p50,
        centerY: am5.p50,
      });
      container.children.push(valueLabel);

      const nameLabel = container.children.push(
        am5.Label.new(root, {
          text: "{name}",
          populateText: true,
          fill: am5.color(0x333333),
          fontSize: 11,
          fontWeight: "600",
          centerX: am5.p0,
          centerY: am5.p50,
          x: baseR + 6,
          background: am5.RoundedRectangle.new(root, {
            fill: am5.color(0xffffff),
            fillOpacity: 0.85,
            cornerRadiusTL: 4,
            cornerRadiusTR: 4,
            cornerRadiusBL: 4,
            cornerRadiusBR: 4,
          }),
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 2,
          paddingBottom: 2,
        }),
      );

      container.states.create("default", { scale: 1, opacity: 1 });
      container.states.create("hover", { scale: scaleOnHover, opacity: 1 });

      container.events.on("pointerover", () => {
        const parent = container.parent;
        if (parent) {
          parent.children.moveValue(container, parent.children.length - 1);
        }
        container.states.applyAnimate("hover", 350);
        const bulletsContainer = (pointSeries as unknown as {
          bulletsContainer: am5.Container;
        }).bulletsContainer;
        if (bulletsContainer) {
          bulletsContainer.children.each((child) => {
            if (child !== container) {
              child.animate({ key: "opacity", to: 0.3, duration: 250 });
            }
          });
        }
      });

      container.events.on("pointerout", () => {
        container.states.applyAnimate("default", 350);
        const bulletsContainer = (pointSeries as unknown as {
          bulletsContainer: am5.Container;
        }).bulletsContainer;
        if (bulletsContainer) {
          bulletsContainer.children.each((child) => {
            child.animate({ key: "opacity", to: 1, duration: 250 });
          });
        }
      });

      container.set("scale", 0);
      container.animate({
        key: "scale",
        to: 1,
        duration: 800,
        easing: am5.ease.out(am5.ease.cubic),
      });

      void valueLabel;
      void nameLabel;

      return am5.Bullet.new(root, {
        sprite: container,
        dynamic: true,
      });
    });

    polygonSeries.events.on("datavalidated", () => {
      const points = DATA.map((d) => {
        const polygonDataItem = polygonSeries.getDataItemById(
          d.id,
        ) as am5.DataItem<am5map.IMapPolygonSeriesDataItem> | undefined;
        let latitude = 0;
        let longitude = 0;
        if (polygonDataItem) {
          const polygon = polygonDataItem.get("mapPolygon");
          if (polygon) {
            const centroid = polygon.geoCentroid();
            latitude = centroid.latitude;
            longitude = centroid.longitude;
          }
        }
        return {
          id: d.id,
          name: d.name,
          value: d.value,
          geometry: {
            type: "Point" as const,
            coordinates: [longitude, latitude],
          },
        };
      });
      pointSeries.data.setAll(points);
    });

    chart.appear(1000, 100);

    return () => root.dispose();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[600px] rounded-xl"
    />
  );
}
