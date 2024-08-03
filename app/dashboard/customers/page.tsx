'use client'; 
import FormModal from "@/app/ui/form/formModal";
import { useState } from "react";
import { useRouter } from 'next/router';
import ModalForm from "@/app/ui/form/formModal";

export default function Page() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
    return <>
      <div className="relative min-h-screen bg-gray-200 shadow-md p-4">
      {/* Button in the top-left corner */}
      <button onClick={ showModal} className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Top Left Button
      </button>
      <ModalForm isVisible={isModalVisible} onClose={closeModal} />
      <p>Dashboard Page</p>
    </div>
    </>;
  }