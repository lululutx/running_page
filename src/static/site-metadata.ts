interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: `LuLu's Running Page`,
  siteUrl: 'https://yihong.run',
  logo: 'https://avatars.githubusercontent.com/u/48202120?v=4',
  description: '路在脚下',
  navLinks: [
    {
      name: 'github',
      url: 'https://github.com/lululutx/',
    },
  ],
};

export default data;
