import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { useCallback, useRef, useState } from "react";
import Test from "@/public/test";
import image1 from "../../public/2.jpg";
import image2 from "../../public/1.webp";

console.log(image1.src);
const Contact = () => {
  const lightGallery = useRef(null);
  const [container, setContainer] = useState(null);

  const [items, setItems] = useState([
    {
      id: "1",
      src: image1.src,
      thumb: image1.src,
    },
    {
      id: "2",
      src: image2.src,
      thumb: image2.src,
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80",
      thumb:
        "https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80",
    },
  ]);
  const onInit = useCallback((detail) => {
    if (detail && detail.instance) {
      lightGallery.current = detail.instance;
      lightGallery.current.openGallery();
    }
  }, []);

  const setContainerRef = useCallback((node) => {
    if (node !== null) {
      setContainer(node);
    }
  }, []);

  const getLgComponent = () => {
    if (container !== null) {
      return (
        <LightGallery
          //  mode=""
          container={container}
          plugins={[lgZoom, lgThumbnail]}
          dynamic={true}
          dynamicEl={items}
          closable={false}
          onInit={onInit}
          autoplay="true"
          showMaximizeIcon={true}
          appendSubHtmlTo=".lg-item"
          speed={700}
          controls={true} // arrow left and right
          subHtmlSelectorRelative={false}
          // ariaLabelledby=""
          thumbnail={true}
          // thumbHeight="50px"
          // thumbWidth="50px"
          toggleThumb={true}
        ></LightGallery>
      );
    }
    return null;
  };
  return (
    <>
      <div className="container">
        <div className="row m-0">
          <div className="col-md-9 col-12 row m-0">
            <div
              style={{
                width: "100%",
                minHeight: "450px",
                paddingBottom: "50%",
              }}
              ref={setContainerRef}
            >
              {getLgComponent()}
            </div>
          </div>
          <div className="col-md-3 col-12">01</div>
          <Test/>
        </div>
      </div>
    </>
  );
};

export default Contact;

// export const getStaticProps = async () => {
//   const req = await fetch("https://staging.mazaady.com/api/v1/get_all_cats");
//   const response = await req.json();
//   console.log(response);
//   return {
//     props: {
//       data: response,
//     },
//   };
// };
