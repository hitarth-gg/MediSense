import React, { useState, useEffect } from "react";
import { X, Bell, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Button } from "../../ui/Button";

export default function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Mock notifications - replace with real notification system
    const mockNotifications = [
      {
        id: 1,
        type: "urgent",
        title: "High Priority Patient",
        message: "Patient Rajesh Kumar requires immediate attention",
        timestamp: new Date(),
        read: false,
      },
      {
        id: 2,
        type: "info",
        title: "New Doctor Available",
        message: "Dr. Priya Sharma is now available for consultations",
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        read: false,
      },
    ];

    setNotifications(mockNotifications);
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "urgent":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case "urgent":
        return "border-red-200 bg-red-50";
      case "success":
        return "border-green-200 bg-green-50";
      case "info":
        return "border-blue-200 bg-blue-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`border rounded-lg p-4 shadow-lg transition-all duration-300 ${getNotificationColor(
            notification.type
          )}`}
        >
          <div className="flex items-start space-x-3">
            {getNotificationIcon(notification.type)}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {notification.title}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {notification.message}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {notification.timestamp.toLocaleTimeString()}
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeNotification(notification.id)}
                className="p-1 h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
              {!notification.read && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => markAsRead(notification.id)}
                  className="p-1 h-6 w-6 text-xs"
                >
                  ✓
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
