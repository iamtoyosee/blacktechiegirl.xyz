// Projects shown on the /projects page.
// These used to come from the API (posts tagged "project").
// To add a project: import its image and add an object below.
//   cover   – image shown on the card
//   title   – project name
//   summary – short description
//   url     – where "View Project" goes
//   github  – where "View on Github" goes
import dnsAnalyzer from "../assets/dnsanalyze.png";
import blackSniffer from "../assets/scanner.webp";
import insideOut from "../assets/running.gif";

const projects = [
  {
    title: "Advanced DNS Analyzer",
    summary:
      "This DNS analyzer provides in-depth insight on the state of a DNS infrastructure using AI & ML.",
    cover: dnsAnalyzer,
    url: "https://github.com/iamtoyosee/DNS-Analyzer/tree/main",
    github: "https://github.com/iamtoyosee/DNS-Analyzer/tree/main",
  },
  {
    title: "Black Sniffer",
    summary:
      "Command-line tool written in Rust for scanning open ports on a specified target IP address.",
    cover: blackSniffer,
    url: "https://github.com/iamtoyosee/Black_Sniffer",
    github: "https://github.com/iamtoyosee/Black_Sniffer",
  },
  {
    title: "Inside Out",
    summary:
      "A command-line tool for performing quick conversions between different data formats.",
    cover: insideOut,
    url: "https://github.com/iamtoyosee/Inside_Out",
    github: "https://github.com/iamtoyosee/Inside_Out",
  },
];

export default projects;
