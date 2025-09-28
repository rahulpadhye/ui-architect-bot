import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import { 
  Users, 
  GraduationCap, 
  FileImage, 
  MessageSquare, 
  Star, 
  Upload,
  Calendar,
  Clock,
  Award,
  Eye,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const MentorDashboard = () => {
  const pendingReviews = [
    {
      student: "Alex Thompson",
      assignment: "Portrait Photography",
      submitted: "2 hours ago",
      photos: 5
    },
    {
      student: "Emma Wilson", 
      assignment: "Street Photography",
      submitted: "1 day ago",
      photos: 8
    },
    {
      student: "Jake Martinez",
      assignment: "Landscape Composition", 
      submitted: "2 days ago",
      photos: 6
    }
  ];

  const myStudents = [
    {
      name: "Alex Thompson",
      email: "alex@email.com",
      assignments: 12,
      avgGrade: "A-",
      equipment: "Canon EOS R5, 24-70mm f/2.8"
    },
    {
      name: "Emma Wilson",
      email: "emma@email.com", 
      assignments: 10,
      avgGrade: "B+",
      equipment: "Sony A7III, 50mm f/1.8"
    },
    {
      name: "Jake Martinez",
      email: "jake@email.com",
      assignments: 8,
      avgGrade: "A",
      equipment: "Nikon D850, 85mm f/1.4"
    },
    {
      name: "Lily Chen",
      email: "lily@email.com",
      assignments: 15,
      avgGrade: "A+",
      equipment: "Fujifilm X-T4, 35mm f/2"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-r from-creative to-creative/80 text-creative-foreground">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Mentor Dashboard</h1>
          <p className="text-creative-foreground/80">Guide your students to photography excellence</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Clock className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-sm text-muted-foreground">Pending Reviews</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-muted-foreground">Reviews Complete</div>
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
                  <div className="text-2xl font-bold">4.8</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="reviews" className="space-y-6">
          <TabsList>
            <TabsTrigger value="reviews">Pending Reviews</TabsTrigger>
            <TabsTrigger value="students">My Students</TabsTrigger>
            <TabsTrigger value="content">Class Content</TabsTrigger>
          </TabsList>

          {/* Pending Reviews */}
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileImage className="w-5 h-5" />
                  Pending Reviews
                </CardTitle>
                <CardDescription>Student submissions waiting for your feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingReviews.map((review, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{review.student}</h3>
                        <p className="text-sm text-muted-foreground">{review.assignment}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>Submitted {review.submitted}</span>
                          <span>{review.photos} photos</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="warning">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Pending
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Students */}
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  My Students
                </CardTitle>
                <CardDescription>Manage and track your student group</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myStudents.map((student, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                        </div>
                        <Badge variant="secondary">{student.avgGrade}</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Assignments: </span>
                          <span className="font-medium">{student.assignments}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Equipment: </span>
                          <span className="font-medium">{student.equipment}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Message
                        </Button>
                        <Button variant="outline" size="sm">
                          <Award className="w-4 h-4 mr-1" />
                          View Portfolio
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Class Content */}
          <TabsContent value="content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upload Content */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Upload Class Content
                  </CardTitle>
                  <CardDescription>Add new materials for your students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <GraduationCap className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-3">Upload PowerPoints, images, or documents</p>
                      <Button variant="outline">
                        Choose Files
                      </Button>
                    </div>
                    <Button className="w-full" variant="creative">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Content
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Content */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Content</CardTitle>
                  <CardDescription>Recently uploaded class materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Lighting Fundamentals.pptx", date: "2 days ago", type: "PowerPoint" },
                      { name: "Portrait Examples.zip", date: "5 days ago", type: "Images" },
                      { name: "Assignment Brief.pdf", date: "1 week ago", type: "Document" }
                    ].map((content, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                        <div>
                          <div className="font-medium text-sm">{content.name}</div>
                          <div className="text-xs text-muted-foreground">{content.type} • {content.date}</div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MentorDashboard;