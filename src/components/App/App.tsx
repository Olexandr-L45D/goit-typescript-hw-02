import axios from "axios";
import css from './App.module.css'
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar"
import ImageGallery from "../ImageGallery/ImageGallery"
import { getAsyncImage } from "../../articles-api"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"
import ImageModal from "../ImageModal/ImageModal"
import { ModalBigPicture, UserPicture } from "../../types";
import RotatingLoader from "../Loader/Loader";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPicture, setSelected] = useState<ModalBigPicture | null>(null);
  const [articles, setArticles] = useState<UserPicture[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1000);
  const [page, setPage] = useState<number>(1);
  const [topic, setTopic] = useState<string>(() => {
    const savClicks = window.localStorage.getItem("my-clicks");
    return savClicks !== null && JSON.parse(savClicks) && "";
  });

  useEffect(() => {
    if (topic === "") {
      return;
    };
    async function getArticles() {
      try {
        setLoading(true);
        setError(null);
        const data = await getAsyncImage(topic, page);
        setArticles((prevState) => [...prevState, ...data.results]); // подвійне розпилення обовязкове тому що ми додаємо до вже існуючого масиву/сторінки
        setTotalPages(data.total_pages);
      } catch (error) {
        if (error instanceof Error) { setError(error.message); }
        else {
          setError('Sorry this not');
        }
      } finally {
        setLoading(false);
      }
    }
    getArticles();
    console.log(topic);
  }, [page, topic]);

  const handleSearch = (newTopic: string): void => {
    setTopic(newTopic);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const openModal = (data: ModalBigPicture) => {
    setIsOpen(true);
    setSelected(data)
  };

  function closeModal(): void {
    setIsOpen(false);
    setSelected(null)
  }

  return (
    <>
      <div className={css.headers}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div>
        <>
          {articles.length > 0 && <ImageGallery items={articles} onClick={openModal} />}
        </>
        <>
          {page >= totalPages && <ErrorMessage masseg={error} />}
          {error && <ErrorMessage masseg={error} />}
          {loading && <RotatingLoader rotatingLoader={loading} />}
          {articles.length > 0 && !loading && (
            <LoadMoreBtn onAdd={handleLoadMore} />
          )}
          <ImageModal isOpen={isOpen} data={selectedPicture} onClose={closeModal} />
        </>
      </div>
    </>
  )
}































// в данному ДЗ зберігати в Локальне Сховище не потрібно
// const [topic, setTopic] = useState(() => {
//   const savClicks = window.localStorage.getItem("my-clicks");
//   return savClicks !== null && JSON.parse(savClicks) && "";
// });
// useEffect(() => {
//   const isLocalStorData = Boolean(localStorage.getItem("my-clicks"));
//   if (isLocalStorData) {
//     const data = localStorage.getItem("my-clicks");
//     setTopic(JSON.parse(data));
//   }
// }, []);
// useEffect(() => {
//   window.localStorage.setItem("my-clicks", JSON.stringify(topic));
// }, [topic]);


