
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { ArrowRight } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().regex(/^\d{10}$/, {
    message: "Please enter a valid 10-digit phone number.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  layout: z.enum(["L-Shaped", "U-Shaped", "Straight", "Parallel", "Island", "Not Sure Yet"], {
    required_error: "You need to select a kitchen layout.",
  }),
  size: z.string().optional(),
  file: z.any().optional(),
  message: z.string().optional(),
})

export function ConsultationForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      size: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const whatsappMessage = `Hi, I'd like to book a free design consultation.
Name: ${values.name}
Phone: ${values.phone}
City: ${values.city}
Kitchen Layout: ${values.layout}
Approx. Size: ${values.size || 'Not provided'}
Message: ${values.message || 'No message provided.'}`;

    const whatsappUrl = `https://wa.me/918851481785?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Please send the pre-filled message to connect with our team.",
    });
    
    form.reset();
  }

  return (
    <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold md:text-4xl">Tell Us About Your Dream Kitchen</h2>
            </div>
            <div className="bg-background dark:bg-muted/50 rounded-2xl border p-6 md:p-10 shadow-lg">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Priya Sharma" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>WhatsApp Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="10-digit mobile number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>City / Location</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Delhi" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="layout"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                            <FormLabel>Kitchen Layout</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                                >
                                    {[ "L-Shaped", "U-Shaped", "Straight", "Parallel", "Island", "Not Sure Yet" ].map(layout => (
                                        <FormItem key={layout} className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value={layout} />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {layout === "Parallel" ? "Parallel / Galley" : layout}
                                            </FormLabel>
                                        </FormItem>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="size"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Approximate Kitchen Size (optional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., 10ft x 8ft" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="file"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Upload Existing Kitchen Photo / Plan (optional)</FormLabel>
                                <FormControl>
                                    <Input type="file" {...form.register("file")} />
                                </FormControl>
                                <FormDescription>
                                    We can discuss this over WhatsApp as well.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Requirements / Message (Optional)</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us about your kitchen space, what you're looking for, or any questions you have."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">
                        Book on WhatsApp Now <ArrowRight className="size-4 ml-2" />
                    </Button>
                </form>
                </Form>
            </div>
        </div>
    </section>
  )
}
