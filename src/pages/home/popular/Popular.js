import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
// import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";
import { fetchDataFromApi } from "../../../utils/api";

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch("/movie/popular");

    

    return (
        <div className="carouselSection">
            <ContentWrapper>
             <span className="carouselTitle">What's Popular</span>
                
            </ContentWrapper>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default Popular;
