import { useState } from "react";

export function useModal(): [boolean, () => void, () => void] {
  const [open, setOpen] = useState(false);

  function handleOpenModal() {
    setOpen((oldState) => !oldState);
  }

  function handleCloseModal() {
    setOpen(false);
  }

  return [open, handleOpenModal, handleCloseModal];
}
