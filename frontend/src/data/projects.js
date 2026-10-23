// Projects shown on the home page and the /projects page.
// These used to come from the API (posts tagged "project").
// To add a project: import its image and add an object below.
//   cover   – image shown on the card (null shows a purple title panel instead)
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
  // TODO(Aminat): add a screenshot (cover), a real summary and the repo link
  {
    title: "Agentic Pentest",
    summary: "Penetration testing driven by AI agents.",
    cover: null,
    url: "https://pentest.neuroverselab.com",
    github: "https://github.com/iamtoyosee",
  },
  // TODO(Aminat): add a screenshot (cover), a real summary and the repo link.
  // Its url points to GitHub for now: vulnscanner.neuroverselab.com currently
  // points to an IP address that is no longer ours.
  {
    title: "Vuln Scanner",
    summary: "A tool for scanning applications for vulnerabilities.",
    cover: null,
    url: "https://github.com/iamtoyosee",
    github: "https://github.com/iamtoyosee",
  },
  // TODO(Aminat): add a screenshot (cover), a real summary and the repo link
  {
    title: "Rejuvenate",
    summary: "A web app built with React.",
    cover: null,
    url: "https://rejuvenate.neuroverselab.com",
    github: "https://github.com/iamtoyosee",
  },
];

export default projects;
