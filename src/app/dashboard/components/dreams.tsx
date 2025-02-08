import React, { useState, useEffect } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import Modal from '@/components/modal'
import { useToast } from '@/hooks/use-toast'
import { Session } from "@supabase/supabase-js";

import { AnimatedList } from '@/components/magicui/animated-list'
import { DreamNotification } from '@/components/DreamNotification'

interface dreamsProps {
    userData: Session | null,
}

interface DreamItem {
    id: string;
    title: string;
    description: string;
    created_at: string;
}

const Dreams = ({ userData }: dreamsProps) => {
    const { toast } = useToast();
    const [dreamModal, setDreamModal] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [dreamData, setDreamData] = useState<DreamItem[]>([]);


    const handleCreateDream = async () => {
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                user_id: userData?.user?.id
            })
        }
        try {
            setLoading(true);
            const baseUrl = window.location.origin;
            const response = await fetch(`${baseUrl}/api/dreams`, settings);
            const user_data = await response.json();
            toast({
                title: "Dream Saved",
                description: <span className="text-white">{user_data.message || "Dream added successfully"}</span>,
                variant: "default",
                className: "bg-[#030712] border border-gray-700 text-lime-400",
            });
            setTitle("");
            setDescription("");
        } catch (error) {
            console.log(error)
            toast({
                title: "Error",
                description: "Something went wrong while saving your dream.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
            setDreamModal(false);
        }
    }

    useEffect(() => {
        const getDreamHistory = async () => {
            try {
                const baseUrl = window.location.origin;
                const response = await fetch(`${baseUrl}/api/dreams?user_id=${userData?.user?.id}`);
                const user_data = await response.json();
                setDreamData(user_data);
            } catch (error) {
                console.log(error);
            }
        }

        getDreamHistory();
    }, [userData?.user?.id])

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
        <>
            <div className='flex-1 space-y-6 p-8'>
                {/* Title */}
                <div className="flex items-center justify-between space-y-2">
                    <div className="text-3xl font-bold tracking-tight text-[#F3F4F6]">Dreams</div>
                    <div className="flex items-center space-x-2">
                        <Button onClick={() => setDreamModal(true)} className='bg-lime-400 hover:bg-lime-500 text-[#030712] transition duration-200'>
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
                {/* Bottom Sections */}
                <div className='grid grid-cols-3 gap h-full'>
                    <div className='col-span-2'>Test</div>
                    {/* Dream History past Week */}
                    <div className='flex flex-col h-full gap-5'>
                        {/* Title */}
                        <div className='text-[#F3F4F6]  font-semibold text-xl'>
                            Dream History
                        </div>
                        <AnimatedList>
                            {dreamData.map((item) => (
                                <DreamNotification key={item.id} {...item} />
                            ))}
                        </AnimatedList>
                    </div>
                </div>
            </div>

            <Modal open={dreamModal} onClose={() => setDreamModal(false)}>
                <div className='w-full md:w-96 h-full flex flex-col'>
                    {/* Title */}
                    <div className="text-lg font-semibold text-[#F3F4F6] mb-4">Record Dream</div>
                    {/* Dream Title */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-400 mb-1">Dream Title</label>
                        <input
                            type="text"
                            placeholder="Enter dream title..."
                            className="w-full p-2 bg-[#030712] border border-gray-800 text-white placeholder-gray-500 rounded-md focus:ring-2 focus:ring-lime-400 outline-none"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    {/* Dream Description */}
                    <div className="mb-3">
                        <label className="block text-sm text-gray-400 mb-1">Dream Description</label>
                        <textarea
                            placeholder="Describe your dream..."
                            rows={6}
                            className="w-full p-2 bg-[#030712] border border-gray-800 text-white placeholder-gray-500 rounded-md resize-none focus:ring-2 focus:ring-lime-400 outline-none"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-2 mt-4">
                        <Button
                            onClick={() => setDreamModal(false)}
                            className="bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
                        >
                            Cancel
                        </Button>
                        <Button
                            className="bg-lime-400 text-[#030712] hover:bg-lime-500 transition"
                            onClick={() => {
                                handleCreateDream();
                            }}
                        >
                            {loading ? "Saving..." : "Save Dream"}
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Dreams