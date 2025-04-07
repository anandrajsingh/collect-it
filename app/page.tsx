import { CircleCheck, LinkIcon, Share2, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen font-sans">

      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg shadow-sm px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center" href="/">
          <LinkIcon className="mr-2 h-6 w-6" />
          <div className="font-bold text-xl sm:text-2xl tracking-tight">Collect It</div>
        </Link>
        <nav className="ml-auto  md:flex gap-8 hidden">
          <Link className="font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
        <div className="ml-auto md:ml-20">
          <Button className="bg-black font-medium text-white hover:bg-black/80" variant="outline">
            <Link href="/login">
              Login
            </Link>
          </Button>
        </div>
      </div>


      <div className="flex-1 pt-28">
        <section className="w-full py-20 text-center px-4 md:px-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight max-w-4xl mx-auto">
            Manage All Your <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">Links</span> in One Place
          </h1>
          <p className="mx-auto max-w-[700px] mt-6 text-gray-500 sm:text-xl text-lg">
            Frustrated with losing track of your important links? Collect It keeps them safe, organized, and shareable.
          </p>
          <div className="mt-8 space-x-4">
            <Button className="bg-black text-white" size="lg">
              <Link href="/signup">
                Get Started For Free
              </Link>
            </Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </section>

        <section id="features" className="w-full py-20 px-4 md:px-6 bg-[#fcf4c5]">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Why Collect It?</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
              Built for creators, teams, and professionals who want to take control of their link game.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border hover:shadow-xl transition-all duration-300 bg-[#faf9f4]">
              <CardHeader className="flex flex-col items-center space-y-2">
                <Zap className="text-purple-600 w-8 h-8" />
                <CardTitle className="text-xl">Easy to Use</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Save any link from any website in seconds.
              </CardContent>
            </Card>

            <Card className="border hover:shadow-xl transition-all duration-300 bg-[#faf9f4]">
              <CardHeader className="flex flex-col items-center space-y-2">
                <Share2 className="text-blue-600 w-8 h-8" />
                <CardTitle className="text-xl">Shareable</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Share curated collections with anyone, anytime.
              </CardContent>
            </Card>

            <Card className="border hover:shadow-xl transition-all duration-300 bg-[#faf9f4]">
              <CardHeader className="flex flex-col items-center space-y-2">
                <CircleCheck className="text-green-600 w-8 h-8" />
                <CardTitle className="text-xl">Collaborate</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Invite others to edit and manage links together.
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="pricing" className="w-full py-24 bg-black text-white text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12">
            Start for free. Upgrade only when you are ready to power up.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
            <Card className="bg-white text-black border-2 border-purple-600">
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>✅ Save unlimited links</li>
                  <li>✅ Basic sharing</li>
                  <li>❌ No collaboration</li>
                </ul>
                <div className="mt-6 font-bold text-xl">$0/month</div>
              </CardContent>
            </Card>

            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>✅ Unlimited collections</li>
                  <li>✅ Advanced analytics</li>
                  <li>✅ Collaboration tools</li>
                </ul>
                <div className="mt-6 font-bold text-xl">$9/month</div>
              </CardContent>
            </Card>

            <Card className="bg-white text-black">
              <CardHeader>
                <CardTitle className="text-2xl">Business</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>✅ Everything in Pro</li>
                  <li>✅ Team permissions</li>
                  <li>✅ API access</li>
                </ul>
                <div className="mt-6 font-bold text-xl">$29/month</div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <footer className="bg-black border-t py-6 text-center text-white text-sm">
        © {new Date().getFullYear()} Collect It. All rights reserved.
      </footer>
    </div>
  );
}
