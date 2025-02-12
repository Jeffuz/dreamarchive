"use client";

import { Pie, PieChart, Cell } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const processDreamData = (dreamData: { themes: string[] }[]) => {
    if (!dreamData || !Array.isArray(dreamData)) return [];

    const themeCount = dreamData.reduce<Record<string, number>>((acc, dream) => {
        dream.themes.forEach((theme) => {
            acc[theme] = (acc[theme] || 0) + 1;
        });
        return acc;
    }, {});

    return Object.entries(themeCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);
};

const chartConfig: ChartConfig = {
    visitors: {
        label: "Count",
    },
} satisfies ChartConfig;

const COLORS = [
    "#84cc16",
    "#65a30d",
    "#22c55e",
    "#16a34a",
    "#059669",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PieChartDonut({ dreamData }: { dreamData: any[] }) {
    const chartData = processDreamData(dreamData);

    return (
        <Card className="flex flex-col bg-transparent border border-gray-800">
            <CardHeader className="items-center pb-0">
                <CardTitle className="text-white">Dream Themes Distribution</CardTitle>
                <CardDescription className="text-gray-500">Top 5 recurring dream themes</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0 my-3">
                <ChartContainer config={chartConfig} className="mx-auto">
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={50}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                            {chartData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
