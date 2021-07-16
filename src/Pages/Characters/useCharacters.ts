import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { RootState } from "@redux/store";
import { useScroll } from "@hooks/useScroll";

import { getCharacters } from "@redux/actions";
import { useInput } from "@hooks/useInput";

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
  const [formData, setFormData] = useState<ChracterFormData>(initialFormData);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { scrollToRef, executeScroll } = useScroll();
  const { onInputChange } = useInput(formData, setFormData);

  const extractParamsFromURL = (url: string) => {
    const params = "?" + url.split("?")[1];
    const search = new URLSearchParams(params);
    const pageNumber = search.get("page");
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

  const extractFilterData = useCallback(() => {
    const params = new URLSearchParams(location.search);
    const gender = params.get("gender");
    const species = params.get("species");
    const status = params.get("status");
    const page = params.get("page");
    setFormData({
      gender: gender ? gender : "",
      species: species ? species : "",
      status: status ? status : "",
    });
    setCurrentPage(page ? page : "1");
  }, [location.search]);

  const initialQuery = useCallback(() => {
    if (!location.pathname.includes("characters/")) {
      dispatch(getCharacters(location.search));
      extractFilterData();
    }
  }, [dispatch, extractFilterData, location.search, location.pathname]);

  const updateParams = (
    searchParams: URLSearchParams,
    name: string,
    data: string
  ) => {
    if (data !== "") {
      searchParams.set(name, data);
    } else {
      searchParams.delete(name);
    }
    return searchParams;
  };

  const onSubmit = () => {
    let pathname = location.pathname;
    let searchParams = new URLSearchParams(location.search);

    updateParams(searchParams, "species", formData.species);
    updateParams(searchParams, "status", formData.status);
    updateParams(searchParams, "gender", formData.gender);

    searchParams.set("page", "1");
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
    prevButtonHandler,
    nextButtonHandler,
    initialQuery,
    onSubmit,
    onInputChange,
  };
};

export default useCharacters;
