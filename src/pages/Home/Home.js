import { useEffect, useState } from "react";
import ButtonIcon from "../../components/ButtonIcon";
import FileComponent from "../../components/FileComponent";
import AddFiles from "../../components/Modal/AddFiles";
import Modal from "../../components/Modal/Modal";
import { ASSETS } from "../../utils/assets";
import Layout from "../Layout";
import { AiOutlineUser } from "react-icons/ai";
import S3 from 'react-aws-s3-typescript';
import { awsConfig } from "../../setup/aws/confing";
import { Authenticator } from "@aws-amplify/ui-react";

const Home = () => {
  const [images,setImages] = useState([]);
  const [activeModal, setActiveModal] = useState(false);
  const onActiveModal = () => {
    setActiveModal(!activeModal);
  };
  useEffect(() =>{
    const ReactS3 = new S3(awsConfig);
    ReactS3.listFiles().then(datas =>{
      console.log(datas.data.Contents);
      setImages(datas.data.Contents);
    }).catch(err =>{
      console.log(err);
    })
  },[])
  return (
    <Layout>
      <Modal onClose={onActiveModal} active={activeModal}>
        <AddFiles />
      </Modal>
      <header className="relative flex justify-between items-center gap-2 py-5">
        <div className="w-[40px]">
          <img className="w-full" src={ASSETS.logo} alt="logo" />
        </div>
        <div className="flex gap-4 items-center">
          <ButtonIcon
            onClick={onActiveModal}
            className="bg-blue-600 text-white rounded shadow"
          >
            Add File
          </ButtonIcon>
          <Authenticator>
      {({ signOut, user }) => (
        <div className="flex gap-5">
          <p className="py-1 px-3 border bg-gray-100 rounded flex gap-3 items-center justify-between">
            <span>
              <AiOutlineUser size={20}/>
            </span>
            {user?.username}
            </p>
          <button className="bg-red-600 rounded text-white px-5" onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
        </div>
      </header>
      <div className="flex flex-wrap items-start gap-3">
        {images.map((it, i, _) => (
          <FileComponent files={it} />
        ))}
      </div>
    </Layout>
  );
};
export default Home;
