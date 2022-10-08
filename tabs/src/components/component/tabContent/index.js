import React from "react";
import "./styles.css";

function TabContent({ selectedTab }) {
  return (
    <div id="tabContent">
      {selectedTab === "History" ? (
        <div className="Content">
          <img alt="" src="https://picsum.photos/id/1003/367/267" />

          <div className="textContent">
            <h1>History</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose injected humour and the like.
            </p>
          </div>
        </div>
      ) : selectedTab === "Vision" ? (
        <div className="Content">
          <img alt="" src="https://picsum.photos/id/0/367/267" />
          <div className="textContent">
            <h1>Vision</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      ) : (
        <div className="Content">
          <img alt="" src="https://picsum.photos/id/1001/367/267" />
          <div className="textContent">
            <h1>Goals</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TabContent;
