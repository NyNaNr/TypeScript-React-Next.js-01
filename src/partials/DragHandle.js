import { DragIconWrapper } from "../styles";
import { ReactComponent as DragHandleIcon } from "../drag_handle-black-18dp.svg";
import React from "react";

export default function DragHandle(props) {
  return (
    <DragIconWrapper {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M20,9H4v2h16V9z M4,15h16v-2H4V15z"/></g></g></g></svg>
    </DragIconWrapper>
  );
}
