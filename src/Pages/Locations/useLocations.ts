import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { RootState } from "@redux/store";

import { useScroll } from "@hooks/useScroll";
import usePaginator from "@components/Paginator/usePaginator";
import { getLocations } from "@redux/actions";

type LocationFormData = {
  name: string;
  type: string;
  dimension: string;
};

const initialFormData: LocationFormData = {
  name: "",
  type: "",
  dimension: "",
};

const useLocations = () => {
  const locations = useSelector((state: RootState) => state.locationReducer);
  const [currentPage, setCurrentPage] = useState<string>("1");
  const [formData, setFormData] = useState<LocationFormData>(initialFormData);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const { scrollToRef, executeScroll } = useScroll();
  const { paginatorProps, disableNextButton, disablePrevButton } =
    usePaginator();

  useEffect(() => {
    disablePrevButton(locations.info?.prev);
    disableNextButton(locations.info?.next);
  }, [locations.info, disableNextButton, disablePrevButton]);

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
    if (locations.info?.prev) {
      switchPage(locations.info?.prev);
      executeScroll();
    }
  };

  const nextButtonHandler = () => {
    if (locations.info?.next) {
      switchPage(locations.info?.next);
      executeScroll();
    }
  };

  const extractFilterData = useCallback(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const type = params.get("type");
    const dimension = params.get("dimension");
    const page = params.get("page");
    setFormData({
      name: name ? name : "",
      type: type ? type : "",
      dimension: dimension ? dimension : "",
    });
    setCurrentPage(page ? page : "1");
  }, [location.search]);

  const initialQuery = useCallback(() => {
    if (!location.pathname.includes("locations/")) {
      dispatch(getLocations(location.search));
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
    updateParams(searchParams, "type", formData.type);
    updateParams(searchParams, "dimension", formData.dimension);

    searchParams.set("page", "1");
    setCurrentPage("1");

    const params = "?" + searchParams.toString();

    dispatch(getLocations(params));
    history.replace({
      pathname: pathname,
      search: params,
    });
    executeScroll();
  };

  const onInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return {
    locations,
    currentPage,
    formData,
    location,
    scrollToRef,
    paginatorProps,
    prevButtonHandler,
    nextButtonHandler,
    initialQuery,
    onSubmit,
    onInputChange,
  };
};

export default useLocations;
