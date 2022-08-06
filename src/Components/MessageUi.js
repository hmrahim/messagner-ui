import React from 'react';
import MessagesList from './MessagesList';
import NewConnections from './NewConnections';

const MessageUi = () => {
    return (
        <div className='w-[350px] mx-auto h-[600px] overflow-y-auto my-5 bg-white  '>
            
            <NewConnections/>
            <MessagesList/>
            
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
        </div>
    );
};

export default MessageUi;