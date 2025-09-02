import { useState } from "react";
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import Modal from "./components/Modal"
import SlideCalender from "./components/Calender";

function App() {
const [modalOpen, setModalOpen] = useState(false);
const [calenderOpen, setCalenderOpen] = useState(false);

console.log(calenderOpen)
  return (
    <>
     <Header setModalOpen={setModalOpen} setCalenderOpen={setCalenderOpen} calenderOpen={calenderOpen}/>
      <Dashboard/>
      <Modal open={modalOpen} setOpen={setModalOpen}/>
      <SlideCalender open={calenderOpen} setOpen={setCalenderOpen}/>
    </>
  )
}

export default App
