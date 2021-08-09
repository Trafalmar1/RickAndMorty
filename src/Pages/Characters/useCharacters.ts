import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { RootState } from "@redux/store";
import { useScroll } from "@hooks/useScroll";

import { getCharacters } from "@redux/actions";
import { useInput } from "@hooks/useInput";
import usePaginator from "@components/Paginator/usePaginator";

type ChracterFormData = {
  species: string;
  status: string;
  gender: string;
};

const initialFormData: ChracterFormData = {
  species: "",
  status: "",
  gender: "",
};

const useCharacters = () => {
  const [formData, setFormData] = useState<ChracterFormData>(initialFormData);
  const [currentPage, setCurrentPage] = useState<string>("1");
  let prevPage = useRef<String>("1");

  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characterReducer);
  const { scrollToRef, executeScroll } = useScroll();
  const location = useLocation();
  const history = useHistory();
  const { onInputChange } = useInput(formData, setFormData);
  const { paginatorProps, disableNextButton, disablePrevButton } =
    usePaginator();

  useEffect(() => {
    disablePrevButton(characters.info?.prev);
    disableNextButton(characters.info?.next);
  }, [characters.info, disableNextButton, disablePrevButton]);

  useEffect(() => {
    const search = new URLSearchParams(location.search);
    const pageNumber = search.get("page");
    if (pageNumber) {
      setCurrentPage(pageNumber);
    }
  }, [location.search]);

  useEffect(() => {
    return () => {
      prevPage.current = currentPage;
    };
  }, [currentPage]);

  const extractParamsFromURL = (url: string) => {
    const params = "?" + url.split("?")[1];
    const search = new URLSearchParams(params);
    const pageNumber = search.get("page");

    return { params, pageNumber };
  };

  const switchPage = (page: string) => {
    const { params, pageNumber } = extractParamsFromURL(page);

    if (pageNumber) {
      prevPage.current = pageNumber;
      setCurrentPage(pageNumber);
    }

    history.replace({
      pathname: location.pathname,
      search: params,
    });
  };

  const prevButtonHandler = () => {
    if (characters.info?.prev) {
      switchPage(characters.info?.prev);
      executeScroll(50);
    }
  };

  const nextButtonHandler = () => {
    if (characters.info?.next) {
      switchPage(characters.info?.next);
      executeScroll(50);
    }
  };

  const run = useCallback(() => {
    if (!location.pathname.includes("characters/")) {
      dispatch(getCharacters(location.search));
    }
  }, [dispatch, location.pathname, location.search]);

  const updateParams = (
    searchParams: URLSearchParams,
    name: string,
    data: string
  ) => {
    data !== "" ? searchParams.set(name, data) : searchParams.delete(name);

    return searchParams;
  };

  const onSubmit = () => {
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);

    updateParams(searchParams, "gender", formData.gender);
    updateParams(searchParams, "species", formData.species);
    updateParams(searchParams, "status", formData.status);

    searchParams.set("page", "1");
    prevPage.current = currentPage;
    setCurrentPage("1");

    const params = "?" + searchParams.toString();

    dispatch(getCharacters(params));
    history.replace({
      pathname: pathname,
      search: params,
    });
    executeScroll();
  };

  return {
    characters,
    currentPage,
    formData,
    location,
    scrollToRef,
    loading: characters.loading,
    paginatorProps,
    prevButtonHandler,
    nextButtonHandler,
    run,
    onSubmit,
    onInputChange,
  };
};

export default useCharacters;
