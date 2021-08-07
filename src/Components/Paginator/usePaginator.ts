import { useCallback, useState } from "react";
import { Pages } from "./Paginator";

const usePaginator = () => {
  const [paginatorProps, setPaginatorProps] = useState<Pages>({
    hasNext: false,
    hasPrev: false,
  });

  const updateWithPrevState = (obj: any) => {
    setPaginatorProps((prevState: Pages) => ({ ...prevState, ...obj }));
  };

  const disablePrevButton = useCallback((value?: string) => {
    value
      ? updateWithPrevState({ hasPrev: true })
      : updateWithPrevState({ hasPrev: false });
  }, []);

  const disableNextButton = useCallback((value?: string) => {
    value
      ? updateWithPrevState({ hasNext: true })
      : updateWithPrevState({ hasNext: false });
  }, []);

  return { paginatorProps, disableNextButton, disablePrevButton };
};
export default usePaginator;
