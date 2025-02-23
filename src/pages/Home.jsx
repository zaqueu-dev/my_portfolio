import React, { useEffect, useState } from "react";

const Home = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem vel,
      adipisci ea ex ipsum labore consequatur omnis, id mollitia illum impedit
      laudantium magni quis harum exercitationem dolores, quia velit! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Earum accusamus sed
      mollitia quos iste iusto praesentium? Facere sed tempore dignissimos Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      perferendis quas quo dignissimos dolor veniam id maxime atque perspiciatis
      nesciunt blanditiis minima et neque autem molestiae architecto labore,
      vitae ea?voluptate molestiae. Vel totam enim non ex deleniti iure maxime.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
      voluptatum, fugit dicta, provident deserunt quas nam veritatis voluptas
      esse at, accusantium magni necessitatibus sunt numquam ipsam sit tempore
      atque. Iure? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perferendis totam quibusdam deserunt exercitationem, aspernatur eaque,
      sunt quaerat in fuga iure aperiam optio minus quam voluptatum, consectetur
      quisquam rerum sequi voluptatibus. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Laudantium fugit, quasi praesentium atque aspernatur eum
      quo nisi sint incidunt, repellendus eveniet est necessitatibus quisquam
      quidem dolorum tempora tempore eius beatae. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Saepe, iste aliquid obcaecati modi, a
      delectus voluptatibus illo repellat suscipit corporis, rerum velit tempora
      beatae sit recusandae dolores ratione id reprehenderit! Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Expedita asperiores, rerum ipsum
      corporis officia cupiditate aliquam blanditiis vero ut fugiat, atque ullam
      doloribus explicabo ea! Unde dolores eius repellat neque!
      <div className="fixed bottom-0 left-0 h-4 w-full overflow-hidden bg-slate-200">
        <div
          className="flex h-4 bg-slate-400"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </>
  );
};

export default Home;
