import { useState, useRef } from "react";

export default function StickyNote({ onClose }) {
  const [allowMove, setAllowMove] = useState(false);
  const stickyNoteRef = useRef();
  const [dx, setDx] = useState(0);
  const [dy, setDy] = useState(0);

  function handleMouseDown(e) {
    setAllowMove(true);
    const dimensions = stickyNoteRef.current.getBoundingClientRect();
    setDx(e.clientX - dimensions.x);
    setDy(e.clientY - dimensions.y);
  }

  function handleMouseMove(e) {
    if (allowMove) {
      // move the sticky note
      stickyNoteRef.current.style.left = e.clientX - dx + "px";
      stickyNoteRef.current.style.top = e.clientY - dy + "px";
    }
  }

  function handleMouseUp() {
    setAllowMove(false);
  }

  return (
    <div
      className="sticky-note"
      ref={stickyNoteRef}
      onMouseMove={handleMouseMove}
    >
      <div
        className="sticky-note-header"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div>sticky notes</div>
        <div className="close" onClick={onClose}>&times;</div>
      </div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  );
}
