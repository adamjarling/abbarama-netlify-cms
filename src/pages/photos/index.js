import React, { useState, useCallback } from "react";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const galleryStyles = {
  header: (base, state) => ({
    ...base,
    paddingTop: 75
  }),
  navigationPrev: (base, state) => ({
    ...base,
    padding: "inherit"
  }),
  navigationNext: (base, state) => ({
    ...base,
    padding: "inherit"
  })
};

const IndexPage = ({ data }) => {
  console.log("data", data);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = data.allFile.edges.map(
    ({ node: { publicURL, childImageSharp } }) => {
      return {
        src: publicURL,
        width: childImageSharp.sizes.presentationWidth,
        height: childImageSharp.sizes.presentationHeight
      };
    }
  );

  return (
    <Layout fullMenu>
      <div id="page-wrapper" className="photos-page">
        <article id="main">
          <header className="photos-page">
            <h2>Photos</h2>
            <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
          </header>
          <section className="wrapper style7">
            <div className="inner">
              <Gallery photos={photos} onClick={openLightbox} />

              <ModalGateway>
                {viewerIsOpen ? (
                  <Modal onClose={closeLightbox}>
                    <Carousel
                      currentIndex={currentImage}
                      styles={galleryStyles}
                      views={photos.map(x => ({
                        ...x
                      }))}
                    />
                  </Modal>
                ) : null}
              </ModalGateway>

              {/* <div className="row gtr-50 gtr-uniform">
                <div className="col-12">
                  <span className="image fit">
                    <img src="/img/products-grid1.jpg" alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src="/img/products-grid1.jpg" alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src="/img/products-grid1.jpg" alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src="/img/products-grid1.jpg" alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src="/img/products-grid1.jpg" alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src="/img/products-grid1.jpg" alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src="/img/products-grid1.jpg" alt="" />
                  </span>
                </div>
              </div> */}
            </div>
          </section>
        </article>
        <Footer />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query GetPhotosQuery {
    allFile(filter: { sourceInstanceName: { eq: "myphotos" } }) {
      edges {
        node {
          publicURL
          childImageSharp {
            sizes {
              presentationHeight
              presentationWidth
            }
          }
        }
      }
    }
  }
`;
