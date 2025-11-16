'use client';

import { useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blog';

export default function AdminBlogPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/admin/login');
    },
  });

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(blogPosts);
    }
  }, []);

  const savePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('blogPosts', JSON.stringify(newPosts));
  };

  const handleCreate = () => {
    setEditingPost(null);
    setIsCreating(true);
    setShowForm(true);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsCreating(false);
    setShowForm(true);
  };

  const handleDelete = (slug: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      const newPosts = posts.filter(p => p.slug !== slug);
      savePosts(newPosts);
    }
  };

  const handleSave = (postData: BlogPost) => {
    let newPosts: BlogPost[];
    
    if (isCreating) {
      if (posts.find(p => p.slug === postData.slug)) {
        alert('A post with this slug already exists. Please use a different slug.');
        return;
      }
      newPosts = [...posts, postData];
    } else {
      newPosts = posts.map(p => p.slug === editingPost?.slug ? postData : p);
    }
    
    savePosts(newPosts);
    // Dispatch a custom event to notify other components of the change
    window.dispatchEvent(new CustomEvent('storageUpdated'));

    setShowForm(false);
    setEditingPost(null);
    setIsCreating(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingPost(null);
    setIsCreating(false);
  };
  
  const exportPosts = () => {
     const dataStr = JSON.stringify(posts, null, 2);
     const dataBlob = new Blob([dataStr], { type: 'application/json' });
     const url = URL.createObjectURL(dataBlob);
     const link = document.createElement('a');
     link.href = url;
     link.download = 'blog-posts.json';
     link.click();
   };
 
   const importPosts = (event: React.ChangeEvent<HTMLInputElement>) => {
     const file = event.target.files?.[0];
     if (file) {
       const reader = new FileReader();
       reader.onload = (e) => {
         try {
           const imported = JSON.parse(e.target?.result as string);
           if (Array.isArray(imported)) {
             savePosts(imported);
             alert('Posts imported successfully!');
           }
         } catch (error) {
           alert('Error importing posts. Please check the file format.');
         }
       };
       reader.readAsText(file);
     }
   };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="relative pt-32 lg:pt-40 pb-12 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-lime-400 text-sm font-mono tracking-widest uppercase border border-lime-400/40 px-4 py-2 rounded-full">
                    Admin Panel
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                  Blog Management
                </h1>
                <p className="text-gray-400">Welcome, <span className="font-semibold text-lime-400">{session.user?.name}</span>!</p>
              </div>
              <div className="flex flex-wrap gap-3">
                 <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700"
                >
                  Sign Out
                </button>
                <button
                  onClick={handleCreate}
                  className="px-6 py-3 bg-lime-400 text-black rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  + New Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {showForm ? (
              <ArticleForm
                post={editingPost}
                isCreating={isCreating}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ) : (
              <>
                {/* Actions Bar */}
                <div className="mb-8 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">Total Articles: <span className="text-lime-400 font-semibold">{posts.length}</span></span>
                  </div>
                  <div className="flex gap-3">
                    <label className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700 cursor-pointer">
                      Import JSON
                      <input
                        type="file"
                        accept=".json"
                        onChange={importPosts}
                        className="hidden"
                      />
                    </label>
                    <button
                      onClick={exportPosts}
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700"
                    >
                      Export JSON
                    </button>
                  </div>
                </div>

                {/* Articles List */}
                <div className="grid grid-cols-1 gap-6">
                  {posts.length === 0 ? (
                    <div className="text-center py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl border border-lime-400/20">
                      <p className="text-gray-400 text-lg mb-4">No articles yet</p>
                      <button
                        onClick={handleCreate}
                        className="px-6 py-3 bg-lime-400 text-black rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300"
                      >
                        Create Your First Article
                      </button>
                    </div>
                  ) : (
                    posts.map((post) => (
                      <div
                        key={post.slug}
                        className="group bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl p-6 border border-lime-400/20 hover:border-lime-400/50 transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              {post.featured && (
                                <span className="text-xs text-lime-400 font-mono uppercase border border-lime-400/40 px-2 py-1 rounded">
                                  Featured
                                </span>
                              )}
                              <span className="text-xs text-gray-400 font-mono uppercase border border-gray-700 px-2 py-1 rounded">
                                {post.category}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                              <span>{post.author}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                              <span>•</span>
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs text-lime-400/80 font-mono uppercase border border-lime-400/20 px-2 py-1 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 md:min-w-[200px]">
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              className="px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700 text-center"
                            >
                              View
                            </Link>
                            <button
                              onClick={() => handleEdit(post)}
                              className="px-4 py-2 bg-lime-400/20 text-lime-400 rounded-lg font-medium hover:bg-lime-400/30 transition-colors border border-lime-400/30"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(post.slug)}
                              className="px-4 py-2 bg-red-900/20 text-red-400 rounded-lg font-medium hover:bg-red-900/30 transition-colors border border-red-400/30"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// Article Form Component
function ArticleForm({ 
  post, 
  isCreating, 
  onSave, 
  onCancel 
}: { 
  post: BlogPost | null; 
  isCreating: boolean; 
  onSave: (post: BlogPost) => void; 
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<BlogPost>(post || {
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    author: '',
    authorRole: '',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 min read',
    category: '',
    tags: [],
    featured: false,
    image: ''
  });

  const [tagInput, setTagInput] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(post?.image || null);
  // A post being edited has its slug manually set from the start.
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(!!post);

  // Helper function to generate a URL-friendly slug from a string
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, '-')        // Replace spaces with -
      .replace(/[^\w-]+/g, '')     // Remove all non-word chars
      .replace(/--+/g, '-')        // Replace multiple - with single -
      .replace(/^-+/, '')           // Trim - from start of text
      .replace(/-+$/, '');          // Trim - from end of text

  useEffect(() => {
    // Auto-generate slug from title, but only if user hasn't edited it
    if (!isSlugManuallyEdited && formData.title) {
      setFormData(prev => ({
        ...prev,
        slug: slugify(prev.title)
      }));
    }
  }, [formData.title, isSlugManuallyEdited]);

  useEffect(() => {
    if (post?.image) {
      setImagePreview(post.image);
    } else {
      setImagePreview(null);
    }
  }, [post]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'slug') {
      setIsSlugManuallyEdited(true);
    }

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (name === 'image') {
        setImagePreview(value);
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a local preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setFormData(prev => ({ ...prev, image: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.slug || !formData.title || !formData.content) {
      alert('Please fill in all required fields (slug, title, content)');
      return;
    }

    // Ensure the final slug is clean before saving
    const finalData = {
      ...formData,
      slug: slugify(formData.slug)
    };

    onSave(finalData);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-xl p-8 border border-lime-400/20">
      <h2 className="text-3xl font-bold text-white mb-6">
        {isCreating ? 'Create New Article' : 'Edit Article'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Slug <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400"
              placeholder="article-url-slug"
              required
            />
            <p className="text-xs text-gray-500 mt-1">URL-friendly identifier</p>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400"
              placeholder="Article Title"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400"
              placeholder="AI & Security"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400"
              placeholder="Author Name"
            />
          </div>

          {/* Author Role */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Author Role
            </label>
            <input
              type="text"
              name="authorRole"
              value={formData.authorRole}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400"
              placeholder="Founder and CEO"
            />
          </div>

          {/* Read Time */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Read Time
            </label>
            <input
              type="text"
              name="readTime"
              value={formData.readTime}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400"
              placeholder="5 min read"
            />
          </div>

          {/* Featured */}
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-5 h-5 bg-gray-900 border-gray-700 rounded text-lime-400 focus:ring-lime-400 focus:ring-2"
              />
              <span className="ml-3 text-gray-300">Featured Article</span>
            </label>
          </div>
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Featured Image
          </label>
          <div className="space-y-3">
            <div className="flex gap-3">
              <input
                type="text"
                name="image"
                value={formData.image || ''}
                onChange={handleChange}
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400"
                placeholder="/image.jpg or https://example.com/image.jpg"
              />
              <label className="px-4 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700 cursor-pointer">
                Upload
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
            {imagePreview && (
              <div className="relative w-full h-64 rounded-lg overflow-hidden border border-lime-400/20">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImagePreview(null);
                    setFormData(prev => ({ ...prev, image: '' }));
                  }}
                  className="absolute top-2 right-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Remove
                </button>
              </div>
            )}
            <p className="text-xs text-gray-500">
              Enter an image URL/path (e.g., /image.jpg) or upload an image file. Images in the public folder can be referenced with /filename.jpg
            </p>
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400"
            placeholder="Brief description of the article"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Content <span className="text-red-400">*</span>
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={20}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400 font-mono text-sm"
            placeholder="# Article Title

Your article content here. Use markdown-style formatting:

## Section Title

- Lists
- More items

### Subsection

Regular paragraphs..."
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Supports markdown: # headings, - lists, ``` code blocks
          </p>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Tags
          </label>
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
              className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400"
              placeholder="Add a tag and press Enter"
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-4 py-2 bg-lime-400 text-black rounded-lg font-medium hover:bg-lime-300 transition-colors"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 px-3 py-1 bg-lime-400/20 text-lime-400 rounded-lg border border-lime-400/30"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="text-lime-400 hover:text-lime-300"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4 border-t border-gray-800">
          <button
            type="submit"
            className="px-8 py-3 bg-lime-400 text-black rounded-lg font-semibold hover:bg-lime-300 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {isCreating ? 'Create Article' : 'Save Changes'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

