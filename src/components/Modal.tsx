import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface ModalComponentProps {
    isModalOpen?: boolean;
    description?: string;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isModalOpen = false,description="Some temp description" }) => {
 const [isOpen, setIsModalOpen] = useState(isModalOpen);
 
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        setIsModalOpen(isModalOpen);
    }, [isModalOpen,description]);

    return (
        <>
         
            <Modal title="Basic Modal" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>{description}</p>
                <Button shape="circle" icon={<EditOutlined />} /> {'  '}
                <Button shape="circle" icon={<DeleteOutlined twoToneColor="#eb2f96" />} />
      
            </Modal>
        </>
    );
};

export default ModalComponent;