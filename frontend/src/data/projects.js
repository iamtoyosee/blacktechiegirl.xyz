// Projects shown on the home page and the /projects page.
// These used to come from the API (posts tagged "project").
// To add a project: import its image and add an object below.
//   cover   – image shown on the card (null shows a purple title panel instead)
//             Screenshots of Agentic Pentest, Vuln Scanner and Rejuvenate were
//             taken from their own frontends built locally (demo data).
//   title   – project name
//   summary – short description
//   url     – where "View Project" goes
//   github  – where "View on Github" goes
import dnsAnalyzer from "../assets/dnsanalyze.png";
import blackSniffer from "../assets/scanner.webp";
import insideOut from "../assets/running.gif";
import agenticPentest from "../assets/proj-agentic-pentest.webp";
import vulnScanner from "../assets/proj-vuln-scanner.webp";
import rejuvenate from "../assets/proj-rejuvenate.webp";

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
  {
    title: "Agentic Pentest",
    summary:
      "A penetration-testing command center: launch web app, API, cloud, network and container tests and track findings in real time.",
    cover: agenticPentest,
    url: "https://pentest.neuroverselab.com",
    github: "https://github.com/iamtoyosee/Agentic-Pentest",
  },
  // url points to GitHub for now: vulnscanner.neuroverselab.com currently
  // points to an IP address that is no longer ours.
  {
    title: "Vuln Scanner",
    summary:
      "Cloud security dashboard that inspects EC2 instances, checks security groups and scans ports for vulnerabilities.",
    cover: vulnScanner,
    url: "https://github.com/iamtoyosee/VulnScannerFrontend",
    github: "https://github.com/iamtoyosee/VulnScannerFrontend",
  },
  {
    title: "Rejuvenate",
    summary:
      "E-commerce website for Rejuvenate skincare, with product search, wishlist and cart.",
    cover: rejuvenate,
    url: "https://rejuvenate.neuroverselab.com",
    github: "https://github.com/iamtoyosee/rejuvenate",
  },
];

export default projects;
