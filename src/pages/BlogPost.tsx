import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { blogPosts } from './Blog'; // Import blog data from the list page
import heroImage from '@/assets/hero-living-room.jpg';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Hardcoded content for the demo matching the specific post ID if available, else generic.
    // In a real app, this would come from a CMS or API.
    const renderContent = () => {
        if (post.id === 'exploring-top-5-interior-styles-2024') {
            return (
                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-p:text-muted-foreground prose-a:text-gold prose-li:text-muted-foreground">
                    <p>
                        Are you ready to elevate your home decor game in 2024? Stay ahead of the curve and dive into the top 5 interior styles that are set to dominate the design world. Whether you're a seasoned interior design enthusiast or someone looking to spruce up their living space, these trends are sure to inspire and spark your creativity.
                    </p>
                    <p>
                        Let's take a closer look at the upcoming interior styles that will redefine the way we perceive home interiors:
                    </p>

                    <h3>1. Eco-Chic</h3>
                    <p>
                        Embrace sustainability and nature-inspired elements with the Eco-Chic interior style. This trend focuses on incorporating organic materials, earthy tones, and biophilic designs to create a harmonious and eco-friendly living environment. From reclaimed wood furniture to indoor plants, Eco-Chic interiors bring the outdoors in, fostering a sense of tranquility and connection with nature.
                    </p>

                    <h3>2. Modern Minimalism</h3>
                    <p>
                        Sleek, sophisticated, and clutter-free – Modern Minimalism is the epitome of understated elegance. This interior style emphasizes clean lines, neutral color palettes, and functional furniture pieces. Create a calming atmosphere by decluttering your space and focusing on essential design elements that exude a sense of simplicity and sophistication.
                    </p>

                    <h3>3. Vintage Revival</h3>
                    <p>
                        Transport yourself back in time with the Vintage Revival interior style. Embrace nostalgia and classic charm by incorporating retro furniture pieces, vintage textiles, and ornate accessories into your home decor. Whether you opt for a mid-century modern look or a Victorian-inspired design, Vintage Revival adds a touch of old-world glamour to any space.
                    </p>

                    <h3>4. Art Deco Glamour</h3>
                    <p>
                        Indulge in luxury and opulence with the Art Deco Glamour interior style. Characterized by bold colors, geometric patterns, and lavish textures, this trend harkens back to the glamorous era of the 1920s. Elevate your home decor with velvet furnishings, metallic accents, and statement lighting fixtures that exude a sense of drama and sophistication.
                    </p>

                    <h3>5. Japandi Fusion</h3>
                    <p>
                        Experience the perfect marriage of Scandinavian minimalism and Japanese aesthetics with the Japandi Fusion interior style. Combining clean lines, natural elements, and a sense of warmth, this trend strikes a delicate balance between simplicity and serenity. Create a Zen-inspired living space by incorporating wooden accents, neutral hues, and cozy textures that invite relaxation and mindfulness.
                    </p>

                    <p>
                        In conclusion, 2024 promises an exciting mix of interior styles that cater to a diverse range of tastes and preferences. Whether you lean towards eco-friendly designs, timeless vintage aesthetics, or modern minimalist decor, there's a trend for everyone. So, embrace the upcoming year with open arms and elevate your home decor with these top 5 interior styles that are set to transform your living space into a sanctuary of style and comfort.
                    </p>
                </div>
            )
        }
        if (post.id === 'how-to-find-professional-interior-designer') {
            return (
                <div className="prose prose-lg max-w-none prose-headings:font-serif prose-p:text-muted-foreground prose-a:text-gold prose-li:text-muted-foreground">
                    <p>
                        You’ve been dreaming of remodeling your home, and now the time has come to start turning those dreams into a reality. But as you begin on this exciting journey, you may be feeling overwhelmed by the number of decisions that lie ahead of you. After all, there’s a lot to consider when it comes to renovating your home, from budget to timeframes to selecting the right materials for the job.
                    </p>
                    <p>
                        One option that can make all of these decisions much easier is hiring a professional interior designer. Sure, a designer may add an extra cost up front – but have you considered what an interior designer could bring to your renovation project? What might be an intimidating task otherwise could become even more special and unique with the help of an experienced design expert. In this article, we’ll discuss how to find a professional interior designer and how they can add value to your renovation project.
                    </p>

                    <h3>Benefits of Working With an Interior Designer</h3>
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

                    <h3>The Costs and Benefits of Professional Design Services</h3>
                    <p>
                        When it comes to home renovation, there are so many factors to consider—functionality, esthetics, budget, and more. Hiring a professional interior designer for your renovation can help you manage all these elements and ensure that the end result is beautiful and practical.
                    </p>
                    <p>
                        An interior designer can help you create a design that fits your lifestyle and vision for the space. They can also suggest materials, finishes, and furniture choices that are within your budget. Plus, they can offer advice on how to get the most out of your investment.
                    </p>
                    <p>
                        It's important to note that while working with an interior designer requires an initial investment, it can add real value to your project in terms of cost savings and quality craftsmanship. Professional designers know where to find the best deals without scrimping on quality—they know where to look and how to get what you need without breaking the bank.
                    </p>
                    <p>
                        Finally, working with a professional allows you to step back from decision-making fatigue. With all the tasks involved in a major renovation project, having someone with expertise handle one aspect of the process can be an invaluable relief—and one that pays off in spades in the end.
                    </p>

                    <h3>Types of Interior Design Professionals to Consider</h3>
                    <p>
                        When looking for a professional interior designer to help you with your renovation project, there are several different types of designers to consider. Each type brings with it its own set of qualifications and strengths that could potentially add value to your renovation.
                    </p>

                    <h4>Designers Specializing in Various Spaces</h4>
                    <p>
                        One type of professional that you should consider is a designer who specializes in particular spaces. These professionals have extensive experience in designing specific rooms or areas, such as living rooms, bathrooms, kitchens, or office spaces. Having a designer who specializes in certain areas will help ensure that they bring the right expertise to your project.
                    </p>
                </div>
            )
        }
        return (
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-p:text-muted-foreground">
                <p>Content for this article is being updated. Please check back later.</p>
                <p>{post.excerpt}</p>
            </div>
        )
    }

    return (
        <Layout>
            {/* Small Hero / Header */}
            <div className="h-[40vh] relative flex items-center justify-center bg-zinc-900 overflow-hidden">
                <img src={heroImage} alt="Cover" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="relative z-10 text-center container-custom">
                    <div className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em] mb-4 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                        <span className="font-semibold">{post.category}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-serif tracking-tight leading-tight max-w-4xl mx-auto">
                        {post.title}
                    </h1>
                </div>
            </div>

            <article className="py-20 bg-background">
                <div className="container-custom max-w-3xl">
                    <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-gold transition-colors mb-10 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Journal
                    </Link>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-12 border-b border-border pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                            <span className="text-foreground font-serif">By Bauhaus Studio</span>
                        </div>
                    </div>

                    {renderContent()}

                    <div className="mt-16 pt-10 border-t border-border">
                        <h3 className="font-serif text-2xl mb-6">Share this article</h3>
                        <div className="flex gap-4">
                            <Button variant="outline" size="sm" className="rounded-full" onClick={() => window.open('https://twitter.com/intent/tweet?text=Check out this article on Bauhaus Studio\'s blog!', '_blank')}>Twitter</Button>
                            <Button variant="outline" size="sm" className="rounded-full" onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u=https://bauhausstudio.com/blog', '_blank')}>Facebook</Button>
                            <Button variant="outline" size="sm" className="rounded-full" onClick={() => window.open('https://www.linkedin.com/shareArticle?mini=true&url=https://bauhausstudio.com/blog', '_blank')}>LinkedIn</Button>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default BlogPost;
