import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-living-room.jpg';
import placeholderImage from '@/assets/project-1.jpg';
import { fetchBlogs } from '@/lib/api';

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    created_at: string;
    featured_image: string | null;
    author: string;
    isMock?: boolean; // Flag to identify mock data
}

export const MOCK_BLOGS: BlogPost[] = [
    {
        id: 'exploring-top-5-interior-styles-2024',
        slug: 'exploring-top-5-interior-styles-2024',
        title: 'Exploring the Top 5 Interior Styles of 2024 to Elevate Your Home Decor',
        excerpt: "Are you ready to elevate your home decor game in 2024? Stay ahead of the curve and dive into the top 5 interior styles that are set to dominate the design world.",
        created_at: '2024-10-01T00:00:00Z',
        featured_image: placeholderImage,
        author: 'Admin',
        isMock: true
    },
    {
        id: 'how-to-find-professional-interior-designer',
        slug: 'how-to-find-professional-interior-designer',
        title: 'How to Find a Professional Interior Designer for Your Renovation',
        excerpt: "Finding the right interior designer can make or break your renovation project. Here are key tips to ensure you hire a professional who aligns with your vision.",
        created_at: '2024-09-24T00:00:00Z',
        featured_image: placeholderImage,
        author: 'Admin',
        isMock: true
    },
    {
        id: 'top-5-color-schemes-2024',
        slug: 'top-5-color-schemes-2024',
        title: 'The Top 5 Color Schemes You Should Try Out In Your Home To Stay Trendy',
        excerpt: "Colors define a space. Discover the trending color palettes of 2024 that can transform the mood and aesthetic of your home.",
        created_at: '2024-09-15T00:00:00Z',
        featured_image: placeholderImage,
        author: 'Admin',
        isMock: true
    }
];

const BlogStatus = ({ message }: { message: string }) => (
    <div className="flex justify-center items-center py-20">
        <p className="text-muted-foreground font-serif text-xl">{message}</p>
    </div>
);

const Blog = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                setLoading(true);
                const dynamicData = await fetchBlogs();

                // Merge logic: Dynamic blogs take priority, fill remaining slots with MOCK_BLOGS up to 3 total items.
                const merged = [...dynamicData, ...MOCK_BLOGS].slice(0, 3);
                setBlogs(merged);
            } catch (err) {
                console.error('Error fetching blogs, using fallback:', err);
                setBlogs(MOCK_BLOGS);
            } finally {
                setLoading(false);
            }
        };

        loadBlogs();
    }, []);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-black/40 overflow-hidden">
                <motion.div
                    className="absolute inset-0 z-[-1]"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img src={heroImage} alt="Blog Hero" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>
                <div className="text-center text-white z-10 px-4">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-gold text-sm tracking-[0.4em] uppercase mb-4"
                    >
                        Our Journal
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-5xl md:text-7xl tracking-wide mb-6"
                    >
                        Design Insights
                    </motion.h1>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 bg-background">
                <div className="container-custom">
                    {loading ? (
                        <BlogStatus message="Discovering insights..." />
                    ) : blogs.length === 0 ? (
                        <BlogStatus message="No articles found yet. Stay tuned!" />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {blogs.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <Link to={`/blog/${post.slug}`}>
                                        <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-secondary/20">
                                            <img
                                                src={post.featured_image || placeholderImage}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                                                <span className="text-gold font-medium">Trends</span>
                                                <span>•</span>
                                                <span>{new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            </div>
                                            <h3 className="font-serif text-2xl group-hover:text-gold transition-colors duration-300 leading-tight">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                                                {post.excerpt}
                                            </p>
                                            <div className="pt-2">
                                                <span className="text-xs uppercase tracking-[0.2em] border-b border-gold/50 pb-1 group-hover:border-gold transition-all duration-300">Read Article</span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
};

export default Blog;
