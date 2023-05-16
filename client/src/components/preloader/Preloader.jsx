import React, { useEffect, useState } from 'react';
import "./preloader.css";


const Preloader = () => {
  
  //const viewBox = `${-window.innerWidth / 2} ${-window.innerHeight / 2} ${window.innerWidth} ${window.innerHeight}`;
  const [viewBox, setViewBox] = useState(`${-window.innerWidth / 2} ${-window.innerHeight / 2} ${window.innerWidth} ${window.innerHeight}`);

  useEffect(() => {
    setViewBox(`${-window.innerWidth / 2} ${-window.innerHeight / 2} ${window.innerWidth} ${window.innerHeight}`);
  }, []);


  return (
    <div className='preloader-div'>
      <svg viewBox={viewBox} width="100%" height="100%">
        <g>
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite"></animateTransform>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M40 0 L80 0 Z" transform="rotate(-120)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate id="hb1" attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb0.begin+200ms" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M40 0 L80 0 Z" transform="rotate(-240)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate id="hb2" attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb1.begin+200ms" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M40 0 L80 0 Z" transform="rotate(-360)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate id="hb3" attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb2.begin+200ms" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M40 0 L80 0 Z" transform="rotate(-180)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate id="hb4" attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb3.begin+200ms" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M40 0 L80 0 Z" transform="rotate(-300)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate id="hb5" attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb4.begin+200ms" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M40 0 L80 0 Z" transform="rotate(-420)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate id="hb6" attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb5.begin+200ms" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M0 0 L-40 0 Z" transform="rotate(120 0 0) rotate(-60 -40 0)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb2.end" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M0 -3 L40 -3 M0 3 L40 3 Z" transform="rotate(120 0 0) rotate(-60 40 0)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb2.end" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M0 0 L-40 0 Z" transform="rotate(240 0 0) rotate(-60 -40 0)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb4.end" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M0 -3 L40 -3 M0 3 L40 3 Z" transform="rotate(240 0 0) rotate(-60 40 0)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb4.end" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M0 0 L-40 0 Z" transform="rotate(360 0 0) rotate(-60 -40 0)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb6.end" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <path stroke="#000" strokeWidth="3" strokeDasharray="80" strokeDashoffset="80" d="M0 -3 L40 -3 M0 3 L40 3 Z" transform="rotate(360 0 0) rotate(-60 40 0)">
            <set attributeName="stroke" to="#000" begin="hb0.begin" fill="freeze"></set>
            <set attributeName="stroke-dashoffset" to="80" begin="hb0.begin" fill="freeze"></set>
            <animate attributeName="stroke-dashoffset" from="80" to="0" dur="0.25s" begin="hb6.end" fill="freeze"></animate>
            <animate attributeName="stroke" from="#000" to="transparent" dur="0.25s" begin="reset.begin" fill="freeze"></animate>
          </path>
          <circle cx="40" r="10" fill="#000" transform="rotate(60)">
            <animate attributeName="cx" from="0" to="40" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="40" to="0" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
          <circle cx="80" r="4" fill="transparent" transform="rotate(60)">
            <animate attributeName="cx" from="160" to="80" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="transparent" to="#000" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="80" to="160" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="#000" to="transparent" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
          <circle cx="40" r="10" fill="#000" transform="rotate(120)">
            <animate attributeName="cx" from="0" to="40" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="40" to="0" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
          <circle cx="80" r="4" fill="transparent" transform="rotate(120)">
            <animate attributeName="cx" from="160" to="80" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="transparent" to="#000" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="80" to="160" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="#000" to="transparent" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
          <circle cx="40" r="10" fill="#000" transform="rotate(180)">
            <animate attributeName="cx" from="0" to="40" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="40" to="0" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
          <circle cx="80" r="4" fill="transparent" transform="rotate(180)">
            <animate attributeName="cx" from="160" to="80" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="transparent" to="#000" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="80" to="160" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="#000" to="transparent" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
          <circle cx="40" r="10" fill="#000" transform="rotate(240)">
            <animate attributeName="cx" from="0" to="40" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="40" to="0" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
          <circle cx="80" r="4" fill="transparent" transform="rotate(240)">
            <animate attributeName="cx" from="160" to="80" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="transparent" to="#000" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="80" to="160" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="#000" to="transparent" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
          <circle cx="40" r="10" fill="#000" transform="rotate(300)">
            <animate attributeName="cx" from="0" to="40" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="40" to="0" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
          <circle cx="80" r="4" fill="transparent" transform="rotate(300)">
            <animate attributeName="cx" from="160" to="80" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="transparent" to="#000" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="80" to="160" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="#000" to="transparent" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
          <circle cx="40" r="10" fill="#000" transform="rotate(360)">
            <animate attributeName="cx" from="0" to="40" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="40" to="0" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
          <circle cx="80" r="4" fill="transparent" transform="rotate(360)">
            <animate attributeName="cx" from="160" to="80" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="transparent" to="#000" dur="0.25s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="cx" from="80" to="160" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
            <animate attributeName="fill" from="#000" to="transparent" dur="0.25s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze"></animate>
          </circle>
        </g>
        <g>
          <animate id="start" attributeName="fill" dur="0.25s" begin="0;reset.end"></animate>
          <animate id="hb0" attributeName="fill" dur="0.25s" begin="start.end-300ms"></animate>
          <animate id="reset" attributeName="fill" dur="1s" begin="hb6.end+0.5s"></animate>
        </g>
      </svg>
    </div>
  );
};

export default Preloader;
