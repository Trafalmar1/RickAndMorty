import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { RootState } from "@redux/store";
import { useScroll } from "@hooks/useScroll";

import { getCharacters } from "@redux/actions";
import { useInput } from "@hooks/useInput";
import { useLocalStorage } from "@hooks/useLocalStorage";

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
  const characters = useSelector((state: RootState) => state.characterReducer);
  const [currentPage, setCurrentPage] = useState<string>("1");
  let prevPage = useRef<String>("1");
  const [formData, setFormData] = useState<ChracterFormData>(initialFormData);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { scrollToRef, executeScroll } = useScroll();
  const { onInputChange } = useInput(formData, setFormData);
  const { saveString, get, remove } = useLocalStorage();

  const extractParamsFromURL = (url: string) => {
    const params = "?" + url.split("?")[1];
    const search = new URLSearchParams(params);
    const pageNumber = search.get("page");

    return { params, pageNumber };
  };

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
      executeScroll();
    }
  };

  const nextButtonHandler = () => {
    if (characters.info?.next) {
      switchPage(characters.info?.next);
      executeScroll();
    }
  };

  const extractFilteredData = useCallback(() => {
    const gender = get("gender");
    const species = get("species");
    const status = get("status");

    setFormData({
      gender: gender ? gender : "",
      species: species ? species : "",
      status: status ? status : "",
    });
  }, [get]);

  const run = useCallback(() => {
    if (!location.pathname.includes("characters/")) {
      dispatch(getCharacters(location.search));
      extractFilteredData();
    }
  }, [dispatch, extractFilteredData, location.pathname, location.search]);

  const updateParams = (
    searchParams: URLSearchParams,
    name: string,
    data: string
  ) => {
    if (data !== "") {
      searchParams.set(name, data);
      saveString(name, data);
    } else {
      remove(name);
      searchParams.delete(name);
    }
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
    prevButtonHandler,
    nextButtonHandler,
    run,
    onSubmit,
    onInputChange,
  };
};

export default useCharacters;
