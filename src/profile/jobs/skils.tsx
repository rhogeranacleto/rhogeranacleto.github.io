import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

enum IColor {
  js = '#f1e05a',
  react = '#61dbfb',
  vuejs = '#3fb27f',
  nodejs = '#659a60',
  cypress = '#47474a',
  ts = '#0076c6',
  rb = '#701516',
  pg = '#31648c',
  mongo = '#419242',
  emberjs = '#db492f',
  angularjs = '#de2938',
  jquery = '#0865a7',
  csharp = '#964d92',
  sqlserver = '#e62623',
  rubyOnRails = '#c60000',
  rspec = '#f53e5c',
}

interface IJJJJ extends d3.SimulationNodeDatum {
  radius: number;
  lg: keyof typeof IColor;
}

const create3 = (element: SVGSVGElement, skills: { [key: string]: number }) => {
  const width = element.clientWidth;
  const height = element.clientHeight;
  const nodesEntries = Object.entries(skills);

  const total = nodesEntries
    .map(([, value]) => value)
    .reduce((total, value) => total + value, 0);

  console.log(total);

  const nodes: IJJJJ[] = Object.entries(skills).map(([key, value]) => ({
    radius: (value / total) * 170,
    lg: key as keyof typeof IColor,
  }));

  console.log(nodes);

  // const numNodes = 30;
  // const nodes: IJJJJ[] = d3.range(numNodes).map(function (d) {
  //   return { radius: Math.random() * 25 };
  // });

  // console.log(width * height);

  // const values = nodes.map((n) => Math.PI * Math.pow(n.radius, 2));

  // console.log(
  //   values,
  //   values.reduce((total, area) => total + area, 0),
  // );

  // const xScale = d3
  //   .scaleLinear()
  //   .domain([d3.min(values)!, d3.max(values)!])
  //   .range([0 + 50, width - 50]);

  d3.forceSimulation(nodes)
    // .force('charge', d3.forceManyBody().strength(50))
    // .force('center', d3.forceCenter(width / 2, height / 2))
    // .force(
    //   'y',
    //   d3.forceY().y(() => height),
    // )
    // .force(
    //   'x',
    //   d3.forceX().x(() => width / 2),
    // )
    .force(
      'collision',
      d3.forceCollide<IJJJJ>().radius((d) => d.radius),
    )
    .force('x', d3.forceX(width / 2).strength(0.07))
    .force('y', d3.forceY(height / 2).strength(0.29))
    .on('tick', ticked)
    .on('end', () => {
      const { x, y, width, height } = d3
        .select(element)
        .node()
        ?.getBBox() as DOMRect;

      console.log(x, y, width, height);
    });

  function ticked() {
    const node = d3
      .select(element)
      .selectAll<SVGCircleElement, number[]>('circle')
      .data(nodes);

    node
      .enter()
      .append('circle')
      .attr('r', (d) => d.radius)
      .style('fill', (d) => IColor[d.lg])
      .merge(node)
      .attr('cx', (d) => d.x!)
      .attr('cy', (d) => d.y!);
    // .attr(
    //   'cx',
    //   (d) => (d.x = Math.max(d.radius, Math.min(width - d.radius, d.x!))),
    // )
    // .attr(
    //   'cy',
    //   (d) => (d.y = Math.max(d.radius, Math.min(height - d.radius, d.y!))),
    // );

    // const { x, y, width, height } = d3.select(element).node()?.getBBox()!;

    // d3.select(element).attr('viewBox', `${x} ${y} ${width} ${height}`);

    node.exit().remove();
  }
};

interface ISkillsProps {
  skills: { [key: string]: number };
}

export const Skills = ({ skills }: ISkillsProps) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // console.log(ref.current, 'oi');
    if (ref.current) {
      create3(ref.current, skills);
    }
  }, []);

  return (
    <svg className="skills" ref={ref}>
      {/* <ResponsiveContainer width="100%" height="100%">
        <Treemap
          width={400}
          height={200}
          data={config}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill="#f00"
          isAnimationActive={false}
          content={<Content />}
        />
      </ResponsiveContainer> */}
    </svg>
  );
};

// type IConf = {
//   [key: string]: number | { [key: string]: number };
// };

// const getDots = (config: IConf): ReactNode[] => {
//   return Object.entries(config)
//     .map(([key, value]) => {
//       if (typeof value === 'number') {
//         return new Array(value)
//           .fill(undefined)
//           .map((k, i) => <div key={`${key}-${i}`} className={key} />);
//       }

//       return Object.entries(value)
//         .map(([subKey, subValue]) =>
//           new Array(subValue)
//             .fill(undefined)
//             .map((k, i) => (
//               <div key={`${subKey}-${subValue}-${i}`} className={key} />
//             )),
//         )
//         .flat();
//     })
//     .flat();
// };

// const getTotal = (config: IConf): number =>
//   Object.values(config).reduce<number>(
//     (total, value) =>
//       total + (typeof value === 'number' ? value : getTotal(value)),
//     0,
//   );
