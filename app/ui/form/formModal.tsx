'use client'; 
import { useRouter } from 'next/router';
 
import styles from "@/app/ui/form.module.css";

import { useState, ChangeEvent, FormEvent } from 'react';
 
 
 

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  age: string;
  gender: string;
  grade: string;
}

interface ModalFormProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ModalForm({ isVisible, onClose }: ModalFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    age: '',
    gender: '',
    grade: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose(); // Close the modal after submission
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <label className={styles.modalLabel}>
            Name:
            <input
              className={styles.modalInput}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.modalLabel}>
            Email:
            <input
              className={styles.modalInput}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.modalLabel}>
            Phone:
            <input
              className={styles.modalInput}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.modalLabel}>
            Address:
            <input
              className={styles.modalInput}
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.modalLabel}>
            Age:
            <input
              className={styles.modalInput}
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.modalLabel}>
            Gender:
            <input
              className={styles.modalInput}
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.modalLabel}>
            Grade:
            <input
              className={styles.modalInput}
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.modalLabel}>
            Password:
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <button className={styles.modalSubmitButton} type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
