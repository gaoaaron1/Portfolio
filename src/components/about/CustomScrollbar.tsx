import React, { useState, useRef } from 'react';
import './CustomScrollbar.css';

interface CustomScrollbarProps {
  children: React.ReactNode;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (contentRef.current && sliderRef.current) {
      const scrollTop = contentRef.current.scrollTop;
      const scrollHeight = contentRef.current.scrollHeight;
      const containerHeight = contentRef.current.clientHeight;

      const sliderHeight = sliderRef.current.clientHeight;
      const maxScrollTop = scrollHeight - containerHeight;

      const newTop = (scrollTop / maxScrollTop) * (containerHeight - sliderHeight);
      setScrollPosition(newTop);
    }
  };

  const handleSliderDrag = (event: React.MouseEvent) => {
    const slider = sliderRef.current;
    const content = contentRef.current;

    if (!slider || !content) return;

    const containerHeight = content.clientHeight;
    const maxScrollTop = content.scrollHeight - containerHeight;

    const startY = event.clientY;
    const startScrollTop = content.scrollTop;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = moveEvent.clientY - startY;
      const scrollDelta = (deltaY / containerHeight) * maxScrollTop;
      content.scrollTop = startScrollTop + scrollDelta;
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="scrollbar-container">
      <div
        className="scrollable-content"
        ref={contentRef}
        onScroll={handleScroll}
      >
        {children}
      </div>
      <div className="scrollbar-track">
        <div
          className="scrollbar-slider"
          style={{ top: `${scrollPosition}px` }}
          ref={sliderRef}
          onMouseDown={handleSliderDrag}
        ></div>
      </div>
    </div>
  );
};

export default CustomScrollbar;
