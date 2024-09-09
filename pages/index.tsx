import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { ReactElement } from "react";
import { type } from "os";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import styles from "./index.module.css";
 
// const IndexPage: NextPage = () => {
//   return <div>猫画像予定地</div>;
// };

// export default IndexPage;

type Props = {
  initialImageUrl: string;
};



export default function IndexPage({ initialImageUrl }): ReactElement<any, any> | null{
  // ❶ useStateを使って状態を定義する
  const [imageUrl, setImageUrl] = useState(initialImageUrl);  
  const [loading, setLoading] = useState(false);
  // ❷ マウント時に画像を読み込む宣言
  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url); // 画像URLの状態を更新する
      setLoading(false); // ローディング状態を更新する
    });
  }, []);

  // ボタンをクリックしたときに画像を読み込む処理
  const handleClick = async () => {
    setLoading(true); // 読込中フラグを立てる
    const newImage = await fetchImage();
    setImageUrl(newImage.url); // 画像URLの状態を更新する
    setLoading(false); // 読込中フラグを倒す
  };
  return (
    <div className={styles.page}>
    <button onClick={handleClick} className={styles.button}>
      他のにゃんこも見る
    </button>
    <div className={styles.frame}>
      {loading || <img src={imageUrl} className={styles.img} />}
    </div>
  </div>
  );
    

  // ❸ ローディング中でなければ、画像を表示する
  return <div>{loading || <img src={imageUrl} />}</div>;
}

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage();
  return {
    props: {
      initialImageUrl: image.url,
    },
  };
};
 

const fetchImage = async (): Promise<Image> =>{
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
}

fetchImage().then((image) => {
  console.log(image);
});



type Image = {
  url: string;
};
