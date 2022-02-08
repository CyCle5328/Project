import React, { useEffect, useState } from 'react';
import styles from './artlist.module.css';
import Navbar from '../../navbar/navbar';
import FillterBox from './filterBox/filterBox';
import axios from 'axios';
import ArtworkList from './artworkList/artworkList';

const Artlist = () => {
  const [list, setList] = useState([]);
  const [theme, setTheme] = useState('전체보기');
  const [arrange, setArrange] = useState('RECENT');

  async function getSearchArtList() {
    const response = await axios.get(
      `http://localhost:8080/api/artList/page/1/state/true/arrange/${arrange}/theme/${theme}/query/null`,
    );
    setList(response.data.list);
  }

  useEffect(() => {
    getSearchArtList();
  }, [theme, arrange]);

  return (
    <div className={styles.wrap}>
      <Navbar />
      <FillterBox
        setTheme={setTheme}
        theme={theme}
        arrange={arrange}
        setArrange={setArrange}
      />
      <div className={styles.artWrap}>
        {list.map((art) => (
          <ArtworkList art={art} key={art.artNo} />
        ))}
      </div>
    </div>
  );
};

export default Artlist;
