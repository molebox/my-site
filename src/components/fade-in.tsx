import { useRef, useLayoutEffect, forwardRef, useEffect } from 'react';
import { gsap } from 'gsap';

const FadeIn = forwardRef(({ children, stagger = 0, y = 0 }: any, ref) => {
  const el = useRef(null);
  const animation = useRef(null);
  
  useLayoutEffect(() => {    
    if (el.current && animation.current) {
    animation.current = gsap.from(el.current.children, { 
      opacity: 0,
      stagger, 
      y 
    });        
  }
  }, []);
  
  useEffect(() => {
    
    // forward the animation instance
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);
  
  return <span ref={el}>{children}</span>
});

export default FadeIn;