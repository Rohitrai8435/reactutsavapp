import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./heroBanner.css";
import useFetch from "../../../hooks/useFetch";
import { VscDebugStart } from "react-icons/vsc";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { fetchDataFromApi } from "../../../utils/api";

const HeroBanner = () => {
  const { url } = useSelector((state) => state.home);
  const [backimages, setbackimages] = useState([]);
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/popular");

  return (
    <div className="heroBanner">
      <div className="overlayer">
        {!loading && (
          <>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>

            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>

            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>

            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
            <div className="backdrop-img">
              <Img
                src={
                  url.backdrop +
                  data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
                }
              />
            </div>
          </>
        )}
      </div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Best Viewing Exprience with Utsav</span>
          <span className="subTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem tenetur animi doloribus! Vero exercitationem ipsa
            quo! Aspernatur modi eius quae consectetur iste cupiditate,
            pariatur, quaerat eos at alias exercitationem commodi hic suscipit,
            saepe magnam facilis in quam dicta ipsum! Nam, tenetur? Odit, id?
            Sapiente soluta id hic maiores! Eveniet, magnam.
          </span>
          <button className="playbtn">
            {" "}
            <VscDebugStart />
            Start Watching Now
          </button>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
