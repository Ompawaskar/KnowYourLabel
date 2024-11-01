import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import { motion } from 'framer-motion'
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { SignUpContext } from "@/context/SignUpContext"

export const description =
    "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

export const iframeHeight = "600px"

export const containerClassName =
    "w-full h-screen flex items-center justify-center px-4"

export default function SignupForm({ setQuestionIndex }) {

    const { register, handleSubmit } = useForm()
    const {state,dispatch} = useContext(SignUpContext)

    const handlePrevPage = () => {
        setQuestionIndex(prev => prev - 1);
    };

    const onSubmit = (data) => {
        console.log(data);
        console.log("State",state);  
        dispatch({type:"CLEAR_FIELDS"})
    }

    return (
        <motion.div
            className='w-full h-full mt-16 overflow-hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <div className=' w-full ml-4 '>
                <Button className="bg-white px-4 hover:bg-white hover:scale-105" onClick={handlePrevPage}>
                    <ArrowLeft color="black" />
                </Button>
            </div>

            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>

                        <div className="grid gap-2">
                            <Label htmlFor="username">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Valkayrix"
                                required
                                {...register("username")}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                {...register("email")}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" {...register("password")} />
                        </div>
                        <Button type="submit" className="w-full">
                            Create an account
                        </Button>

                    </form>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link to={'/login'} className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}