import { useState } from 'react';

export function useModal() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(null);

  const abrir = (item = null) => {
    setData(item);
    setVisible(true);
  };

  const cerrar = () => setVisible(false);

  return { visible, data, abrir, cerrar };
}