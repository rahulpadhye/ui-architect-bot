import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, type UserRole } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, GraduationCap, Users, BookOpen } from "lucide-react";

const roles: { value: UserRole; label: string; description: string; icon: React.ReactNode }[] = [
  {
    value: "student",
    label: "Student",
    description: "I'm learning photography and submitting assignments",
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    value: "parent",
    label: "Parent",
    description: "I want to track my child's progress and attendance",
    icon: <Users className="w-8 h-8" />,
  },
  {
    value: "mentor",
    label: "Mentor",
    description: "I review student work and provide feedback",
    icon: <BookOpen className="w-8 h-8" />,
  },
];

const Onboarding = () => {
  const { user, saveProfile, session } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If not logged in, redirect
  if (!session) {
    navigate("/login", { replace: true });
    return null;
  }

  const displayName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split("@")[0] ||
    "User";

  const handleContinue = async () => {
    if (!selectedRole) return;
    setSaving(true);
    setError(null);
    try {
      await saveProfile(selectedRole, displayName);
      navigate(`/${selectedRole}`, { replace: true });
    } catch (err: any) {
      console.error("Error saving profile:", err);
      setError(err?.message || "Failed to save profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl mx-auto mb-4">
            <Camera className="w-7 h-7 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome, {displayName}!</CardTitle>
          <CardDescription>Select your role to get started with PhotoLearn</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {roles.map((role) => (
            <button
              key={role.value}
              onClick={() => setSelectedRole(role.value)}
              className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all text-left ${
                selectedRole === role.value
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div
                className={`p-3 rounded-lg ${
                  selectedRole === role.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {role.icon}
              </div>
              <div>
                <div className="font-semibold">{role.label}</div>
                <div className="text-sm text-muted-foreground">{role.description}</div>
              </div>
            </button>
          ))}

          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}

          <Button
            className="w-full mt-4"
            variant="hero"
            disabled={!selectedRole || saving}
            onClick={handleContinue}
          >
            {saving ? "Setting up..." : "Continue"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;
