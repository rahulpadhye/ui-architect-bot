import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";
import {
  Users,
  GraduationCap,
  Calendar,
  Star,
  MessageSquare,
  CheckCircle,
  XCircle,
  Clock,
  Megaphone,
  TrendingUp,
  Award,
  BookOpen,
} from "lucide-react";

const ParentDashboard = () => {
  // Mock data — replace with real DB queries later
  const studentInfo = {
    name: "Alex Thompson",
    class: "Photography Fundamentals",
    mentor: "Sarah Mitchell",
    enrolledSince: "Sep 2025",
  };

  const attendanceRecords = [
    { date: "Jan 28, 2026", class: "Class 12 – Portrait Lighting", status: "present" as const },
    { date: "Jan 21, 2026", class: "Class 11 – Composition Rules", status: "present" as const },
    { date: "Jan 14, 2026", class: "Class 10 – Color Theory", status: "absent" as const },
    { date: "Jan 7, 2026", class: "Class 9 – Street Photography", status: "present" as const },
    { date: "Dec 17, 2025", class: "Class 8 – Landscape Basics", status: "present" as const },
    { date: "Dec 10, 2025", class: "Class 7 – Aperture & Depth", status: "late" as const },
    { date: "Dec 3, 2025", class: "Class 6 – Shutter Speed", status: "present" as const },
    { date: "Nov 26, 2025", class: "Class 5 – ISO & Exposure", status: "present" as const },
  ];

  const grades = [
    { assignment: "Portrait Photography", grade: "A", score: 92, maxScore: 100, date: "Jan 25" },
    { assignment: "Street Photography", grade: "B+", score: 87, maxScore: 100, date: "Jan 18" },
    { assignment: "Landscape Composition", grade: "A-", score: 90, maxScore: 100, date: "Jan 11" },
    { assignment: "Light & Shadow Study", grade: "A", score: 95, maxScore: 100, date: "Jan 4" },
    { assignment: "Color Theory Project", grade: "B", score: 83, maxScore: 100, date: "Dec 14" },
    { assignment: "Macro Photography", grade: "A+", score: 98, maxScore: 100, date: "Dec 7" },
  ];

  const mentorFeedback = [
    {
      date: "Jan 26, 2026",
      assignment: "Portrait Photography",
      feedback:
        "Alex shows excellent understanding of lighting angles. The use of natural light in the outdoor portraits was particularly impressive. Needs to work on consistent white balance across a series.",
      rating: 4,
    },
    {
      date: "Jan 19, 2026",
      assignment: "Street Photography",
      feedback:
        "Good eye for candid moments. The composition could be tighter in a few shots — try the rule of thirds more deliberately. Overall strong storytelling through the series.",
      rating: 3,
    },
    {
      date: "Jan 12, 2026",
      assignment: "Landscape Composition",
      feedback:
        "Beautiful use of leading lines and foreground interest. The golden hour shots were stunning. Consider experimenting with longer exposures for water scenes.",
      rating: 4,
    },
  ];

  const announcements = [
    {
      date: "Jan 30, 2026",
      title: "Field Trip: Botanical Garden Shoot",
      content:
        "Next Saturday we'll be visiting the City Botanical Garden for a hands-on landscape and macro photography session. Please bring a tripod if you have one. Meet at the main entrance at 9 AM.",
      priority: "high" as const,
    },
    {
      date: "Jan 27, 2026",
      title: "Assignment Extension",
      content:
        "The deadline for the Portrait Photography assignment has been extended to Feb 5. Please use the extra time to refine your edits.",
      priority: "medium" as const,
    },
    {
      date: "Jan 22, 2026",
      title: "New Equipment Available",
      content:
        "We've added studio lighting kits to the equipment library. Students can borrow them for weekend projects. Sign up via the class portal.",
      priority: "low" as const,
    },
    {
      date: "Jan 15, 2026",
      title: "End-of-Term Exhibition",
      content:
        "Mark your calendars! The student photography exhibition will be held on March 15. Each student will showcase 5 of their best works from the semester.",
      priority: "high" as const,
    },
  ];

  const attendanceRate = Math.round(
    (attendanceRecords.filter((r) => r.status === "present").length / attendanceRecords.length) * 100
  );

  const averageScore = Math.round(grades.reduce((sum, g) => sum + g.score, 0) / grades.length);

  const statusBadge = (status: "present" | "absent" | "late") => {
    switch (status) {
      case "present":
        return (
          <Badge variant="success" className="gap-1">
            <CheckCircle className="w-3 h-3" /> Present
          </Badge>
        );
      case "absent":
        return (
          <Badge variant="destructive" className="gap-1">
            <XCircle className="w-3 h-3" /> Absent
          </Badge>
        );
      case "late":
        return (
          <Badge variant="warning" className="gap-1">
            <Clock className="w-3 h-3" /> Late
          </Badge>
        );
    }
  };

  const priorityBadge = (priority: "high" | "medium" | "low") => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">Important</Badge>;
      case "medium":
        return <Badge variant="warning">Update</Badge>;
      case "low":
        return <Badge variant="secondary">Info</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Parent Dashboard</h1>
          <p className="text-primary-foreground/80">
            Tracking progress for <span className="font-semibold">{studentInfo.name}</span> •{" "}
            {studentInfo.class} • Mentor: {studentInfo.mentor}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Calendar className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{attendanceRate}%</div>
                  <div className="text-sm text-muted-foreground">Attendance</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{averageScore}%</div>
                  <div className="text-sm text-muted-foreground">Avg. Grade</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-creative/10 rounded-lg">
                  <Award className="w-5 h-5 text-creative" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{grades.length}</div>
                  <div className="text-sm text-muted-foreground">Assignments</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{attendanceRecords.length}</div>
                  <div className="text-sm text-muted-foreground">Classes Held</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="attendance" className="space-y-6">
          <TabsList>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="grades">Grades</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="feedback">Mentor Feedback</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
          </TabsList>

          {/* Attendance Tab */}
          <TabsContent value="attendance">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Attendance Record
                </CardTitle>
                <CardDescription>
                  {attendanceRate}% attendance rate across {attendanceRecords.length} classes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {attendanceRecords.map((record, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div>
                        <div className="font-medium">{record.class}</div>
                        <div className="text-sm text-muted-foreground">{record.date}</div>
                      </div>
                      {statusBadge(record.status)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Grades Tab */}
          <TabsContent value="grades">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Grades & Scores
                </CardTitle>
                <CardDescription>Average score: {averageScore}%</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {grades.map((g, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-semibold">{g.assignment}</div>
                          <div className="text-sm text-muted-foreground">{g.date}</div>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="text-lg px-3 py-1">
                            {g.grade}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={(g.score / g.maxScore) * 100} className="flex-1" />
                        <span className="text-sm font-medium text-muted-foreground w-16 text-right">
                          {g.score}/{g.maxScore}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Overall Progress
                  </CardTitle>
                  <CardDescription>Course completion and skill development</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Course Completion</span>
                      <span className="text-muted-foreground">
                        {attendanceRecords.length}/20 classes
                      </span>
                    </div>
                    <Progress value={(attendanceRecords.length / 20) * 100} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Assignments Submitted</span>
                      <span className="text-muted-foreground">{grades.length}/10</span>
                    </div>
                    <Progress value={(grades.length / 10) * 100} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Portfolio Pieces</span>
                      <span className="text-muted-foreground">12/15 target</span>
                    </div>
                    <Progress value={(12 / 15) * 100} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Skill Development
                  </CardTitle>
                  <CardDescription>Mentor-assessed skill levels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { skill: "Composition", level: 85 },
                    { skill: "Lighting", level: 78 },
                    { skill: "Post-Processing", level: 70 },
                    { skill: "Color Theory", level: 82 },
                    { skill: "Technical Camera Skills", level: 90 },
                  ].map((s, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">{s.skill}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <Progress value={s.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Mentor Feedback Tab */}
          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Mentor Feedback
                </CardTitle>
                <CardDescription>
                  Recent feedback from {studentInfo.mentor}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mentorFeedback.map((fb, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{fb.assignment}</div>
                          <div className="text-sm text-muted-foreground">{fb.date}</div>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < fb.rating
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {fb.feedback}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Announcements Tab */}
          <TabsContent value="announcements">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Megaphone className="w-5 h-5" />
                  Announcements
                </CardTitle>
                <CardDescription>Latest updates from the class</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((a, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{a.title}</h3>
                          {priorityBadge(a.priority)}
                        </div>
                        <span className="text-sm text-muted-foreground">{a.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{a.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ParentDashboard;
