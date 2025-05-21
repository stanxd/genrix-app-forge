
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const demoExamples = [
    {
      id: "e-commerce",
      title: "E-Commerce",
      prompt: "Create an e-commerce store with product listings, shopping cart, checkout flow, and user accounts.",
      code: `// Generated e-commerce components
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Product listing component
export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchProducts()
  }, [])
  
  async function fetchProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
    
    if (error) console.log('Error fetching products:', error)
    else setProducts(data || [])
    
    setLoading(false)
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}`
    },
    {
      id: "blog",
      title: "Blog",
      prompt: "Build a blog with markdown support, categories, tags, comments, and a search feature.",
      code: `// Generated blog components
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useState } from 'react'

export default function BlogPost({ post, mdxSource }) {
  const [comments, setComments] = useState(post.comments || [])
  
  async function addComment(comment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        postId: post.id,
        content: comment.content,
        author: comment.author
      })
    })
    
    const newComment = await response.json()
    setComments([...comments, newComment])
  }
  
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{post.title}</h1>
      <div className="flex gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="bg-purple-900/30 text-purple-300 
            px-2 py-1 text-xs rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <MDXRemote {...mdxSource} />
      <CommentsSection comments={comments} onAddComment={addComment} />
    </article>
  )
}`
    },
    {
      id: "saas",
      title: "SaaS Dashboard",
      prompt: "Create a SaaS dashboard with user authentication, subscription management, and analytics.",
      code: `// Generated SaaS dashboard
import { useUser } from '@/hooks/useUser'
import { getSubscription } from '@/utils/stripe'
import { LineChart, BarChart } from '@/components/charts'

export default function Dashboard() {
  const { user, subscription } = useUser()
  const { data: analyticsData } = useAnalytics(user.id)
  
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-8">
        <h2 className="text-2xl font-bold mb-4">Welcome back, {user.name}</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <StatCard 
            title="Total Revenue" 
            value={analyticsData?.totalRevenue || 0} 
            percentage={analyticsData?.revenueIncrease} 
          />
          <StatCard 
            title="Active Users" 
            value={analyticsData?.activeUsers || 0} 
            percentage={analyticsData?.userIncrease} 
          />
          <StatCard 
            title="Conversion Rate" 
            value={\`\${analyticsData?.conversionRate || 0}%\`} 
            percentage={analyticsData?.conversionIncrease} 
          />
        </div>
        
        <div className="bg-white/5 rounded-xl p-4">
          <h3 className="text-xl mb-4">Revenue Over Time</h3>
          <LineChart data={analyticsData?.revenueTimeline || []} />
        </div>
      </div>
      
      <div className="col-span-12 md:col-span-4">
        <SubscriptionCard subscription={subscription} />
        <UserActivityFeed activities={analyticsData?.recentActivity || []} />
      </div>
    </div>
  )
}`
    }
  ];

  return (
    <div id="demo" className="py-24 relative">
      {/* Background blobs */}
      <div className="blob blob-purple w-[400px] h-[400px] top-[10%] right-[10%] opacity-30"></div>
      <div className="blob blob-pink w-[300px] h-[300px] bottom-[20%] left-[15%] opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Genrix in <span className="bg-clip-text text-transparent bg-gradient-to-r from-genrix-purple to-genrix-accent">Action</span>
          </h2>
          <p className="text-lg text-white/70">
            Watch how Genrix transforms simple text prompts into fully functional Next.js applications.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          <Tabs defaultValue="e-commerce">
            <div className="border-b border-white/10 px-6 py-4">
              <TabsList className="bg-black/20">
                {demoExamples.map(example => (
                  <TabsTrigger 
                    key={example.id} 
                    value={example.id}
                    className="data-[state=active]:bg-genrix-purple/20 data-[state=active]:text-genrix-purple"
                  >
                    {example.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {demoExamples.map(example => (
              <TabsContent key={example.id} value={example.id} className="p-0 m-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-6 border-r border-white/10">
                    <h3 className="text-xl font-semibold mb-2">Your Prompt</h3>
                    <div className="bg-black/40 p-4 rounded-md text-white/80 font-mono mb-6">
                      "{example.prompt}"
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">Generated Code</h3>
                    <div className="code-block overflow-auto max-h-80 text-white/80">
                      <pre>{example.code}</pre>
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-4">Result Preview</h3>
                    
                    <div className="bg-white/5 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
                      {!isPlaying ? (
                        <div className="text-center">
                          <Button 
                            onClick={() => setIsPlaying(true)}
                            className="bg-genrix-purple/90 hover:bg-genrix-purple text-white rounded-full h-16 w-16 flex items-center justify-center"
                          >
                            <Play size={24} className="ml-1" />
                          </Button>
                          <p className="mt-4 text-white/70">Click to play demo</p>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-black/60 flex items-center justify-center">
                          <div className="text-white">
                            Demo video would play here
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">App Features:</h4>
                      <ul className="space-y-2">
                        {example.id === "e-commerce" && (
                          <>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              Product catalog with filtering options
                            </li>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              Shopping cart with persistent state
                            </li>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              User authentication and account management
                            </li>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              Checkout process with payment integration
                            </li>
                          </>
                        )}
                        
                        {example.id === "blog" && (
                          <>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              Markdown/MDX content support
                            </li>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              Category and tag filtering
                            </li>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              Comment system with notifications
                            </li>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              Full-text search functionality
                            </li>
                          </>
                        )}
                        
                        {example.id === "saas" && (
                          <>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              User authentication with role-based access
                            </li>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              Subscription management with Stripe integration
                            </li>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              Analytics dashboard with interactive charts
                            </li>
                            <li className="flex items-center">
                              <div className="h-1.5 w-1.5 rounded-full bg-genrix-purple mr-2"></div>
                              Admin panel for user management
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Demo;
