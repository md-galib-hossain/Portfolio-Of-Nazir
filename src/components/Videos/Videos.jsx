const Videos = () => {
    const links = [
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
      "https://www.youtube.com/embed/K87aFjB7Ff0",
    ];
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {links.map((item, index) => (
          <div key={index} className="col-span-1">
            <iframe
              className="w-full aspect-video rounded-md"
              src={item}
              title={`YouTube video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    );
  };
  
  export default Videos;
  