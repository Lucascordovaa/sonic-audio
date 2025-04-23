"use client"

import { CardFooter } from "@/components/ui/card"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactForm() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        alert("Note: This contact form is non-functional and provided for layout/demo purposes only. " +
            "No information was submitted, and Messages will not be sent or received.")
    }

    return (
        <div className="mx-auto">
            <Card className="overflow-hidden bg-[#FAFAFA] rounded-3xl">
                <CardHeader>
                    <CardTitle className="text-[28px] leading-[1.4]">Write us</CardTitle>
                    <CardDescription className="text-[16px] leading-[1.5] text-[#575757]">We’d love to hear from you! </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-[16px] leading-[1.5]">First name</Label>
                                <Input id="firstName" name="firstName" placeholder="Enter your first name" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-[16px] leading-[1.5]">Last name</Label>
                                <Input id="lastName" name="lastName" placeholder="Enter your last name" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-[16px] leading-[1.5]">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="your.email@example.com" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-[16px] leading-[1.5]">Message</Label>
                            <Textarea id="message" name="message" placeholder="Your message here..." className="min-h-[120px]" />
                        </div>
                    </form>
                </CardContent>

                <CardFooter className="justify-center items-center">
                    <Button type="submit" form="contact-form" className="w-full p-5 cursor-pointer">
                        Submit
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
