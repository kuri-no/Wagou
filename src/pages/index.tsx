import Image from "next/image";
import styles from "./page.module.css";
import FirstView from "../app/(home)/_components/FirstView";
import PointSection from "../app/(home)/_components/PointSection";
import CaseSection from "../app/(home)/_components/CaseSection";
import FeatureSection from "../app/(home)/_components/FeatureSection";
import StorySection from "../app/(home)/_components/StorySection";
import NewsSection from "../app/(home)/_components/NewsSection";
import NewsSectionMicroCMS from "../app/(home)/_components/NewsSectionMicroCMS";

export default function Home() {
  return (
    <>
      <FirstView />
      <PointSection />
      <CaseSection />
      <FeatureSection />
      <StorySection />

      
      <NewsSection />
      <NewsSectionMicroCMS />
    </>
  );
}
