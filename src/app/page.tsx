import { Facebook } from "@/stories/Components/Facebook/Facebook";
import { TwoColumns } from "@/stories/Components/TwoColumns/TwoColumns";
import { useImagePath } from "@/app/hooks/useImagePath";
import { useReloadFont } from "@/app/hooks/useReloadFont";
import { HorizontalSection } from "@/stories/Components/HorizontalSection/HorizontalSection";

export default function Home() {
  // FIRST TWO COLUMNS SECTION IMAGES
  const getImages = useImagePath;
  const image1 = getImages("images/slider/img11.webp");
  const image2 = getImages("images/slider/img10.webp");
  const image3 = getImages("images/slider/img9.webp");
  const image4 = getImages("images/slider/img13.webp");
  const image5 = getImages("images/slider/img14.webp");
  const image6 = getImages("images/slider/img16.webp");
  const image7 = getImages("images/slider/img12.webp");
  const font = useReloadFont.style.fontFamily;

  return (
    <>
      <Facebook font={font} />
      <TwoColumns
        font={font}
        backgroundFirst={image1}
        titleFirst={"HISTORIA NURKOWANIA"}
        descriptionFirst={"ciekawe fakty dotyczące tego, jak nurkowanie ewoluowało i zmieniało się przez wieki"}
        backgroundSecond={image2}
        titleSecond={"O NAS"}
        descriptionSecond={"specjalizujemy się w szkoleniu dla nurków, zapewniając wysokiej jakości kursy"}
      />
      <HorizontalSection
        font={font}
        background={image3}
        title={"KURSY"}
        description={"Sprawdź naszą ofertę, obejmującą różnorodne poziomy umiejętności i specjalizacje, aby każdy mógł znaleźć idealny kurs dopasowany do swoich potrzeb"}
      />
        <TwoColumns
            font={font}
            backgroundFirst={image4}
            titleFirst={"SPRZĘT NURKOWY"}
            descriptionFirst={"informacje o niezbędnym wyposażeniu dla nurka, prezentująca najnowsze produkty"}
            backgroundSecond={image5}
            titleSecond={"Odzież"}
            descriptionSecond={"szeroki wybór sprzętu i akcesoriów dedykowanych nurkowaniu, zapewniających komfort i funkcjonalność"}
        />
        <TwoColumns
            font={font}
            backgroundFirst={image6}
            titleFirst={"AKTUALNOŚCI"}
            descriptionFirst={"Bądź na bieżąco z najnowszymi informacjami o naszych kursach i wydarzeń, aby nie przegapić żadnej informacji"}
            backgroundSecond={image7}
            titleSecond={"KONTAKT"}
            descriptionSecond={"Znajdź więcej informacji o nas aby sprawnie się z nami skontaktować"}
        />
    </>
  );
}
