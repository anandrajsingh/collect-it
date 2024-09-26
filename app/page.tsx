import { CircleCheck, LinkIcon, Share2, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "./components/ui/botton";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <LinkIcon className="mr-2 h-6 w-6"/>
          <div className="font-bold text-3xl">Collect It</div>
        </Link>
        <nav className="ml-auto  md:flex gap-4 sm:gap-10">
          <Link className="font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="font-medium hover:underline underline-offset-4" href="">
            Pricing
          </Link>
        </nav>
        <div className="ml-auto md:ml-20">
          <Button className="bg-black font-medium text-white hover:bg-black/80" variant="outline">Sign Up Free</Button>
        </div>
      </div>


      <div className="min-h-screen flex-1">
        <section className="w-full py-12 md:py-24">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col space-y-4 items-center text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Manage all your Links in One Place
              </h1>
              <p className="mx-auto space-y-2 max-w-[700px] text-center text-gray-500 md:text-xl lg:text-2xl">
                Frustrated of Pasting and Forgetting your Important Links. <br/>Keep Your Links Safe, So You Never Lose Track
              </p>
              <div className="space-x-4">
                <Button className="bg-black text-white" size="lg">Get Started For Free</Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section>
        <section className="w-full">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col space-y-4 items-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Collect-it
              </h1>
              <p className="mx-auto space-y-2 max-w-[800px] text-center text-gray-500 md:text-lg">
                Collect-it is a powerful link management tool for business and creators. It is designed to help you save time, stay organized and get better results from your links.
              </p>
              <div className="space-x-4">
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                  <Card className="border-2 border-gray-400">
                    <CardHeader>
                      <Zap />
                      <CardTitle>Easy to Use</CardTitle>
                    </CardHeader>
                    <CardContent>
                      Save any link from any website
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-gray-400">
                    <CardHeader>
                      <Share2 />
                      <CardTitle>Shareable</CardTitle>
                    </CardHeader>
                    <CardContent>
                      Share your links with anyone
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-gray-400">
                    <CardHeader>
                      <CircleCheck />
                      <CardTitle>Collaborate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      Edit your links with others
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        </section>
      </div>
      <section id="pricing" className="w-full min-h-screen bg-black">

      </section>
    </div>
  );
}
