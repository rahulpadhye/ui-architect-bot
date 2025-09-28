import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Upload, 
  MessageSquare, 
  Users, 
  Star, 
  GraduationCap,
  Camera,
  FileImage,
  UserCheck
} from "lucide-react";

const Features = () => {
  const studentFeatures = [
    {
      icon: BookOpen,
      title: "Access Class Content",
      description: "View PowerPoints, images, and learning materials from your instructors"
    },
    {
      icon: Upload,
      title: "Submit Homework",
      description: "Upload your photography assignments and get timely feedback"
    },
    {
      icon: MessageSquare,
      title: "Get Feedback",
      description: "Receive detailed critiques and suggestions from expert mentors"
    },
    {
      icon: Users,
      title: "Group Learning",
      description: "Connect with classmates and collaborate in assigned groups"
    }
  ];

  const mentorFeatures = [
    {
      icon: Star,
      title: "Grade Assignments",
      description: "Review and provide detailed feedback on student submissions"
    },
    {
      icon: GraduationCap,
      title: "Manage Content",
      description: "Upload and organize class materials and learning resources"
    },
    {
      icon: UserCheck,
      title: "Track Progress",
      description: "Monitor student development and group performance"
    },
    {
      icon: FileImage,
      title: "Photo Review",
      description: "Analyze high-quality photo uploads with detailed feedback tools"
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools for both students and mentors to create an exceptional learning experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Student Features */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Camera className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">For Students</h3>
            </div>
            
            <div className="space-y-6">
              {studentFeatures.map((feature, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mentor Features */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 bg-creative rounded-lg">
                <GraduationCap className="w-6 h-6 text-creative-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">For Mentors</h3>
            </div>
            
            <div className="space-y-6">
              {mentorFeatures.map((feature, index) => (
                <Card key={index} className="border-border/50 hover:border-creative/20 transition-all duration-300 hover:shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-creative/10 rounded-lg">
                        <feature.icon className="w-4 h-4 text-creative" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;