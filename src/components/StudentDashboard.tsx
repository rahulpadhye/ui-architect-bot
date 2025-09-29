import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import { 
  Upload, 
  BookOpen, 
  Users, 
  Star, 
  Calendar, 
  FileImage,
  MessageSquare,
  Award,
  Camera,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Megaphone
} from "lucide-react";

const StudentDashboard = () => {
  const assignments = [
    {
      title: "Portrait Photography",
      dueDate: "March 15, 2024",
      status: "current",
      description: "Create 5 portrait photos using natural lighting",
      priority: "high"
    },
    {
      title: "Landscape Composition", 
      dueDate: "March 10, 2024",
      status: "submitted",
      grade: "well done",
      description: "Capture landscapes using rule of thirds"
    },
    {
      title: "Black & White Photography",
      dueDate: "March 8, 2024", 
      status: "submitted",
      grade: "completed",
      description: "Master contrast and tonal range"
    },
    {
      title: "Nature Close-ups",
      dueDate: "March 5, 2024",
      status: "submitted", 
      grade: "incomplete",
      description: "Focus on macro photography techniques"
    },
    {
      title: "Architecture Photography",
      dueDate: "March 1, 2024",
      status: "not_submitted",
      grade: "not submitted",
      description: "Capture geometric forms and structures"
    },
    {
      title: "Street Photography",
      dueDate: "March 20, 2024",
      status: "upcoming",
      description: "Document daily life in urban settings"
    }
  ];

  const announcements = [
    {
      title: "Photography Workshop",
      date: "March 18, 2024",
      type: "event",
      description: "Join us for a hands-on lighting workshop"
    },
    {
      title: "Assignment Deadline Extended", 
      date: "March 16, 2024",
      type: "announcement",
      description: "Portrait assignment due date moved to March 17th"
    },
    {
      title: "Guest Speaker Session",
      date: "March 22, 2024", 
      type: "event",
      description: "Professional photographer Sarah Chen will share insights"
    }
  ];

  const recentFeedback = [
    {
      assignment: "Nature Photography",
      mentor: "Sarah Johnson",
      rating: 4.5,
      comment: "Excellent composition and lighting. Consider adjusting contrast in post-processing."
    },
    {
      assignment: "Black & White",
      mentor: "Mike Chen",
      rating: 4.0,
      comment: "Great use of shadows. Work on framing for more impact."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-primary-foreground/80">Continue your photography journey</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Upload className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-sm text-muted-foreground">Photos Uploaded</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <Award className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">8</div>
                      <div className="text-sm text-muted-foreground">Assignments Done</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-creative/10 rounded-lg">
                      <Star className="w-5 h-5 text-creative" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">4.3</div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Assignment */}
            <Card className="border-primary/50 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <AlertCircle className="w-5 h-5" />
                  Current Assignment
                </CardTitle>
                <CardDescription>Your active assignment that needs attention</CardDescription>
              </CardHeader>
              <CardContent>
                {assignments.filter(a => a.status === "current").map((assignment, index) => (
                  <div key={index} className="p-4 border border-primary/20 rounded-lg bg-background">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{assignment.title}</h3>
                      <Badge variant="destructive">Due Soon</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{assignment.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        Due: {assignment.dueDate}
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">
                        <Camera className="w-4 h-4 mr-2" />
                        Upload Work
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* All Assignments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Assignment History
                </CardTitle>
                <CardDescription>View all your assignments and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {assignments.filter(a => a.status !== "current").map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{assignment.title}</h3>
                          {assignment.status === "submitted" && assignment.grade === "well done" && (
                            <CheckCircle className="w-4 h-4 text-success" />
                          )}
                          {assignment.status === "submitted" && assignment.grade === "incomplete" && (
                            <XCircle className="w-4 h-4 text-destructive" />
                          )}
                          {assignment.status === "not_submitted" && (
                            <XCircle className="w-4 h-4 text-destructive" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{assignment.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {assignment.dueDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {assignment.status === "submitted" && assignment.grade === "well done" && (
                          <Badge variant="success">Well Done</Badge>
                        )}
                        {assignment.status === "submitted" && assignment.grade === "completed" && (
                          <Badge variant="secondary">Completed</Badge>
                        )}
                        {assignment.status === "submitted" && assignment.grade === "incomplete" && (
                          <Badge variant="destructive">Incomplete</Badge>
                        )}
                        {assignment.status === "submitted" && assignment.grade === "late" && (
                          <Badge variant="warning">Late</Badge>
                        )}
                        {assignment.status === "not_submitted" && (
                          <Badge variant="destructive">Not Submitted</Badge>
                        )}
                        {assignment.status === "upcoming" && (
                          <Badge>Upcoming</Badge>
                        )}
                        <Button variant="outline" size="sm">
                          <Camera className="w-4 h-4 mr-1" />
                          {assignment.status === "submitted" ? "View" : assignment.status === "upcoming" ? "Preview" : "Upload"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Feedback */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Recent Feedback
                </CardTitle>
                <CardDescription>See what your mentors are saying</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentFeedback.map((feedback, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{feedback.assignment}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-creative text-creative" />
                          <span className="text-sm font-medium">{feedback.rating}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{feedback.comment}</p>
                      <p className="text-xs text-muted-foreground">— {feedback.mentor}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events & Announcements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Megaphone className="w-5 h-5" />
                  Announcements & Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {announcements.map((item, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{item.title}</h4>
                        <Badge variant={item.type === "event" ? "secondary" : "outline"} className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <FileImage className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-3">Drag & drop your photos here</p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* My Group */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5" />
                  My Group
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-semibold text-primary-foreground">
                      SJ
                    </div>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-xs text-muted-foreground">Mentor • sarah@photolearn.com</div>
                    </div>
                  </div>
                  <div className="border-t border-border pt-3 space-y-2">
                    <h4 className="text-sm font-medium">Group Members</h4>
                    {["Emma Wilson", "Jake Martinez", "Lily Chen"].map((name, index) => (
                      <div key={index} className="text-sm text-muted-foreground">{name}</div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Basics of Photography</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Composition Techniques</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Post-Processing</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;