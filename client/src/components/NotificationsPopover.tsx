import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Bell, Check } from "lucide-react";
import { parseISO, formatDistanceToNow } from "date-fns";

export default function NotificationsPopover() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Application",
      description: "Ahmed Khaled has applied to your internship.",
      time: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
      read: false,
    },
    {
      id: 2,
      title: "Session Scheduled",
      description: "You have a new session with Layla Ibrahim.",
      time: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
      read: false,
    },
    {
      id: 3,
      title: "Profile Viewed",
      description: "A company reviewed your profile.",
      time: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0 border border-border shadow-lg backdrop-blur-lg bg-background/95">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-semibold text-sm">Notifications</span>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-muted-foreground hover:text-primary" onClick={markAllAsRead}>
              <Check className="h-3 w-3 mr-1" />
              Mark all as read
            </Button>
          )}
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No new notifications
            </div>
          ) : (
            notifications.map((n) => (
              <div key={n.id} className={`p-4 border-b border-border/50 transition-colors last:border-0 ${n.read ? 'opacity-70' : 'bg-primary/5 hover:bg-primary/10'}`}>
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium text-sm text-foreground">{n.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(parseISO(n.time), { addSuffix: true })}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{n.description}</p>
              </div>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
