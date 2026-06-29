import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OptimizedImage = ({
  src,
  alt = "",
  className = "",
  wrapperClassName = "",
  style = {},
  loading = "lazy",
  decoding = "async",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if the image is already cached
    const img = new Image();
    img.src = src;
    if (img.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden w-full h-full ${wrapperClassName}`}
      style={style}
    >
      {/* Premium Shimmer Skeleton */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 z-10 bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-950 bg-[length:200%_100%] animate-shimmer"
          />
        )}
      </AnimatePresence>

      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full transition-opacity duration-700 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
