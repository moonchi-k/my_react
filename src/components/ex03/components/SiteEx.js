const sitelist = [
  {
    id: 0,
    name: "유튜브",
    logoimg:
      "https://e7.pngegg.com/pngimages/19/628/png-clipart-youtuber-logo-video-social-media-for-musicians-youtube-youtube-text-logo.png",
    link: "https://www.youtube.com/?app=desktop&hl=ko&gl=KR",
    alt: "유튜브로고",
  },
  {
    id: 1,
    name: "네이버",
    logoimg:
      "https://i.namu.wiki/i/O_WfY01sM81pAk50fxe-CgHx-pVnipkiexM-biFWhdIBezk7_xJfDiu7P8hzraM5oNm0r92GCaXrfoZ14RNHVg.svg",
    link: "https://www.naver.com/",
    alt: "네이버로고",
  },
  {
    id: 2,
    name: "카카오",
    logoimg:
      "https://cdn.psnews.co.kr/news/photo/202310/2037037_84116_156.jpeg",
    link: "https://cs.kakao.com/",
    alt: "카카오로고",
  },
];

export const SiteEx = () => {
  return (
    <div>
      {sitelist.map((site) => (
        <div key={site.id}>
          <a
            href={site.link}
            style={{ color: "black", textDecoration: "none" }}
          >
            <h2> {site.name} </h2>
            <img
              src={site.logoimg}
              alt={site.alt}
              style={{ width: 100, height: 40 }}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SiteEx;
