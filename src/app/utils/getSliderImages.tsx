import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function getImagePath(fileName: string) {
  return `${publicRuntimeConfig.basePath}/images/slider/${fileName}`;
}

export const images = [
  {
    id: "1",
    url: getImagePath("img5.webp"),
    title: "Szkoła nurkowania",
  },
  {
    id: "2",
    url: getImagePath("img2.webp"),
    title: "Title2",
  },
  {
    id: "3",
    url: getImagePath("img3.webp"),
    title: "Title3",
  },
  {
    id: "4",
    url: getImagePath("img4.webp"),
    title: "Title4",
  },
  {
    id: "5",
    url: getImagePath("img1.webp"),
    title: "Title5",
  },
  {
    id: "6",
    url: getImagePath("img6.webp"),
    title: "Title6",
  },
  {
    id: "7",
    url: getImagePath("img7.webp"),
    title: "Title7",
  },
];
