"use client"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { useRouter } from "next/navigation"
import { useState } from "react"

const page = () => {
    const [input, setInput] = useState<string>('')
    const router = useRouter()
    return (
        <div className="container  flex items-center h-full max-w-3x1 mx-auto">
            <div className="relative bg-white w-full h-fit p-4  rounded-lg space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-x1 font-semibold">Create a community</h1>
                </div>
                <hr className="bg-zinc-500 h-px"></hr>
                <div >
                    <p className="text-lg font-medium">Name</p>
                    <p className="text-xs pb-2">Community name including capitalization can not be changed</p>
                    <div className="relative">
                        <p className="absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400">r/
                        </p>
                        <Input value={input}
                            onChange={(e) => setInput(e.target.value)}
                        className="p1-6"/>
                    </div>
                </div>

                <div className="flex justtify-end gap-4">
                    <Button variant='subtle'
                        onClick={() => {
                        router.back()
                    }}>Cancel</Button>
                    <Button>Create Community</Button>
                </div>
            </div>
        </div>
    )

}

export default page