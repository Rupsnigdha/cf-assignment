import { create } from 'zustand';

interface Notification {
  id: string;
  heading: string;
  body: string;
  createdAt: number;
  readAt: number | null;
  isRead: boolean;
}

interface NotificationStore {
  notifications: Notification[];
  markAllAsRead: () => void;
}

export const useNotificationsStore = create<NotificationStore>((set) => ({
  notifications: [
    {
      id: '1',
      heading: 'Welcome to the Platform',
      body: 'Thank you for joining our platform. We hope you enjoy your experience!',
      createdAt: 1709251200000,
      readAt: 1709251800000,
      isRead: true,
    },
    {
      id: '2',
      heading: 'New Feature Available',
      body: 'We have just launched our new dashboard feature. Check it out!',
      createdAt: 1709337600000,
      readAt: 1709338200000,
      isRead: true,
    },
    {
      id: '3',
      heading: 'Security Update',
      body: 'We have updated our security protocols to better protect your data.',
      createdAt: 1709424000000,
      readAt: 1709424600000,
      isRead: true,
    },
    {
      id: '4',
      heading: 'Maintenance Notice',
      body: 'Scheduled maintenance will occur tomorrow at 2 AM UTC.',
      createdAt: 1709510400000,
      readAt: null,
      isRead: false,
    },
    {
      id: '5',
      heading: 'New Message',
      body: 'You have received a new message from the admin team.',
      createdAt: 1709596800000,
      readAt: null,
      isRead: false,
    },
    {
      id: '6',
      heading: 'Account Milestone',
      body: 'Congratulations! Your account is now 1 month old.',
      createdAt: 1709683200000,
      readAt: null,
      isRead: false,
    },
  ],
  markAllAsRead: () => set((state) => ({
    notifications: state.notifications.map(notification => ({
      ...notification,
      isRead: true,
      readAt: notification.readAt || Date.now()
    }))
  })),
}));
