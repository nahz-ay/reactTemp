"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Accordion from "../components/AccordionFaq";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoModal from "@/components/VideoModal";
import DottedBtn from "@/components/DottedBtn";
import DesktopNav from "@/components/DesktopNav";

export default function Home() {
  const faqItems = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
  ];

  return (
    <div className="m-lg-2">
      <DesktopNav />
       <Accordion faqItems={faqItems} />
      <DottedBtn btnName="Hover" />
      <VideoModal />
    </div>
  );
}
