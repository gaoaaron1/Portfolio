import React, { useState, useRef, useEffect } from 'react';
import './CustomScrollbar.css';

interface CustomScrollbarProps {
  children: React.ReactNode;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false); // Added state for overflow detection
  const contentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSliderPosition = () => {
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

    const checkOverflow = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        const containerHeight = contentRef.current.clientHeight;
        setIsOverflowing(contentHeight > containerHeight);
      }
    };

    updateSliderPosition();
    checkOverflow(); // Check if content overflows on initial load
  }, [children]);

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
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    setIsDragging(true);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleTrackClick = (event: React.MouseEvent) => {
    if (!trackRef.current || !contentRef.current) return;

    const track = trackRef.current;
    const content = contentRef.current;
    const trackRect = track.getBoundingClientRect();
    const trackHeight = track.clientHeight;
    const clickPosition = event.clientY - trackRect.top;
    const sliderHeight = sliderRef.current?.clientHeight || 0;

    const scrollHeight = content.scrollHeight;
    const containerHeight = content.clientHeight;
    const maxScrollTop = scrollHeight - containerHeight;

    const scrollTop = ((clickPosition - sliderHeight / 2) / trackHeight) * maxScrollTop;

    content.scrollTop = scrollTop;
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
      {isOverflowing && ( // Show scrollbar only if content is overflowing
        <div
          className="scrollbar-track"
          ref={trackRef}
          onClick={handleTrackClick}
        >
          <div
            className="scrollbar-slider"
            style={{ top: `${scrollPosition}px` }}
            ref={sliderRef}
            onMouseDown={handleSliderDrag}
          ></div>
        </div>
      )}
    </div>
  );
};

export default CustomScrollbar;
