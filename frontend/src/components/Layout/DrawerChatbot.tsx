import { Drawer } from '@neo4j-ndl/react';
import Chatbot from '../ChatBot/Chatbot';
import { DrawerChatbotProps, Messages } from '../../types';
import { useMessageContext } from '../../context/UserMessages';
import { useLocation } from 'react-router';

const DrawerChatbot: React.FC<DrawerChatbotProps> = ({ isExpanded, clearHistoryData, messages, connectionStatus }) => {
  const { setMessages, chatPopout } = useMessageContext();
  const location = useLocation();
  console.log('location', location.state);

  const getIsLoading = (messages: Messages[]) => {
    return messages.some((msg) => msg.isTyping || msg.isLoading);
  };
  return (
    <div className='flex min-h-[calc(-58px+100vh)] relative'>
      <Drawer isExpanded={isExpanded} isCloseable={false} position='right' type='push' className='!pt-0'>
        <Drawer.Body className='!overflow-hidden !pr-0'>
          <Chatbot
            isFullScreen={false}
            messages={chatPopout ? location.state.messages as Messages[] : messages}
            setMessages={setMessages}
            clear={clearHistoryData}
            isLoading={getIsLoading(messages)}
            connectionStatus={connectionStatus}
          />
        </Drawer.Body>
      </Drawer>
    </div>
  );
};
export default DrawerChatbot;
