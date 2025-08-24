import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
  const filters = [
    { name: "Frontend", count: 45 },
    { name: "Backend", count: 32 },
    { name: "Full Stack", count: 28 },
    { name: "DevOps", count: 15 },
    { name: "Mobile", count: 22 }
  ];

  const recentActivity = [
    { user: "Sarah K.", action: "completed mock interview", time: "2h ago" },
    { user: "Mike R.", action: "joined as HR mentor", time: "4h ago" },
    { user: "Alex P.", action: "booked technical session", time: "6h ago" }
  ];

  return (
    <div className="space-y-6">
      {/* Filter Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {filters.map((filter, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 hover:bg-muted rounded cursor-pointer transition"
            >
              <span className="text-sm">{filter.name}</span>
              <Badge variant="secondary">{filter.count}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start text-sm">
            📅 Schedule Interview
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm">
            👨‍💼 Browse HR Professionals
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm">
            🎓 Find Mentors
          </Button>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="text-sm">
              <p className="font-medium">{activity.user}</p>
              <p className="text-muted-foreground">{activity.action}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;
