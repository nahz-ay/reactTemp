"use client"
import Image from 'next/image'
import { useState } from 'react';
import styles from './page.module.css'
import Accordion from '../components/AccordionFaq';
import VideoModal from '@/components/VideoModal';

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };



  const faqItems = [
    {
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.'
    },
    {
      question: 'Why do we use it?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      question: 'Where does it come from?',
      answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
    }
  ];

  return (
    <main className={styles.main}>
      <h1> 21323 </h1>
      <Accordion faqItems={faqItems} />
      <button onClick={handleOpenModal}>Open Video Modal</button>

      <VideoModal isOpen={modalOpen} onClose={handleCloseModal} videoUrl="https://youtu.be/XxWiKsWX9U8" />



          
    </main>
  )
}
