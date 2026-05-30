import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useI18n } from "../i18n/I18nContext";
import "./gallery.css";

// Image imports
import img1 from "../assets/utcar4.png";
import img2 from "../assets/utcar2.png";
import img3 from "../assets/gallery/cat.jpg";
import img4 from "../assets/gallery/emptylab.jpg";
import img5 from "../assets/gallery/assembling2.jpg";

// Video imports
import vid1 from "../assets/gallery/first test.mp4";
import vid2 from "../assets/videos/test1.mp4";
import vid3 from "../assets/videos/lanedetection.mp4";

// Video thumbnails
import thumb1 from "../assets/thumbnails/first-thumb.jpg";
import thumb2 from "../assets/thumbnails/lane-thumb.jpg";
import thumb3 from "../assets/thumbnails/test1-thumb.jpg";

const GALLERY = [
  {
    type: "image",
    titleKey: "assembling_car",
    categoryKey: "lab",
    src: img1,
  },
  {
    type: "image",
    titleKey: "lab_meeting",
    categoryKey: "events",
    src: img2,
  },
  {
    type: "image",
    titleKey: "last_day_1403",
    categoryKey: "lab",
    src: img3,
  },
  {
    type: "image",
    titleKey: "empty_lab",
    categoryKey: "lab",
    src: img4,
  },
  {
    type: "image",
    titleKey: "assembling_car",
    categoryKey: "lab",
    src: img5,
  },
  {
    type: "video",
    titleKey: "first_field_test",
    categoryKey: "tests",
    src: vid1,
    thumbnail: thumb1,
  },
  {
    type: "video",
    titleKey: "vision_field_test",
    categoryKey: "tests",
    src: vid2,
    thumbnail: thumb3,
  },
  {
    type: "video",
    titleKey: "lane_detection_test",
    categoryKey: "tests",
    src: vid3,
    thumbnail: thumb2,
  },
];

function GalleryCard({ item, onClick, t }) {
  return (
    <div
      className="gallery-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <img
        src={item.type === "video" ? item.thumbnail : item.src}
        alt={t(item.titleKey)}
        loading="lazy"
      />

      {item.type === "video" && (
        <div className="video-play-icon">
          ▶
        </div>
      )}

      <div className="gallery-overlay">
        <h3>{t(item.titleKey)}</h3>
        <span>{t(item.categoryKey)}</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  const { lang, t } = useI18n();
  const isRtl = lang === "fa";

  const categories = [
    "all",
    ...new Set(GALLERY.map((item) => item.categoryKey)),
  ];

  const filteredItems =
    filter === "all"
      ? GALLERY
      : GALLERY.filter((item) => item.categoryKey === filter);

  return (
    <main
      className="container-fluid py-5 px-3 px-md-5"
      style={{ maxWidth: "1400px" }}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <hr />
      <div className="mb-5" />

      <h1 className="text-center mb-4">
        {t("gallery")}
      </h1>

      <div className="gallery-filters mb-5">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn ${
              filter === cat
                ? "btn-dark"
                : "btn-outline-dark"
            } me-2 mb-2`}
            onClick={() => setFilter(cat)}
          >
            {t(cat)}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredItems.map((item, idx) => (
          <GalleryCard
            key={idx}
            item={item}
            t={t}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      <Modal
        show={!!selected}
        onHide={() => setSelected(null)}
        centered
        size="xl"
      >
        <Modal.Body className="text-center p-3">

          {selected?.type === "image" && (
            <img
              src={selected.src}
              alt={t(selected.titleKey)}
              className="gallery-modal-image"
              style={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          )}

          {selected?.type === "video" && (
            <video
              controls
              autoPlay
              muted
              style={{
                width: "100%",
                maxHeight: "80vh",
                borderRadius: "12px",
              }}
            >
              <source
                src={selected.src}
                type="video/mp4"
              />
              {t("video_not_supported")}
            </video>
          )}

          <h3 className="mt-3">
            {t(selected?.titleKey)}
          </h3>

          <p className="text-muted">
            {t(selected?.categoryKey)}
          </p>

        </Modal.Body>
      </Modal>
    </main>
  );
}