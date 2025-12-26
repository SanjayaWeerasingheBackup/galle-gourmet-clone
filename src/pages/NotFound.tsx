import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
            Page Not Found
          </span>
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide text-foreground mb-6">
            404
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the Galle Fort streets.
          </p>
          <Link to="/">
            <Button variant="heroFilled" size="lg">
              Return Home
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
