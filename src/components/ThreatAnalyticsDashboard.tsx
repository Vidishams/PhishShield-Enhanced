import {
  AlertTriangle,
  ScanSearch,
  ShieldCheck,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const summaryStats = [
  {
    label: "Total Scans",
    value: "12,480",
    delta: "+18% vs last week",
    icon: ScanSearch,
    accent: "from-cyan-500/20 to-sky-500/5",
  },
  {
    label: "Threats Blocked",
    value: "1,246",
    delta: "+9% this month",
    icon: ShieldAlert,
    accent: "from-rose-500/20 to-orange-500/5",
  },
  {
    label: "Safe Websites",
    value: "10,234",
    delta: "94% safe rate",
    icon: ShieldCheck,
    accent: "from-emerald-500/20 to-lime-500/5",
  },
  {
    label: "Average Risk Score",
    value: "72/100",
    delta: "Moderate trend",
    icon: TrendingUp,
    accent: "from-violet-500/20 to-fuchsia-500/5",
  },
];

const riskDistribution = [
  { name: "Safe", value: 82, fill: "hsl(var(--accent))" },
  { name: "Phishing", value: 18, fill: "hsl(var(--destructive))" },
];

const dailyScans = [
  { day: "Mon", scans: 1180 },
  { day: "Tue", scans: 1320 },
  { day: "Wed", scans: 1260 },
  { day: "Thu", scans: 1480 },
  { day: "Fri", scans: 1540 },
  { day: "Sat", scans: 1610 },
  { day: "Sun", scans: 1490 },
];

const ThreatAnalyticsDashboard = () => {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/80 bg-gradient-to-br from-background via-card/95 to-muted/70 p-6 shadow-[var(--card-shadow)] backdrop-blur-xl md:p-8 lg:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <AlertTriangle className="h-4 w-4" />
              Live mock threat intelligence
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Threat Analytics Dashboard
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                Monitor phishing exposure, scan activity, and website safety in a single responsive view.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summaryStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className={`border-border/70 bg-gradient-to-br ${stat.accent} shadow-sm`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-foreground">{stat.label}</CardTitle>
                  <div className="rounded-full bg-background/70 p-2 text-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold text-foreground">{stat.value}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.delta}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-border/70 bg-card/80 backdrop-blur-xl shadow-[var(--card-shadow)]">
            <CardHeader>
              <CardTitle className="text-foreground">Safe vs Phishing</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskDistribution}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={3}
                  >
                    {riskDistribution.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/80 backdrop-blur-xl shadow-[var(--card-shadow)]">
            <CardHeader>
              <CardTitle className="text-foreground">Daily Scans</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyScans}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip />
                  <Bar dataKey="scans" radius={[8, 8, 0, 0]} fill="hsl(var(--secondary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThreatAnalyticsDashboard;
