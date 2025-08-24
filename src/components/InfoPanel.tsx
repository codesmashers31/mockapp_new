import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const InfoPanel = () => {
  const stats = [
    { label: "Active HRs", value: "150+" },
    { label: "Mentors", value: "200+" },
    { label: "Sessions Today", value: "45" },
    { label: "Success Rate", value: "95%" }
  ];

  const upcomingSessions = [
    { time: "2:00 PM", mentor: "John D.", type: "Technical" },
    { time: "3:30 PM", mentor: "Sarah M.", type: "HR Round" },
    { time: "5:00 PM", mentor: "Mike L.", type: "Full Stack" }
  ];

  return (
    <div className="space-y-6">
      {/* Platform Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Platform Stats</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Sessions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingSessions.map((session, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <div className="font-medium text-sm">{session.time}</div>
                <div className="text-xs text-muted-foreground">{session.mentor}</div>
              </div>
              <div className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                {session.type}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Help & Support */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start text-sm">
            📞 Contact Support
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm">
            📚 View Guides
          </Button>
          <Button variant="outline" className="w-full justify-start text-sm">
            💬 Live Chat
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoPanel;
