"use client"

import { useState, useEffect, useRef } from "react"
import { Bell, X, CheckCircle, Clock, Video, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotificationSystem({ patients, onNotificationRead }) {
  const [notifications, setNotifications] = useState([])
  const [showNotifications, setShowNotifications] = useState(false)
  const lastCheckedStatusesRef = useRef({})

  useEffect(() => {
    const newNotifications = []
    const currentStatuses = {}

    patients.forEach((patient) => {
      currentStatuses[patient.id] = patient.status
      const lastStatus = lastCheckedStatusesRef.current[patient.id]

      if (lastStatus && lastStatus !== patient.status) {
        const notification = {
          id: `${patient.id}-${Date.now()}`,
          patientId: patient.id,
          patientName: patient.name,
          oldStatus: lastStatus,
          newStatus: patient.status,
          timestamp: new Date().toISOString(),
          read: false,
        }
        newNotifications.push(notification)
      }
    })

    if (newNotifications.length > 0) {
      setNotifications((prev) => [...newNotifications, ...prev])
    }

    lastCheckedStatusesRef.current = currentStatuses
  }, [patients])

  const getStatusIcon = (status) => {
    switch (status) {
      case "awaiting_doctor":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "video_scheduled":
        return <Video className="h-4 w-4 text-blue-500" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "awaiting_doctor":
        return "Awaiting Doctor Review"
      case "video_scheduled":
        return "Video Consultation Scheduled"
      case "completed":
        return "Case Completed"
      default:
        return "Status Updated"
    }
  }

  const getNotificationMessage = (notification) => {
    const { patientName, newStatus } = notification
    switch (newStatus) {
      case "video_scheduled":
        return `${patientName}'s case has been scheduled for video consultation`
      case "completed":
        return `${patientName}'s case has been completed by the doctor`
      case "awaiting_doctor":
        return `${patientName}'s case is now awaiting doctor review`
      default:
        return `${patientName}'s status has been updated`
    }
  }

  const markAsRead = (notificationId) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === notificationId ? { ...notif, read: true } : notif)))
    onNotificationRead?.(notificationId)
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const removeNotification = (notificationId) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== notificationId))
  }

  const unreadCount = notifications.filter((notif) => !notif.read).length

  return (
    <div className="relative">
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="p-2 text-gray-400 hover:text-gray-600 relative"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {showNotifications && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50 max-h-96 overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Notifications</h3>
              <div className="flex items-center space-x-2">
                {unreadCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs">
                    Mark all read
                  </Button>
                )}
                <button onClick={() => setShowNotifications(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                <Bell className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                <p className="text-sm">No notifications yet</p>
              </div>
            ) : (
              <div className="divide-y">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-gray-50 transition-colors ${
                      !notification.read ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">{getStatusIcon(notification.newStatus)}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{getStatusText(notification.newStatus)}</p>
                        <p className="text-sm text-gray-600 mt-1">{getNotificationMessage(notification)}</p>
                        <p className="text-xs text-gray-400 mt-2">
                          {new Date(notification.timestamp).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex-shrink-0 flex items-center space-x-1">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-blue-600 hover:text-blue-700 text-xs"
                          >
                            Mark read
                          </button>
                        )}
                        <button
                          onClick={() => removeNotification(notification.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {showNotifications && <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />}
    </div>
  )
}
