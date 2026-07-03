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
  { name: "Safe", value: 82, fill: "#34d399" },
  { name: "Phishing", value: 18, fill: "#f43f5e" },
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
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 shadow-2xl shadow-slate-950/30 md:p-8 lg:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-sm text-amber-300">
              <AlertTriangle className="h-4 w-4" />
              Live mock threat intelligence
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Threat Analytics Dashboard
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
                Monitor phishing exposure, scan activity, and website safety in a single responsive view.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summaryStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className={`border-white/10 bg-gradient-to-br ${stat.accent} backdrop-blur`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-200">{stat.label}</CardTitle>
                  <div className="rounded-full bg-white/10 p-2 text-slate-100">
                    <Icon className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold text-white">{stat.value}</div>
                  <p className="mt-2 text-sm text-slate-300">{stat.delta}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/10 bg-slate-900/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Safe vs Phishing</CardTitle>
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

          <Card className="border-white/10 bg-slate-900/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Daily Scans</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyScans}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="day" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Bar dataKey="scans" radius={[8, 8, 0, 0]} fill="#38bdf8" />
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
