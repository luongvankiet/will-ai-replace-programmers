import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";

const chartData = [
  {
    id: "notUsed",
    label: "Not used at all",
    value: 34,
    fill: "var(--color-notUsed)",
  },
  {
    id: "limited",
    label: "Used to a limited extent",
    value: 33,
    fill: "var(--color-limited)",
  },
  {
    id: "moderately",
    label: "Used moderately",
    value: 21,
    fill: "var(--color-moderately)",
  },
  {
    id: "extensively",
    label: "Used extensively",
    value: 7,
    fill: "var(--color-extensively)",
  },
  {
    id: "fully",
    label: "Fully embraced",
    value: 5,
    fill: "var(--color-fully)",
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  notUsed: {
    label: "Not used",
    color: "hsl(var(--chart-1))",
  },
  limited: {
    label: "Used to a limited extent",
    color: "hsl(var(--chart-2))",
  },
  moderately: {
    label: "Used moderately",
    color: "hsl(var(--chart-3))",
  },
  extensively: {
    label: "Used extensively",
    color: "hsl(var(--chart-4))",
  },
  fully: {
    label: "Fully embraced",
    color: "hsl(var(--chart-5))",
  },
};

export default function ChartSlide() {
  const totalVisitors = useMemo(() => {
    return chartData.reduce(
      (acc, curr) => (curr.id !== "notUsed" ? acc + curr.value : acc + 0),
      0
    );
  }, []);

  return (
    <div className="slide relative">
      <div className="slide-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl">
                AI Integration in Modern Workplaces
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="w-full max-w-lg">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[500px] [&_.recharts-pie-label-text]:fill-foreground [&_.recharts-pie-label-line]:stroke-muted-foreground"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={chartData}
                        dataKey="value"
                        label
                        nameKey="label"
                        innerRadius={60}
                        strokeWidth={5}
                      >
                        <Label
                          content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                              return (
                                <text
                                  x={viewBox.cx}
                                  y={viewBox.cy}
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                >
                                  <tspan
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    className="fill-foreground text-2xl font-bold"
                                  >
                                    {totalVisitors.toLocaleString()}%
                                  </tspan>
                                  <tspan
                                    x={viewBox.cx}
                                    y={(viewBox.cy || 0) + 24}
                                    className="fill-muted-foreground"
                                  >
                                    Using AI at Work
                                  </tspan>
                                </text>
                              );
                            }
                          }}
                        />
                      </Pie>

                      <ChartLegend
                        content={<ChartLegendContent nameKey="id" />}
                        className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Source: AIPRM, “AI in the Workplace Statistics 2024”
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
