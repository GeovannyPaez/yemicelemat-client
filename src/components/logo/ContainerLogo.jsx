import React from "react";
export const ContainerLogo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={220}
      height={60}
      preserveAspectRatio="xMidYMid"
      style={{
        background: "0 0",
      }}
      viewBox="-28.807 14.6 557.614 120.8"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ce6857" />
          <stop offset={1} stopColor="#523e27" />
        </linearGradient>
        <filter id="a" width="300%" height="300%" x="-100%" y="-100%">
          <feFlood floodColor="#fff" result="flood" />
          <feComposite
            in="flood"
            in2="SourceAlpha"
            operator="in"
            result="shadow"
          />
          <feOffset dx={-4} dy={-4} in="SourceGraphic" result="offset-1" />
          <feOffset dx={4} dy={4} in="shadow" result="offset-2" />
          <feMerge>
            <feMergeNode in="offset-2" />
            <feMergeNode in="offset-1" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#a)">
        <path
          fill="url(#b)"
          d="m7.17 0 3.71-18.82Q9.02-36.16 2.5-39.87q1.34-1.67 3.52-2.59 2.17-.93 4.8-.93 2.62 0 4.6.93 1.99.92 3.27 2.91 2.43 3.77 2.43 12.8v4.61q3.84-11.27 7.68-16.13 3.9-4.99 8.77-4.99 1.92 0 3.2.99 1.28.99 1.92 2.46-4.93 2.18-9.67 8.45-4.73 6.27-7.8 15.04L21.44 0H7.17Zm54.85-10.82q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.43 0 5.03-1.12 2.59-1.12 3.68-2.92Zm-13.06-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63Zm67.26 19.07q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.53 2.2-2.24 6.62L100.22 0 87.74 1.28l3.46-17.41q.58-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.49 6.66L81.15 0 68.54 1.28l6.72-33.92 10.44-1.28-1.09 6.46q1.66-3.45 4.73-4.96 3.08-1.5 7.88-1.5 2.75 0 4.54 1.34 1.79 1.35 2.37 3.52 1.09-2.24 3.87-3.55 2.78-1.31 6.21-1.31 3.42 0 5.12.74 1.69.73 2.72 1.95 1.73 2.24 1.73 6.33 0 4.04-1.73 12.42-.9 4.1-.9 5.6t.87 2.4q.86.9 2.14 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28Zm28.23-4.8q-1.99 4.8-8.32 4.8-3.27 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.36-12.42 13-1.28-3.91 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78Zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.08-1.34 3.01 0 4.84 1.34 1.82 1.35 1.82 3.84 0 2.5-2.02 3.78-2.01 1.28-5.02 1.28t-4.9-1.28q-1.88-1.28-1.88-3.78Zm46.33 14.92q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.53 0-2.43-.45.71-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.85-2.68-1.28 0-2.72 1.6-1.44 1.6-2.66 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.22 1.44 3.9 1.44 3.72 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.09 2.43-10.62 2.43-12.99 0-12.99-13.76 0-10.05 5.69-15.81 5.51-5.63 15.62-5.63t10.11 7.3Zm27.65 15.8q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.21 1.53-3.2 2.56-4.09 2.11-8.51 2.11-4.41 0-7.01-.96-2.59-.96-4.32-2.75-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.45 11.26-.26 1.66-.26 3.07 0 2.95 1.31 4.07t3.75 1.12q2.43 0 5.02-1.12 2.59-1.12 3.68-2.92Zm-13.06-6.97q4.55 0 7.17-2.82 2.63-2.69 2.63-6.97 0-1.48-.55-2.28-.54-.8-1.63-.8-1.09 0-2.02.42-.92.42-1.88 1.82-2.37 3.2-3.72 10.63Zm36.48 14.27q-1.98 4.8-8.32 4.8-3.2 0-5.24-2.24-1.67-1.86-1.67-3.97 0-4.8 2.24-15.29l4.67-24.58 13-1.28-6.21 32.38q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78Zm31.36-7.3q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.24-15.55 5.64-6.34 15.43-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.26 1.66-.26 3.07 0 2.95 1.32 4.07 1.31 1.12 3.74 1.12t5.02-1.12q2.6-1.12 3.68-2.92Zm-13.05-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.64-.8-1.08 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63Zm67.26 19.07q-7.74 0-7.74-6.02 0-2.62 1.12-7.71t1.5-7.13q.9-4.68.9-6.15 0-3.26-2.43-3.26-1.6 0-3.14 2.21-1.54 2.2-2.24 6.62L301.95 0l-12.48 1.28 3.46-17.41q.57-2.88 1.09-6.14.51-3.27.51-3.78 0-2.94-2.18-2.94-1.47 0-3.07 2.17-1.6 2.18-2.5 6.66L282.88 0l-12.61 1.28 6.72-33.92 10.43-1.28-1.08 6.46q1.66-3.45 4.73-4.96 3.07-1.5 7.87-1.5 2.76 0 4.55 1.34 1.79 1.35 2.37 3.52 1.08-2.24 3.87-3.55 2.78-1.31 6.21-1.31 3.42 0 5.12.74 1.69.73 2.72 1.95 1.72 2.24 1.72 6.33 0 4.04-1.72 12.42-.9 4.1-.9 5.6t.86 2.4q.87.9 2.15 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28Zm15.65-3.2q-1.5-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.48-3.91 4.16-6.72 5.51-5.89 14.6-5.89 3.26 0 5.63 1.09l10.94-1.09-4.73 24.96q-.2.77-.2 2.18 0 1.4.87 2.3.86.9 2.14 1.02-.64 2.18-2.97 3.46-2.34 1.28-4.96 1.28-2.63 0-4.39-.99-1.76-.99-2.27-2.66-1.02 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43Zm13.5-25.98q-.73 1.15-1.37 3.1-.64 1.95-1.7 7.17-1.05 5.21-1.05 8.93 0 3.71.57 4.8.58 1.08 1.6 1.08 2.05 0 3.55-1.95 1.51-1.95 2.08-5.41l3.4-18.75q-1.35-1.15-2.92-1.15-1.56 0-2.49.51-.93.51-1.67 1.67Zm24.93 21.5q0-1.73.9-6.08l3.39-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.08l-1.54 6.98h4.99l-.57 2.88h-4.93l-3.27 17.28q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.94 3.46-2.31 1.28-5.57 1.28-3.27 0-5.12-2.05-1.86-2.05-1.86-5.63Z"
          transform="translate(52.687 99)"
        />
      </g>
    </svg>
  );
};
