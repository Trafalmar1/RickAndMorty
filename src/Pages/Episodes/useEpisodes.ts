import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { RootState } from "@redux/store";
import { useScroll } from "@hooks/useScroll";

import { getEpisodes } from "@redux/actions";
import { useInput } from "@hooks/useInput";

type EpisodeFormData = {
  name: string;
};

const initialFormData: EpisodeFormData = {
  name: "",
};

const useEpisodes = () => {
  const episodes = useSelector((state: RootState) => state.episodeReducer);
  const [currentPage, setCurrentPage] = useState<string>("1");
  const [formData, setFormData] = useState<EpisodeFormData>(initialFormData);
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
    if (episodes.info?.prev) {
      switchPage(episodes.info?.prev);
      executeScroll();
    }
  };

  const nextButtonHandler = () => {
    if (episodes.info?.next) {
      switchPage(episodes.info?.next);
      executeScroll();
    }
  };

  const extractFilterData = useCallback(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const page = params.get("page");
    setFormData({
      name: name ? name : "",
    });
    setCurrentPage(page ? page : "1");
  }, [location.search]);

  const initialQuery = useCallback(() => {
    if (!location.pathname.includes("episodes/")) {
      dispatch(getEpisodes(location.search));
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

    updateParams(searchParams, "name", formData.name);

    searchParams.set("page", "1");
    setCurrentPage("1");

    const params = "?" + searchParams.toString();

    dispatch(getEpisodes(params));
    history.replace({
      pathname: pathname,
      search: params,
    });
    executeScroll();
  };

  return {
    episodes,
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

export default useEpisodes;
