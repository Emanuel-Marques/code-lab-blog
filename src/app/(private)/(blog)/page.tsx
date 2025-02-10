import Header from "@/components/layout/Header";
import PostCard from "@/components/ui/PostCard";
import { posts } from "@/mock/posts";

export default function Blog() {
    return (
      <>
        <Header />
        <main className="bg-dark-10 p-7">
          {
            posts.map((post, index) => (
              <PostCard 
                key={index}
                id={post.id}
                date={post.date}
                title={post.title}
                content={post.content}
              />
            ))
          }
        </main>
      </>
    );
  }
  