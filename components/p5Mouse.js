import { useRef, useEffect } from "react";
import p5 from "p5";

export let mousePos;

const p5Mouse = ({ sendMouseDeets }) => {
  // a state that should change as frequently as possible but should not
  // trigger full re-rendering of the component.
  // https://www.smashingmagazine.com/2020/11/react-useref-hook/#about-useref-hook
  //
  const mouseRef = useRef();

  useEffect(() => {
    const Sketch = (s) => {
      s.setup = () => {
        s.createCanvas(window.innerWidth, 200);
        s.noStroke();
        s.rectMode(s.CENTER);
      };

      s.draw = () => {
        s.background(230);
        let r1 = s.map(s.mouseX, 0, s.width, 0, s.height);
        let r2 = s.height - r1;

        s.fill(237, 34, 93, r1);
        s.rect(s.width / 2 + r1 / 2, s.height / 2, r1, r1);

        s.fill(237, 34, 93, r2);
        s.rect(s.width / 2 - r2 / 2, s.height / 2, r2, r2);
      };

      s.mouseMoved = () => {
        // mouseRef.current = s.mouseX;
        sendMouseDeets(s.mouseX)
      };
    };

    new p5(Sketch);
  }, []);

  return <div ref={mouseRef} />;
};

export default p5Mouse;