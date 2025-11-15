import React, { useState } from 'react'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgFolderAdd, CgFileAdd } from "react-icons/cg";

const List = ({ list }) => {
  const [openMap, setOpenMap] = useState({});
  const [updateFolder, setUpdateFolder] = useState(false);

  const handleOpen = (node, type) => {
    if (node?.children?.length) {
      setOpenMap(prev => ({
        ...prev,
        [node.name]: !prev[node.name]
      }));
    }
  }

  const handleAdd = (node) => {
    setOpenMap(prev => ({ ...prev, [node.name]: true }));
    setUpdateFolder(!updateFolder);
  }

  return (
    <div className='container'>
      {list.map((node, index) => {
        const isOpen = openMap[node.name] || false;
        return (
          <React.Fragment key={index}>
            <div key={index} className='file-header'>
              <div className='isFolder' onClick={() => handleOpen(node)}>
                {node?.children && (isOpen ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />)}
                <span>{node.name}</span>
              </div>
              {node?.children && (
                <div className='file-folder'>
                  <span><CgFileAdd onClick={() => handleAdd(node, "file")} /></span>
                  <span><CgFolderAdd onClick={() => handleAdd(node, "folder")} /></span>
                </div>
              )}
            </div>
            {updateFolder && (
              <input
                type="text"
                placeholder="Enter name"

              />
            )}
            {isOpen && node?.children && <List list={node.children} />}
          </React.Fragment>
        );
      })}
    </div>
  )
}

export default List