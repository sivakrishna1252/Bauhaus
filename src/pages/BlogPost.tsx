import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Loader2 } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchBlogBySlug } from '@/lib/api';
import { MOCK_BLOGS, BlogPost as BlogPostType } from './Blog';
import heroImage from '@/assets/hero-living-room.jpg';

const BlogPost = () => {
    const { id: slug } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPostType | any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadPost = async () => {
            if (!slug) return;
            try {
                setLoading(true);
                const data = await fetchBlogBySlug(slug);
                setPost(data);
                setError(false);
            } catch (err) {
                console.error('API fetch failed, checking mocks:', err);
                const mockMatch = MOCK_BLOGS.find(m => m.slug === slug);
                if (mockMatch) {
                    setPost(mockMatch);
                    setError(false);
                } else {
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [slug]);

    if (loading) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
                    <Loader2 className="w-10 h-10 animate-spin text-gold" />
                    <p className="text-muted-foreground font-serif">Arriving at your story...</p>
                </div>
            </Layout>
        );
    }

    if (error || !post) {
        return <Navigate to="/blog" replace />;
    }

    const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const renderContent = () => {
        if (post.slug === 'exploring-top-5-interior-styles-2024') {
            return (
                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-p:text-muted-foreground prose-a:text-gold prose-li:text-muted-foreground">
                    <p>
                        Are you ready to elevate your home decor game in 2024? Stay ahead of the curve and dive into the top 5 interior styles that are set to dominate the design world. Whether you're a seasoned interior design enthusiast or someone looking to spruce up their living space, these trends are sure to inspire and spark your creativity.
                    </p>
                    <p>
                        Let's take a closer look at the upcoming interior styles that will redefine the way we perceive home interiors:
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">1. Eco-Chic</h3>
                    <p>
                        Embrace sustainability and nature-inspired elements with the Eco-Chic interior style. This trend focuses on incorporating organic materials, earthy tones, and biophilic designs to create a harmonious and eco-friendly living environment. From reclaimed wood furniture to indoor plants, Eco-Chic interiors bring the outdoors in, fostering a sense of tranquility and connection with nature.
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">2. Modern Minimalism</h3>
                    <p>
                        Sleek, sophisticated, and clutter-free – Modern Minimalism is the epitome of understated elegance. This interior style emphasizes clean lines, neutral color palettes, and functional furniture pieces. Create a calming atmosphere by decluttering your space and focusing on essential design elements that exude a sense of simplicity and sophistication.
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">3. Vintage Revival</h3>
                    <p>
                        Transport yourself back in time with the Vintage Revival interior style. Embrace nostalgia and classic charm by incorporating retro furniture pieces, vintage textiles, and ornate accessories into your home decor. Whether you opt for a mid-century modern look or a Victorian-inspired design, Vintage Revival adds a touch of old-world glamour to any space.
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">4. Art Deco Glamour</h3>
                    <p>
                        Indulge in luxury and opulence with the Art Deco Glamour interior style. Characterized by bold colors, geometric patterns, and lavish textures, this trend harkens back to the glamorous era of the 1920s. Elevate your home decor with velvet furnishings, metallic accents, and statement lighting fixtures that exude a sense of drama and sophistication.
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">5. Japandi Fusion</h3>
                    <p>
                        Experience the perfect marriage of Scandinavian minimalism and Japanese aesthetics with the Japandi Fusion interior style. Combining clean lines, natural elements, and a sense of warmth, this trend strikes a delicate balance between simplicity and serenity. Create a Zen-inspired living space by incorporating wooden accents, neutral hues, and cozy textures that invite relaxation and mindfulness.
                    </p>

                    <p className="mt-8">
                        In conclusion, 2024 promises an exciting mix of interior styles that cater to a diverse range of tastes and preferences. Whether you lean towards eco-friendly designs, timeless vintage aesthetics, or modern minimalist decor, there's a trend for everyone. So, embrace the upcoming year with open arms and elevate your home decor with these top 5 interior styles that are set to transform your living space into a sanctuary of style and comfort.
                    </p>
                </div>
            );
        }
        if (post.slug === 'how-to-find-professional-interior-designer') {
            return (
                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-p:text-muted-foreground prose-a:text-gold prose-li:text-muted-foreground">
                    <p>
                        You’ve been dreaming of remodeling your home, and now the time has come to start turning those dreams into a reality. But as you begin on this exciting journey, you may be feeling overwhelmed by the number of decisions that lie ahead of you. After all, there’s a lot to consider when it comes to renovating your home, from budget to timeframes to selecting the right materials for the job.
                    </p>
                    <p>
                        One option that can make all of these decisions much easier is hiring a professional interior designer. Sure, a designer may add an extra cost up front – but have you considered what an interior designer could bring to your renovation project? What might be an intimidating task otherwise could become even more special and unique with the help of an experienced design expert. In this article, we’ll discuss how to find a professional interior designer and how they can add value to your renovation project.
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">Benefits of Working With an Interior Designer</h3>
                    <p>
                        When renovating, it's important to make sure that your effort and investment doesn't go to waste. An interior designer can help you have a successful renovation project by bringing their knowledge, experience, and expertise to the table.
                    </p>
                    <p>
                        What can an interior designer do for you? Firstly, they have access to exclusive furniture, fabric, and accessories that you may not find elsewhere. In addition, a professional assessment of the project can help you know exactly what needs to be done in order to get the look and feel that you want.
                    </p>
                    <p>
                        Partnering with an interior designer also means you benefit from their connections with reliable contractors and tradespeople. They can provide solution based design suggestions and offer material selection advice so that your renovation is the best version it could be.
                    </p>
                    <p>
                        Overall, an interior designer is instrumental in helping you maximize the value of your renovation project.
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">The Costs and Benefits of Professional Design Services</h3>
                    <p>
                        When it comes to home renovation, there are so many factors to consider—functionality, aesthetics, budget, and more. Hiring a professional interior designer for your renovation can help you manage all these elements and ensure that the end result is beautiful and practical.
                    </p>
                    <p>
                        An interior designer can help you create a design that fits your lifestyle and vision for the space. They can also suggest materials, finishes, and furniture choices that are within your budget. Plus, they can offer advice on how to get the most out of your investment.
                    </p>
                    <p>
                        It's important to note that while working with an interior designer requires an initial investment, it can add real value to your project in terms of cost savings and quality craftsmanship. Professional designers know where to find the best deals without scrimping on quality—they know where to look and how to get what you need without breaking the bank.
                    </p>
                </div>
            );
        }
        if (post.slug === 'top-5-color-schemes-2024') {
            return (
                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-p:text-muted-foreground prose-a:text-gold prose-li:text-muted-foreground">
                    <p>
                        Colors define a space. Discover the trending color palettes of 2024 that can transform the mood and aesthetic of your home. From earthy terracottas to calming sage greens, this year's color trends are all about creating balance and personality in every room.
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">1. Terracotta and Ochre</h3>
                    <p>
                        Warm, earthy hues like terracotta and ochre are making a major comeback. These colors bring a sense of groundedness and comfort, perfect for living rooms and bedrooms where you want to foster a cozy atmosphere.
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">2. Sage Green and Eucalyptus</h3>
                    <p>
                        Nature-inspired greens continue to be popular. Sage green and eucalyptus shades provide a calming, biophilic touch that helps reduce stress and brings the outdoors in.
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">3. Midnight Blue and Charcoal</h3>
                    <p>
                        For those who prefer drama and sophistication, dark tones like midnight blue and charcoal are ideal. Use them as accent walls or for statement furniture pieces to create a luxurious, library-like feel.
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">4. Soft Peach and Warm Beige</h3>
                    <p>
                        Moving away from cold grays, warm neutrals like soft peach and warm beige are becoming the new standard for a welcoming, airy home.
                    </p>

                    <h3 className="text-2xl mt-8 mb-4">5. Vibrant Jewel Tones</h3>
                    <p>
                        Emerald green, sapphire blue, and amethyst purple are being used to add pops of personality. These colors work beautifully in velvets and other rich textures.
                    </p>
                </div>
            );
        }

        // Dynamic content from API
        return (
            <div
                className="prose prose-lg max-w-none prose-headings:font-serif prose-p:text-muted-foreground prose-a:text-gold prose-li:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        );
    };

    return (
        <Layout>
            <div className="h-[40vh] relative flex items-center justify-center bg-zinc-900 overflow-hidden">
                <img src={post.featured_image || heroImage} alt="Cover" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="relative z-10 text-center container-custom px-4">
                    <div className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em] mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                        <span className="font-semibold">Trends</span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl lg:text-6xl text-white font-serif tracking-tight leading-tight max-w-4xl mx-auto"
                    >
                        {post.title}
                    </motion.h1>
                </div>
            </div>

            <article className="py-20 bg-background">
                <div className="container-custom max-w-3xl">
                    <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-10 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-12 border-b border-border pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formattedDate}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            2 min read
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                            <span className="text-foreground font-serif">By {post.author || 'Bauhaus Studio'}</span>
                        </div>
                    </div>

                    {renderContent()}

                    <div className="mt-16 pt-10 border-t border-border">
                        <h3 className="font-serif text-2xl mb-6">Share this article</h3>
                        <div className="flex gap-4">
                            <Button variant="outline" size="sm" className="rounded-full" onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check out this article: ${post.title}`, '_blank')}>Twitter</Button>
                            <Button variant="outline" size="sm" className="rounded-full" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}>Facebook</Button>
                            <Button variant="outline" size="sm" className="rounded-full" onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`, '_blank')}>LinkedIn</Button>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default BlogPost;
