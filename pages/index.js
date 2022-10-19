import React, { useRef } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from './Home'
import { ToastContainer } from 'react-toastify';
export default function Page() {
  const feedbackRef = useRef()
  const taskRef = useRef()
  const roadMapRef = useRef()
  const shareRef = useRef()
  const createRef = useRef()
  return (
    <>
      <React.StrictMode>
        <ToastContainer />
        <Home feedbackRef={feedbackRef} taskRef={taskRef} roadMapRef={roadMapRef} shareRef={shareRef} createRef={createRef} />
        <Footer feedbackRef={feedbackRef} taskRef={taskRef} roadMapRef={roadMapRef} shareRef={shareRef} createRef={createRef} />
      </React.StrictMode>
    </>
  )
}
