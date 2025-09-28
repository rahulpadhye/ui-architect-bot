import { Button } from "@/components/ui/button";
import { Camera, Users, Upload, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Photography students learning in classroom"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Master Photography with
            <span className="bg-gradient-to-r from-primary to-creative bg-clip-text text-transparent"> Expert Guidance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with mentors, submit assignments, get personalized feedback, and grow your photography skills in our comprehensive learning platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Camera className="w-5 h-5 mr-2" />
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Users className="w-5 h-5 mr-2" />
              Join as Mentor
            </Button>
          </div>

          {/* Feature Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <Upload className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">Upload</div>
              <div className="text-muted-foreground">High-quality photos</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-creative/10 rounded-full mb-3">
                <Award className="w-6 h-6 text-creative" />
              </div>
              <div className="text-2xl font-bold text-foreground">Learn</div>
              <div className="text-muted-foreground">From expert mentors</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-full mb-3">
                <Users className="w-6 h-6 text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground">Grow</div>
              <div className="text-muted-foreground">With your group</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;