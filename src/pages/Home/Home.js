import { useState } from "react";
import ButtonIcon from "../../components/ButtonIcon";
import FileComponent from "../../components/FileComponent";
import InputIcons from "../../components/InputIcons";
import AddFiles from "../../components/Modal/AddFiles";
import Modal from "../../components/Modal/Modal";
import { ASSETS } from "../../utils/assets";
import { DATAS } from "../../utils/data";
import Layout from "../Layout";
import { AiOutlineUser } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  const [activeModal, setActiveModal] = useState(false);
  const onActiveModal = () => {
    setActiveModal(!activeModal);
  };
  return (
    <Layout>
      <Modal onClose={onActiveModal} active={activeModal}>
        <AddFiles />
      </Modal>
      <header className="relative flex justify-between items-center gap-2 py-5">
        <div className="w-[40px]">
          <img className="w-full" src={ASSETS.logo} alt="logo" />
        </div>
        <InputIcons
          icon={<IoSearch />}
          placeholder="Searsh files..."
          className="max-w-[400px] w-full"
        />
        <div className="flex gap-4 items-center">
          <ButtonIcon
            onClick={onActiveModal}
            className="bg-blue-600 text-white rounded shadow"
          >
            Add File
          </ButtonIcon>
          <div className="user-container relative h-[40px] w-[40px] bg-gray-300 rounded-[99px] flex justify-center items-center">
            <AiOutlineUser size={20} />
            <div
              className="user-buttons-container absolute top-[100%] right-0 rounded bg-white shadow-xl p-2 w-[300px] z-20"
            >
              <p className="py-2 text-blue-600 font-bold">Mintsa Jean-Bosco</p>
              <ButtonIcon className="bg-red-500 w-full rounded-sm mt-2 text-white">Logout</ButtonIcon>
            </div>
          </div>
        </div>
      </header>
      <div>
        {DATAS.map((it, i, _) => (
          <FileComponent files={it} />
        ))}
      </div>
    </Layout>
  );
};
export default Home;
