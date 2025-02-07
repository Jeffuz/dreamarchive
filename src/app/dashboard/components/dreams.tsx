import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'

const Dreams = () => {
    const dataStats = [
        {
            "title": "Dream Streak",
            "content": "5 Days",
            "numbers": "2 more for weekly summary"
        },
        {
            "title": "Total Dreams",
            "content": "42",
            "numbers": "+12 from last month"
        },
        {
            "title": "Avg. Sentiment",
            "content": "Positive",
            "numbers": "+8% from last week"
        },
        {
            "title": "Common Theme",
            "content": "Flying",
            "numbers": "12 occurrences"
        },
    ]

    return (
        <div className='flex-1 space-y-6 p-8'>
            {/* Title */}
            <div className="flex items-center justify-between space-y-2">
                <div className="text-3xl font-bold tracking-tight text-[#F3F4F6]">Dashboard</div>
                <div className="flex items-center space-x-2">
                    <Button className='bg-lime-400 hover:bg-lime-500 text-[#030712] transition duration-200'>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Record Dream
                    </Button>
                </div>
            </div>
            {/* Stats */}
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                {
                    dataStats.map((card, index) => (
                        <Card key={index} className='text-[#F3F4F6] border-gray-800 bg-[#030712]/50'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold pb-1 text-lime-400">{card.content}</div>
                                <div className="text-xs text-muted-foreground">{card.numbers}</div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Dreams