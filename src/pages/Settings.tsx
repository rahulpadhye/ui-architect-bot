import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { User, Mail, Shield, Clock, ArrowLeft } from "lucide-react";

const Settings = () => {
  const { user, profile, session, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) {
    navigate("/login", { replace: true });
    return null;
  }

  const displayName =
    profile?.display_name ||
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split("@")[0] ||
    "User";

  const avatarUrl = profile?.avatar_url || user?.user_metadata?.avatar_url;
  const email = user?.email || "—";
  const role = profile?.role || "—";
  const lastLogin = user?.last_sign_in_at
    ? new Date(user.last_sign_in_at).toLocaleString()
    : "—";
  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString()
    : user?.created_at
    ? new Date(user.created_at).toLocaleDateString()
    : "—";

  const roleBadgeVariant = (r: string) => {
    switch (r) {
      case "student":
        return "default" as const;
      case "mentor":
        return "success" as const;
      case "parent":
        return "secondary" as const;
      default:
        return "outline" as const;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Button
          variant="ghost"
          size="sm"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <Card className="shadow-lg">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-4">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={displayName}
                  className="w-20 h-20 rounded-full object-cover mx-auto ring-4 ring-muted"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
              )}
            </div>
            <CardTitle className="text-2xl">{displayName}</CardTitle>
            <CardDescription>Account Information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            <div className="grid gap-4">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
                <div className="p-2 bg-muted rounded-lg">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">{email}</div>
                </div>
              </div>

              {/* Role */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
                <div className="p-2 bg-muted rounded-lg">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">Role</div>
                  <div className="font-medium capitalize flex items-center gap-2">
                    {role}
                    <Badge variant={roleBadgeVariant(role)}>{role}</Badge>
                  </div>
                </div>
              </div>

              {/* Last Login */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
                <div className="p-2 bg-muted rounded-lg">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">Last Login</div>
                  <div className="font-medium">{lastLogin}</div>
                </div>
              </div>

              {/* Member Since */}
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border">
                <div className="p-2 bg-muted rounded-lg">
                  <User className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">Member Since</div>
                  <div className="font-medium">{memberSince}</div>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center pt-2">
              Profile information is managed through your Google or Apple account.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
