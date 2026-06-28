import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Bell, Star, DollarSign, MessageSquare } from 'lucide-react';
import { io } from 'socket.io-client';

const NotificationDrawer = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'sale', message: 'You sold a prompt: "Cyberpunk Cityscape"!', time: '2m ago', read: false },
    { id: 2, type: 'like', message: 'User123 liked your prompt.', time: '1h ago', read: false },
    { id: 3, type: 'comment', message: 'New comment on "Minimalist Logo".', time: '3h ago', read: true },
  ]);

  useEffect(() => {
    // Basic Socket.io integration for real-time notifications
    const socket = io('http://localhost:5000');
    
    socket.on('NEW_NOTIFICATION', (data) => {
      setNotifications(prev => [{ ...data, id: Date.now(), read: false, time: 'Just now' }, ...prev]);
    });

    return () => socket.disconnect();
  }, []);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type) => {
    switch(type) {
      case 'sale': return <DollarSign className="w-4 h-4 text-green-600" />;
      case 'like': return <Star className="w-4 h-4 text-yellow-500" />;
      case 'comment': return <MessageSquare className="w-4 h-4 text-blue-500" />;
      default: return <Bell className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-gray-900" />
                <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={markAllAsRead}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1"
                >
                  <Check className="w-3 h-3" /> Mark all read
                </button>
                <button 
                  onClick={onClose}
                  className="p-1 rounded-md hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`flex gap-3 p-3 rounded-xl border ${notification.read ? 'bg-white border-gray-100' : 'bg-indigo-50/50 border-indigo-100'}`}
                >
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${notification.read ? 'bg-gray-50' : 'bg-white shadow-sm'}`}>
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <div className="shrink-0 w-2 h-2 rounded-full bg-indigo-600 mt-1.5" />
                  )}
                </div>
              ))}
            </div>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationDrawer;
