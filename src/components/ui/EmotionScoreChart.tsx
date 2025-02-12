"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
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
    ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartDataPoint {
    date: string;
    emotionScore: number;
}

const processEmotionData = (dreamData: object): ChartDataPoint[] => {
    if (!dreamData || !Array.isArray(dreamData)) return [];

    return dreamData
        .map((dream) => ({
            date: dream.created_at.slice(5, 10),
            emotionScore: dream.emotion_score,
        }))
        .sort((a, b) => new Date(`2024-${a.date}`).getTime() - new Date(`2024-${b.date}`).getTime());
};

const chartConfig = {
    emotionScore: {
        label: "Emotion Score",
        color: "#A3E635",
    },
} satisfies ChartConfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function EmotionScoreChart({ dreamData }: { dreamData: any[] }) {
    const chartData = processEmotionData(dreamData);

    return (
        <Card className="flex flex-col bg-transparent border border-gray-800">
            <CardHeader>
                <CardTitle className="text-white">Emotion Trends Throughout the Month</CardTitle>
                <CardDescription className="text-gray-500">
                    Tracking emotions over time (1 = Positive, 0.5 = Neutral, 0 = Negative)
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData} margin={{ left: 12, right: 12, bottom: 12 }}>
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <XAxis
                                dataKey="date"
                                tickMargin={8}
                                tickFormatter={(value) => value}
                            />
                            <YAxis domain={[0, 1]} tickCount={6} stroke="#bbb" />
                            <Tooltip content={<ChartTooltipContent hideLabel />} />
                            <Line
                                dataKey="emotionScore"
                                type="monotone"
                                stroke={chartConfig.emotionScore.color}
                                strokeWidth={2}
                                dot={true}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
