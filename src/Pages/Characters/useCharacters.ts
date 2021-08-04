import { useCallback, useRef, useState } from "react";
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
    prevPage.current = currentPage;
    setCurrentPage(pageNumber ? pageNumber : "1");
    return { params, pageNumber };
  };

  const switchPage = (page: string) => {
    const { params } = extractParamsFromURL(page);

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
    const params = new URLSearchParams(location.search);
    const gender = get("gender");
    const species = get("species");
    const status = get("status");
    const page = params.get("page");
    setFormData({
      gender: gender ? gender : "",
      species: species ? species : "",
      status: status ? status : "",
    });
    prevPage.current = page ? page : "1";
    setCurrentPage(page ? page : "1");
  }, [location.search, get]);

  const getCharacterData = useCallback(() => {
    if (!location.pathname.includes("characters/")) {
      dispatch(getCharacters(location.search));
      extractFilteredData();
    }
  }, [dispatch, extractFilteredData, location.pathname, location.search]);

  const initialQuery = useCallback(() => {
    if (prevPage.current !== currentPage) {
      getCharacterData();
      return;
    }
    if (characters.results?.length) {
      const gender = get("gender");
      const species = get("species");
      const status = get("status");
      setFormData({
        gender: gender ? gender : "",
        status: status ? status : "",
        species: species ? species : "",
      });
      return;
    }

    getCharacterData();
  }, [getCharacterData, get, characters.results, currentPage]);

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

  const getSearchParams = () => {
    let search = location.search;
    const searchParams = new URLSearchParams(search);
    return {
      species: searchParams.get("species") || "",
      status: searchParams.get("status") || "",
      gender: searchParams.get("gender") || "",
    };
  };

  const isFormChanged = () => {
    const searchParams = getSearchParams();

    let changed = 0;

    changed += get("gender") === formData.gender ? 0 : 1;
    changed += get("status") === formData.status ? 0 : 1;
    changed += get("species") === formData.species ? 0 : 1;

    changed += searchParams.gender === formData.gender ? 0 : 1;
    changed += searchParams.status === formData.status ? 0 : 1;
    changed += searchParams.species === formData.species ? 0 : 1;

    return changed !== 0;
  };

  const onSubmit = () => {
    if (!isFormChanged()) {
      return;
    }
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
    initialQuery,
    onSubmit,
    onInputChange,
  };
};

export default useCharacters;
