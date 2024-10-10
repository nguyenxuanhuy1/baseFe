import { useState } from "react";

const useActions = () => {
  const [actions, setActions] = useState<{
    create: boolean;
    update: boolean;
    delete: boolean;
  }>({
    create: false,
    update: false,
    delete: false,
  });

  return [actions, setActions] as const;
};

export default useActions;
export interface dictActions {
  create: boolean;
  update: boolean;
  delete: boolean;
}
