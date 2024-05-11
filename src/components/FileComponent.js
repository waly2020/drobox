import React from 'react';
import ButtonIcon from './ButtonIcon';
import { MdDeleteForever } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";

/**
 * 
 * @param {{files : {name : string,date : string,extension : string}}} param0 
 * @returns 
 */
const FileComponent = ({files}) => {
    return (
        <div className='border-b-2 py-2 grid grid-cols-[50px,1fr,1fr] gap-3 relative'>
            
            <div className='flex justify-center items-center'>
                <img className='w-full' src={`/files/${files.extension}.png`} alt={files.name}/>
            </div>
            <div>
                <p>{files.extension}</p>
                <p>{files.date}</p>
            </div>
            <div className="flex justify-end gap-3 rounded text-white relative group">
            <ButtonIcon className="bg-blue-700 rounded">
                    <FaDownload/>
                </ButtonIcon>
                <ButtonIcon className="bg-red-700 rounded">
                    <MdDeleteForever/>
                </ButtonIcon>
            </div>
        </div>
    );
}

export default FileComponent;
