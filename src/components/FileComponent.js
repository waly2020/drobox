import React from 'react';
import ButtonIcon from './ButtonIcon';
// import { MdDeleteForever } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";

/**
 * 
 * @param {{files : {name : string,date : string,extension : string}}} param0 
 * @returns 
 */
const FileComponent = ({files}) => {
    // publicUrl
    console.log(files.Key.split(".").pop());
    return (
        <div className='relative w-full max-w-[300px] grid gap-4 grid-rows-[1fr_50px] p-2 border rounded'>
            
            <div className='w-full h-[200px]'>
                <img className='w-full h-full object-cover rounded' src={`${files.publicUrl}`} alt="uploaded"/>
            </div>
            <div className="flex justify-end gap-3 rounded text-white relative group">
            <a href={`${files.publicUrl}`} download={true} className='inline-block w-full h-full'>
            <ButtonIcon icon={<FaDownload/>} className="bg-blue-700 rounded w-full">
                    download
            </ButtonIcon>
            </a>
                {/* <ButtonIcon className="bg-red-700 rounded">
                    <MdDeleteForever/>
                </ButtonIcon> */}
            </div>
        </div>
    );
}

export default FileComponent;
